import React, { PropsWithChildren } from 'react'
import { ColorValue, TextProps, Text } from 'react-native'

import { colors, textStyles } from '../../styles'

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
