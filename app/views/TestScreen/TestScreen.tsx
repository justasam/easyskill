import React, { ComponentProps, useState } from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, ExpandableSection, KeyboardAwareScrollView, Picker, View } from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import { Expandable, Spacer, StyledInput, StyledText } from '../../components'
import { colors, spacing } from '../../styles'
import { BlockData, BlockSkillName } from '../../components/Blocks'

const renderOutput = (output: string, color?: ComponentProps<typeof StyledText>['color']) => {
  return (
    <>
      <Spacer size="xSmall" />
      <StyledText color={color}>&gt;&gt; {output}</StyledText>
    </>
  )
}

const SkillNameBlock = ({
  skillName,
  setSkillName,
  focused = false,
  onPress,
}: {
  skillName: string
  setSkillName: (newValue: string) => void
  focused?: boolean
  onPress: () => void
}) => {
  const renderFocused = () => (
    <>
      <StyledText color={colors.primary.default} size="medium">
        Alexa, open
      </StyledText>
      <Spacer size="letter" orientation="horizontal" />
      <StyledInput
        textProps={{ color: colors.primary.medium, size: 'medium' }}
        placeholder="skill name"
        value={skillName}
        onChange={setSkillName}
        underline
        autoFocus
      />
    </>
  )

  const renderDefault = () => (
    <StyledText color={colors.primary.default} size="medium">
      Alexa, open {skillName}
    </StyledText>
  )

  return (
    <>
      <TouchableOpacity style={cardStyles.container} onPress={onPress}>
        <StyledText>Start by declaring your skill name</StyledText>
        <Spacer size="xSmall" />
        <View style={cardStyles.inlineBody}>
          {focused || !skillName ? renderFocused() : renderDefault()}
        </View>
      </TouchableOpacity>
      {renderOutput(`Alexa, open ${skillName}`, colors.primary.medium)}
    </>
  )
}

const TestScreen = () => {
  const [skillName, setSkillName] = useState('')
  const [focusedBlock, setFocusedBlock] = useState<'SKILL_NAME' | ''>('SKILL_NAME')
  const [expanded, setExpanded] = useState(false)

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <BlockSkillName
        skillName={skillName}
        setSkillName={setSkillName}
        expanded={expanded}
        onExpandClick={() => setExpanded(exp => !exp)}
        onSaveSkillName={() => {}}
      />
      <Spacer size="small" />
      <BlockData
        skillName={skillName}
        setSkillName={setSkillName}
        expanded={expanded}
        onExpandClick={() => setExpanded(exp => !exp)}
      />
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
