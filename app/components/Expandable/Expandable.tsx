import React from 'react'
import { Card, ExpandableSection, View } from 'react-native-ui-lib'
import { SimpleLineIcons } from '@expo/vector-icons'

import StyledText from '../Text'
import { colors } from '../../styles'
import { ExpandedProps } from '../Blocks/types'

type Props = {
  header: JSX.Element | string
  children: JSX.Element
} & ExpandedProps

const Expandable = ({ header, children, expanded, onExpandClick }: Props) => {
  const renderHeader = () => {
    if (typeof header === 'string')
      return (
        <StyledText color={colors.primary.default} bold>
          {header}
        </StyledText>
      )

    return header
  }

  return (
    <Card padding-16>
      <ExpandableSection
        expanded={expanded}
        sectionHeader={
          <View centerV spread row>
            {renderHeader()}
            <SimpleLineIcons
              name={expanded ? 'arrow-up' : 'arrow-down'}
              color={colors.primary.default}
              size={24}
            />
          </View>
        }
        onPress={onExpandClick}
      >
        {children}
      </ExpandableSection>
    </Card>
  )
}

export default Expandable
