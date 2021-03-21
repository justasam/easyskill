import React, { PropsWithChildren } from 'react'
import { Pressable, StyleSheet, PressableProps } from 'react-native'
import StyledText from '../Text'
import { colors, shadows, spacing } from '../../styles'

type StyledButtonProps = PropsWithChildren<
  {
    type?: 'primary' | 'secondary'
    size?: 'content' | 'full'
    text?: string
  } & PressableProps
>

const StyledButton = ({ type = 'primary', size = 'full', text, ...props }: StyledButtonProps) => {
  const renderChildren = () => {
    if (!text) return props.children

    const textColor = type === 'primary' ? colors.text.light : colors.primary.default

    return <StyledText color={textColor}>{text}</StyledText>
  }

  return (
    <Pressable
      {...props}
      style={isPressed => [
        buttonStyles.base,
        buttonStyles[size],
        buttonStyles[type],
        isPressed.pressed ? buttonStyles.pressedStyle : undefined,
      ]}
    >
      {renderChildren()}
    </Pressable>
  )
}

export default StyledButton

const buttonStyles = StyleSheet.create({
  base: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: 8,
    ...shadows.buttonShadow,
  },
  content: {
    alignSelf: 'auto',
  },
  full: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.primary.medium,
  },
  secondary: {
    backgroundColor: colors.background.light,
    borderWidth: 2,
    borderColor: colors.primary.default,
  },
  pressedStyle: {
    opacity: 0.7,
    shadowOpacity: 0.1,
  },
})
