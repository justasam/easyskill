import React from 'react'
import { Button, TextField, View } from 'react-native-ui-lib'

import { ExpandedProps } from './types'
import { colors } from '../../styles'
import { Expandable } from '..'

type Props = {
  skillName: string
  setSkillName: (value: string) => void
  onSaveSkillName: () => void
} & ExpandedProps

const SkillName = ({
  skillName,
  setSkillName,
  expanded,
  onExpandClick,
  onSaveSkillName,
}: Props) => {
  return (
    <Expandable
      header={`Skill name ${skillName ? `(${skillName})` : ''}`}
      onExpandClick={onExpandClick}
      expanded={expanded}
    >
      <View>
        <View row paddingT-16>
          <TextField
            value={skillName}
            onChangeText={setSkillName}
            placeholder="my skill"
            prefix="Alexa, open"
            color={colors.primary.default}
            prefixStyle={{ fontWeight: 'normal' }}
            style={{ fontWeight: 'bold' }}
          />
        </View>
        <Button
          label="Done"
          onPress={onSaveSkillName}
          borderRadius={8}
          backgroundColor={colors.primary.medium}
          disabled={skillName.length < 3}
        />
      </View>
    </Expandable>
  )
}

export default SkillName
