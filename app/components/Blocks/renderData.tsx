import React from 'react'
import { TouchableOpacity, View } from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import StyledText from '../Text'
import StyledInput from '../StyledInput'
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
} & DataHeaderProps &
  DataFooterProps

type DataTextProps = {
  value: string
  setValue: (value: string) => void
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
  return (
    <View row spread centerV>
      <View flex>
        <StyledText size="small">Name it for later use:</StyledText>
        <StyledInput
          placeholder={placeholder}
          value={dataName}
          onChange={setDataName}
          textProps={{ color: colors.primary.medium }}
          underline
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
}: DataNumberProps) => {
  return (
    <View padding-16 marginT-16 bg-dark80 br40>
      {renderDataHeader({ title, onCloseData })}
      <View row spread centerV marginB-16>
        <View flex marginT-16>
          <StyledText size="small">Enter starting value (type 0 if not sure):</StyledText>
          <StyledInput
            placeholder="E.g. 0"
            value={value}
            onChange={setValue}
            textProps={{ color: colors.primary.medium }}
            keyboardType="numeric"
            underline
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
}: DataTextProps) => {
  return (
    <View padding-16 marginT-16 bg-dark80 br40>
      {renderDataHeader({ title, onCloseData })}
      <View row spread centerV marginB-16>
        <View flex marginT-16>
          <StyledText size="small">Enter initial text:</StyledText>
          <StyledInput
            placeholder="E.g. John"
            value={value}
            onChange={setValue}
            textProps={{ color: colors.primary.medium }}
            underline
          />
        </View>
      </View>
      {renderDataFooter({ dataName, setDataName, placeholder: 'E.g. name' })}
    </View>
  )
}

export { renderDataFooter, renderDataHeader, renderDataText, renderDataNumber }
