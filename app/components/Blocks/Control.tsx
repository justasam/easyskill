import React from 'react'
import { View } from 'react-native-ui-lib'

import Expandable from '../Expandable'
import StyledText from '../Text'
import { ExpandedProps } from './types'
import { colors } from '../../styles'

type Props = { enabled?: boolean } & ExpandedProps

const Control = ({ enabled, onExpandClick, expanded }: Props) => {
  const renderBody = () => {
    return (
      <>
        <StyledText color={colors.text.dark} size="small">
          Okay.. Last step, I promise!
        </StyledText>
        <StyledText color={colors.text.secondary} size="small">
          Try thinking of logic in a top to bottom way
        </StyledText>
      </>
    )
  }

  const renderNotEnabled = () => {
    return <StyledText>Set skill name first</StyledText>
  }

  return (
    <Expandable header="Skill Control (logic)" onExpandClick={onExpandClick} expanded={expanded}>
      <View paddingV-8>{enabled ? renderBody() : renderNotEnabled()}</View>
    </Expandable>
  )
}

export default Control
