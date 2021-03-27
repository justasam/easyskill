import React, { ComponentProps, PropsWithChildren } from 'react'
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native'

import { colors, shadows, spacing } from '../../styles'

type CardProps = {
  image?: ImageSourcePropType
  header?: JSX.Element
  body?: JSX.Element
  footer?: JSX.Element
  padding?: number
}

const Card = ({ image, header, body, footer, padding }: CardProps) => {
  const renderHeader = () => {
    if (!header) return null

    return <View>{header}</View>
  }

  const renderBody = () => {
    return <View style={cardStyles.body}>{body}</View>
  }

  const renderFooter = () => {
    return <View style={cardStyles.footer}>{footer}</View>
  }

  const renderImage = () => {
    if (!image) return null

    return <Image source={image} style={cardStyles.image} />
  }

  return (
    <View style={[cardStyles.container, padding ? { padding } : undefined]}>
      {renderImage()}
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
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    borderRadius: 15,
    opacity: 0.25,
  },
})
