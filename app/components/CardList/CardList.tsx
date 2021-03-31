import React, { useState } from 'react'
import { FlatList, ImageSourcePropType } from 'react-native'

import { colors, spacing } from '../../styles'

import Card from '../Card'
import Spacer from '../Spacer'
import StyledText from '../Text'

type Props = {
  items: Array<CardItemType>
  onClick: (item: CardItemType) => void
}

type CardItemType = {
  header: string
  body: string
  image?: ImageSourcePropType
  key: string
}

const CardList = ({ items, onClick }: Props) => {
  const [listHeight, setListHeight] = useState(0)

  const renderCardItem = ({ item }: { item: CardItemType }) => {
    return (
      <Card
        header={
          <>
            <StyledText size="small" numberOfLines={1} color={colors.primary.default} bold>
              {item.header}
            </StyledText>
            <Spacer size="xSmall" />
          </>
        }
        body={
          <StyledText size="xSmall" color={colors.primary.default}>
            {item.body}
          </StyledText>
        }
        image={item.image}
        padding={spacing.small}
        onClick={() => onClick(item)}
      />
    )
  }

  const itemWithSpacerWidth = listHeight + spacing.xSmall

  return (
    <FlatList
      data={items}
      renderItem={renderCardItem}
      ItemSeparatorComponent={() => <Spacer size="xSmall" orientation="horizontal" />}
      // getItemLayout=
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWithSpacerWidth}
      snapToAlignment="start"
      decelerationRate="fast"
      onLayout={({ nativeEvent }) => setListHeight(nativeEvent.layout.height)}
    />
  )
}

export default CardList
