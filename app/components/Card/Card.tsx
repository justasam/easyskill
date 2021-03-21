import React, { PropsWithChildren } from 'react'
import { StyleSheet, View } from 'react-native'

import { colors, shadows, spacing } from '../../styles'
import Spacer from '../Spacer'
import StyledText from '../Text'

type CardProps = {
  image?: string
  header?: JSX.Element
  body?: JSX.Element
  footer?: JSX.Element
}

const Card = ({ image, header, body, footer }: CardProps) => {
  const renderHeader = () => {
    if (!header) return null

    return (
      <View>
        {header}
        <Spacer size="xSmall" />
      </View>
    )
  }

  const renderBody = () => {
    return <View style={cardStyles.body}>{body}</View>
  }

  const renderFooter = () => {
    return <View style={cardStyles.footer}>{footer}</View>
  }

  return (
    <View style={cardStyles.container}>
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </View>
  )
}

export default Card

const cardStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.primary.lighter,
    borderRadius: 15,
    padding: spacing.medium,
    aspectRatio: 1,
    justifyContent: 'space-between',
    ...shadows.cardShadow,
  },
  body: {
    flex: 1,
  },
  footer: {
    alignSelf: 'stretch',
  },
})
