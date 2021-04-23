import React from 'react'
import { Button, Colors, Picker, Switch, TextField, View } from 'react-native-ui-lib'
import { colors } from '../../styles'
import { IBButton, IBElements, IBPicker, IBProps, IBSwitch, IBTextField } from '../../types'
import Spacer from '../Spacer'
import StyledText from '../Text'

const transformers = {
  toNumber: (oldValue: string) => {
    const containsDotOrComma = oldValue.indexOf('.') !== -1 || oldValue.indexOf(',') !== -1
    const resFloat = parseFloat(oldValue)
    if (Number.isNaN(resFloat)) return ''
    if (!resFloat && oldValue === '0') return '0'

    let resString = `${resFloat}`

    if (parseInt(resString) === resFloat && containsDotOrComma) resString += '.'

    return resString
  },
  toOneWord: (oldValue: string) => {
    return oldValue.replace(/\s/g, '')
  },
}

const validations = {
  nonEmpty: (value: string) => ({ error: !value.length, message: 'Field should not be empty' }),
  tagsExist: (value: string, existingTags: Array<string>) => {
    const regExp = /\{(\w+)\}/gm
    let error = false
    let match

    while ((match = regExp.exec(value))) {
      if (!existingTags.includes(match[1])) {
        error = true
        break
      }
    }

    return { error, message: `You have not declared {${match?.[1]}} anywhere.` }
  },
}

const runValidations = (
  checks: Array<keyof typeof validations>,
  value: string,
  existingTags: Array<string>,
) => {
  let validationResult = { error: false, message: '' }

  for (let check of checks) {
    validationResult = validations[check](value, existingTags)

    if (validationResult.error) return validationResult
  }

  return validationResult
}

const renderIBTextField = (element: IBTextField, key: string) => {
  let textTransformer

  if (element.type === 'number') textTransformer = transformers.toNumber
  if (element.type === 'one-word') textTransformer = transformers.toOneWord

  return (
    <View flex key={key}>
      <TextField
        title={element.title}
        placeholder={element.placeholder}
        prefix={element.prefix}
        underlineColor={{
          focus: colors.primary.default,
          default: colors.text.secondary,
          error: Colors.red30,
        }}
        titleColor={{
          focus: colors.primary.default,
          default: colors.text.secondary,
          error: Colors.red30,
        }}
        transformer={textTransformer}
        value={element.value}
        onChangeText={element.onChange}
        disabled={element.disabled}
        error={element.error}
      />
    </View>
  )
}

const renderIBButton = (element: IBButton, key: string) => {
  return (
    <View key={key}>
      <Button {...element} borderRadius={8} backgroundColor={colors.primary.medium} />
    </View>
  )
}

const renderIBSwitch = (element: IBSwitch, key: string) => {
  const renderLabel = () => (
    <View>
      <StyledText size="xSmall">{element.label}</StyledText>
      <Spacer size="letter" />
    </View>
  )

  return (
    <View key={key} center spread paddingB-24>
      {element.label && renderLabel()}
      <Switch {...element} onColor={colors.primary.lighter} onValueChange={element.onChange} />
    </View>
  )
}

const renderIBPicker = (element: IBPicker, key: string) => {
  return (
    <View flex key={key}>
      <Picker {...element} floatingPlaceholder useNativePicker>
        {element.items.map((item, index) => (
          <Picker.Item {...item} key={`${item}-${index}-${key}`} />
        ))}
      </Picker>
    </View>
  )
}

const renderElements = (elements: Array<IBElements>, parentKey: string) => {
  return elements.map((element, index) => {
    const key = `${parentKey}_${index}`

    switch (element.elementType) {
      case 'text-field':
        return renderIBTextField(element, key)
      case 'button':
        return renderIBButton(element, key)
      case 'spacer':
        return <Spacer orientation="horizontal" size="xSmall" {...element} key={key} />
      case 'picker':
        return renderIBPicker(element, key)
      case 'switch':
        return renderIBSwitch(element, key)
      default:
        return
    }
  })
}

const renderRow = (elements: Array<IBElements>, key: string) => {
  return (
    <View row spread centerV key={key}>
      {renderElements(elements, key)}
    </View>
  )
}

const InputBlock = ({ contents }: IBProps) => {
  return (
    <>
      {contents.map(content => {
        if (content.type === 'row') return renderRow(content.elements, content.key)
        return null
      })}
    </>
  )
}

export { validations, runValidations }

export default InputBlock
