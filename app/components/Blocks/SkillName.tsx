import React from 'react'
import { View } from 'react-native-ui-lib'

import StyledText from '../Text'
import ExpandedProps from './types'
import { colors } from '../../styles'
import { Expandable, Spacer, StyledInput } from '..'

type Props = {
  skillName: string
  setSkillName: (value: string) => void
} & ExpandedProps

const SkillName = ({ skillName, setSkillName, expanded, onExpandClick }: Props) => {
  return (
    <Expandable
      header={`Skill name ${skillName ? `(${skillName})` : ''}`}
      onExpandClick={onExpandClick}
      expanded={expanded}
    >
      <View row paddingV-8>
        <StyledText color={colors.text.dark}>Alexa, open</StyledText>
        <Spacer size="letter" orientation="horizontal" />
        <StyledInput
          placeholder="my skill"
          value={skillName}
          onChange={setSkillName}
          textProps={{ color: colors.primary.medium }}
          autoFocus
          underline
        />
      </View>
    </Expandable>
  )
}

export default SkillName