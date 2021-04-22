import React, { ComponentProps, useState } from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import {
  Button,
  Card,
  ExpandableSection,
  KeyboardAwareScrollView,
  Picker,
  View,
} from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import { Expandable, Spacer, StyledInput, StyledText } from '../../components'
import { colors, spacing } from '../../styles'
import { BlockControl, BlockData, BlockSkillName } from '../../components/Blocks'
import { DataBlocks, DataTypes } from '../../components/Blocks/types'

const TestScreen = () => {
  const [skillName, setSkillName] = useState('')
  const [expanded, setExpanded] = useState('skill_name')
  const [dataBlocks, setDataBlocks] = useState<Array<DataTypes>>([])

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <BlockSkillName
        skillName={skillName}
        setSkillName={setSkillName}
        expanded={expanded === 'skill_name'}
        onExpandClick={() => setExpanded(exp => (exp === 'skill_name' ? '' : 'skill_name'))}
        onSaveSkillName={() => {}}
      />
      <Spacer size="small" />
      <BlockData
        dataBlocks={[...dataBlocks]}
        onSaveData={setDataBlocks}
        expanded={expanded === 'data'}
        onExpandClick={() => setExpanded(exp => (exp === 'data' ? '' : 'data'))}
        enabled={skillName.length >= 3}
      />
      <Spacer size="small" />
      <BlockControl
        expanded={expanded === 'control'}
        onExpandClick={() => setExpanded(exp => (exp === 'control' ? '' : 'control'))}
        enabled={skillName.length >= 3}
      />
      <Spacer size="small" />
      <Button label="Finish" borderRadius={8} backgroundColor={colors.primary.medium} disabled />
      <Spacer size="small" />
    </KeyboardAwareScrollView>
  )
}

const cardStyles = StyleSheet.create({
  container: {
    padding: spacing.medium,
    borderRadius: 15,
    backgroundColor: colors.primary.lighter,
  },
  inlineBody: {
    display: 'flex',
    flexDirection: 'row',
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
    alignSelf: 'stretch',
  },
})

export default TestScreen
