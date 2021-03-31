import React, { ComponentProps, PropsWithChildren } from 'react'
import { StyleSheet, View, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'

import { colors, shadows, spacing } from '../../styles'

type CardProps = {
  image?: ImageSourcePropType
  header?: JSX.Element
  body?: JSX.Element
  footer?: JSX.Element
  onClick?: () => void
  padding?: number
  withShadow?: boolean
}

const Card = ({ image, header, body, footer, padding, withShadow = false, onClick }: CardProps) => {
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

  const renderCardContent = () => (
    <>
      {renderImage()}
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </>
  )

  const cardStyle = [
    cardStyles.container,
    padding ? { padding } : undefined,
    withShadow ? shadows.cardShadow : undefined,
  ]

  if (onClick)
    return (
      <TouchableOpacity style={cardStyle} onPress={onClick} activeOpacity={0.5}>
        {renderCardContent()}
      </TouchableOpacity>
    )

  return <View style={cardStyle}>{renderCardContent()}</View>
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
