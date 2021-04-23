import React from 'react'
import { TouchableOpacity, View, TextField } from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import StyledText from '../Text'
import { colors } from '../../styles'
import { InputBlock, Spacer } from '..'

type DataHeaderProps = {
  title?: string
  onCloseData: () => void
}

type DataFooterProps = {
  dataName: string
  setDataName: (name: string) => void
  placeholder?: string
}

type DataNumberProps = {
  value: string
  setValue: (value: string) => void
  key: number | string
} & DataHeaderProps &
  DataFooterProps

type DataTextProps = {
  value: string
  setValue: (value: string) => void
  key: number | string
} & DataHeaderProps &
  DataFooterProps

type ControlYouProps = {
  value: string
  setValue: (value: string) => void
  key: number | string
} & DataHeaderProps

type ControlAlexaProps = {
  value: string
  setValue: (value: string) => void
  key: number | string
  availableVariables: Array<string>
} & DataHeaderProps

const renderDataHeader = ({ title, onCloseData }: DataHeaderProps) => {
  return (
    <View row spread centerV>
      <StyledText color={colors.text.dark} bold>
        {title}
      </StyledText>
      <TouchableOpacity onPress={onCloseData}>
        <SimpleLineIcons size={24} name="close" color={colors.text.secondary} />
      </TouchableOpacity>
    </View>
  )
}

const renderDataFooter = ({
  dataName,
  setDataName,
  placeholder = 'SavedData',
}: DataFooterProps) => {
  return (
    <InputBlock
      contents={[
        {
          type: 'row',
          elements: [
            {
              type: 'one-word',
              value: dataName,
              onChange: setDataName,
              placeholder,
              elementType: 'text-field',
              title: 'Name it for later use:',
            },
          ],
          key: `df-${placeholder}`,
        },
      ]}
    />
  )
}

const renderDataNumber = ({
  value,
  setValue,
  title,
  onCloseData,
  dataName,
  setDataName,
  key,
}: DataNumberProps) => {
  return (
    <View padding-16 marginT-16 bg-purple80 br40 key={`${key}-${title}`}>
      {renderDataHeader({ title, onCloseData })}
      <InputBlock
        contents={[
          {
            type: 'row',
            elements: [
              {
                type: 'number',
                value,
                onChange: setValue,
                placeholder: 'E.g. 0',
                elementType: 'text-field',
                title: 'Enter starting value:',
              },
            ],
            key: `${key}-${title}`,
          },
        ]}
      />
      {renderDataFooter({ dataName, setDataName, placeholder: 'E.g. age' })}
    </View>
  )
}

const renderDataText = ({
  value,
  setValue,
  title,
  onCloseData,
  dataName,
  setDataName,
  key,
}: DataTextProps) => {
  return (
    <View padding-16 marginT-16 bg-violet80 br40 key={`${key}-${title}`}>
      {renderDataHeader({ title, onCloseData })}
      <InputBlock
        contents={[
          {
            type: 'row',
            elements: [
              {
                type: 'text',
                value,
                onChange: setValue,
                placeholder: 'E.g. John',
                elementType: 'text-field',
                title: 'Enter initial text:',
              },
            ],
            key: `${key}-${title}`,
          },
        ]}
      />
      {renderDataFooter({ dataName, setDataName, placeholder: 'E.g. name' })}
    </View>
  )
}

const renderControlYou = ({ value, setValue, onCloseData, key }: ControlYouProps) => {
  return (
    <View padding-16 marginT-16 bg-violet70 br40 key={`${key}-cYou`}>
      {renderDataHeader({ title: 'You 🗣️', onCloseData })}
      <InputBlock
        contents={[
          {
            type: 'row',
            elements: [
              {
                type: 'text',
                value,
                onChange: setValue,
                placeholder: 'E.g. I pick {answer}',
                elementType: 'text-field',
                title: "Enter what you'll say to Alexa:",
              },
            ],
            key: `${key}`,
          },
        ]}
      />
      <StyledText size="xSmall">
        ℹ️ wrap where want to store your input: &#123;valueName&#125;.
      </StyledText>
    </View>
  )
}

const renderControlAlexa = ({
  value,
  setValue,
  onCloseData,
  key,
  availableVariables,
}: ControlAlexaProps) => {
  const renderVariables = () => {
    if (!availableVariables.length) return

    return (
      <>
        <Spacer size="letter" />
        <StyledText size="small">
          Available variables:{' '}
          {availableVariables.map(variable => (
            <StyledText color={colors.primary.default} bold size="small" key={`${variable}-${key}`}>
              {`{${variable}} `}
            </StyledText>
          ))}
        </StyledText>
        <Spacer size="xSmall" />
      </>
    )
  }

  return (
    <View padding-16 marginT-16 bg-blue70 br40 key={`${key}-cAlexa`}>
      {renderDataHeader({ title: 'Alexa 🤖', onCloseData })}
      {renderVariables()}
      <InputBlock
        contents={[
          {
            type: 'row',
            elements: [
              {
                type: 'text',
                value,
                onChange: setValue,
                placeholder: availableVariables.length
                  ? `E.g. It is {${availableVariables[0]}}`
                  : 'E.g. Your score is {score}',
                elementType: 'text-field',
                title: 'Enter what Alexa should say:',
              },
            ],
            key: `${key}`,
          },
        ]}
      />
      <StyledText size="xSmall">ℹ️ wrap values you want to use: &#123;valueName&#125;.</StyledText>
    </View>
  )
}

export {
  renderDataFooter,
  renderDataHeader,
  renderDataText,
  renderDataNumber,
  renderControlYou,
  renderControlAlexa,
}
