import React, { ComponentProps } from 'react'
import { ColorValue, TextInput, ViewStyle } from 'react-native'

import { colors, textStyles } from '../../styles'
import StyledText from '../Text'

type Props = {
  placeholder?: string
  textProps: ComponentProps<typeof StyledText>
  value?: string
  onChange?: (inputValue: string) => void
  placeholderColor?: ColorValue
  multiline?: boolean
  underline?: boolean
  autoFocus?: boolean
}

const StyledInput = ({
  placeholder,
  placeholderColor,
  textProps: { size = 'regular', bold = false, color, opacity = 1.0 },
  value,
  onChange,
  multiline = false,
  underline = false,
  autoFocus = false,
}: Props) => {
  const underlineStyle: ViewStyle = {
    borderBottomColor: colors.primary.medium,
    borderBottomWidth: 2,
  }

  return (
    <TextInput
      style={[
        textStyles[size],
        bold ? textStyles.bold : textStyles.base,
        { color, opacity },
        underline ? underlineStyle : {},
      ]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      placeholderTextColor={placeholderColor}
      multiline={multiline}
      autoFocus={autoFocus}
      showSoftInputOnFocus
    />
  )
}

export default StyledInput
