import React, { PropsWithChildren } from 'react'
import { ColorValue, TextProps, Text, StyleSheet } from 'react-native'

import { colors } from '../../styles'

type StyledTextProps = PropsWithChildren<
  {
    bold?: boolean
    color?: ColorValue
    size?: 'xSmall' | 'small' | 'regular' | 'medium' | 'large'
    opacity?: number
  } & TextProps
>

const StyledText = ({
  bold = false,
  color = colors.text.dark,
  size = 'regular',
  opacity = 1,
  ...props
}: StyledTextProps) => {
  return (
    <Text
      {...props}
      style={[textStyles[size], bold ? textStyles.bold : textStyles.base, { color, opacity }]}
    />
  )
}

export default StyledText

const textStyles = StyleSheet.create({
  base: {
    fontFamily: 'Rubik_400Regular',
    fontWeight: '400',
  },
  bold: {
    fontFamily: 'Rubik_500Medium',
    fontWeight: '500',
  },
  xSmall: {
    fontSize: 12,
  },
  small: {
    fontSize: 16,
  },
  regular: {
    fontSize: 18,
  },
  medium: {
    fontSize: 20,
  },
  large: {
    fontSize: 24,
  },
})
