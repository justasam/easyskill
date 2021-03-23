import React, { ComponentProps } from 'react'
import { ColorValue, TextInput } from 'react-native'

import { textStyles } from '../../styles'
import StyledText from '../Text'

type Props = {
  placeholder?: string
  textProps: ComponentProps<typeof StyledText>
  value?: string
  onChange?: (inputValue: string) => void
  placeholderColor?: ColorValue
}

const StyledInput = ({
  placeholder,
  placeholderColor,
  textProps: { size = 'regular', bold = false, color, opacity = 1.0 },
  value,
  onChange,
}: Props) => {
  return (
    <TextInput
      style={[textStyles[size], bold ? textStyles.bold : textStyles.base, { color, opacity }]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      placeholderTextColor={placeholderColor}
    />
  )
}

export default StyledInput
