import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'
import { colors, spacing } from '../../styles'

type Props = {
  content: JSX.Element
  collapsedContent?: JSX.Element
  forceState?: 'expand' | 'collapse'
}

const Expandable = ({ content, collapsedContent, forceState }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true)

  const showExpanded = forceState === 'expand' || (forceState !== 'collapse' && isExpanded)

  return (
    <View style={styles.container}>
      <View style={styles.content}>{showExpanded ? content : collapsedContent}</View>
      <View style={styles.icon}>
        {!forceState && (
          <Pressable onPress={() => setIsExpanded(isExpanded => !isExpanded)}>
            <SimpleLineIcons
              name={showExpanded ? 'arrow-up' : 'arrow-down'}
              color={colors.primary.default}
              size={28}
            />
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: colors.primary.light,
    padding: spacing.small,
    borderRadius: 15,
  },
  content: {
    flex: 1,
    paddingRight: spacing.xSmall,
    justifyContent: 'center',
  },
  icon: {
    flex: 0,
  },
})

export default Expandable
