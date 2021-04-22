import React from 'react'
import { TouchableOpacity, View, TextField } from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import StyledText from '../Text'
import { colors } from '../../styles'

type DataHeaderProps = {
  title: string
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
  const transformer = (value: string) => {
    return value.replace(/\s/g, '')
  }

  return (
    <View row spread centerV>
      <View flex>
        <TextField
          title="Name it for later use:"
          placeholder={placeholder}
          underlineColor={{ focus: colors.primary.default }}
          value={dataName}
          transformer={transformer}
          onChangeText={setDataName}
        />
      </View>
    </View>
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
  const transformToNum = (oldValue: string) => {
    const containsDotOrComma = oldValue.indexOf('.') !== -1 || oldValue.indexOf(',') !== -1
    const resFloat = parseFloat(oldValue)
    if (Number.isNaN(resFloat)) return ''
    if (!resFloat && oldValue === '0') return '0'

    let resString = `${resFloat}`

    if (parseInt(resString) === resFloat && containsDotOrComma) resString += '.'

    return resString
  }

  return (
    <View padding-16 marginT-16 bg-dark80 br40 key={`${key}-${title}`}>
      {renderDataHeader({ title, onCloseData })}
      <View row spread centerV>
        <View flex>
          <TextField
            title="Enter starting value:"
            placeholder="E.g. 0"
            underlineColor={{ focus: colors.primary.default }}
            value={value}
            onChangeText={setValue}
            keyboardType="numeric"
            transformer={transformToNum}
          />
        </View>
      </View>
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
    <View padding-16 marginT-16 bg-dark80 br40 key={`${key}-${title}`}>
      {renderDataHeader({ title, onCloseData })}
      <View row spread centerV>
        <View flex>
          <TextField
            title="Enter initial text:"
            placeholder="E.g. John"
            underlineColor={{ focus: colors.primary.default }}
            value={value}
            onChangeText={setValue}
          />
        </View>
      </View>
      {renderDataFooter({ dataName, setDataName, placeholder: 'E.g. name' })}
    </View>
  )
}

export { renderDataFooter, renderDataHeader, renderDataText, renderDataNumber }
