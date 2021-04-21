import React from 'react'
import { StyleSheet, View } from 'react-native'

import { spacing } from '../../styles'

type SpacerProps = {
  size?: 'letter' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge'
  orientation?: 'vertical' | 'horizontal'
}

const Spacer = ({ size = 'medium', orientation = 'vertical' }: SpacerProps) => (
  <View style={[spacerStyles[size], spacerStyles[orientation]]} />
)

export default Spacer

const spacerStyles = StyleSheet.create({
  letter: {
    padding: spacing.letter,
  },
  xSmall: {
    padding: spacing.xSmall,
  },
  small: {
    padding: spacing.small,
  },
  medium: {
    padding: spacing.medium,
  },
  large: {
    padding: spacing.large,
  },
  xLarge: {
    padding: spacing.xLarge,
  },
  vertical: {
    paddingHorizontal: 0,
  },
  horizontal: {
    paddingVertical: 0,
  },
})
