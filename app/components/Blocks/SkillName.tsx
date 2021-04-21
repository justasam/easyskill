import React from 'react'
import { Card, ExpandableSection, View } from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import StyledText from '../Text'
import ExpandedProps from './types'
import { colors } from '../../styles'
import { Spacer, StyledInput } from '..'

type Props = {
  skillName: string
  setSkillName: (value: string) => void
} & ExpandedProps

const SkillName = ({ skillName, setSkillName, expanded, onExpandClick }: Props) => {
  return (
    <Card padding-16>
      <ExpandableSection
        expanded={expanded}
        sectionHeader={
          <View centerV spread row>
            <StyledText color={colors.primary.default}>
              Skill name {skillName ? `(${skillName})` : undefined}
            </StyledText>
            <SimpleLineIcons name={'arrow-up'} color={colors.primary.default} size={24} />
          </View>
        }
        onPress={onExpandClick}
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
      </ExpandableSection>
    </Card>
  )
}

export default SkillName
