import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import { colors } from '../../styles'
import StyledText from '../Text'

type HeaderProps = {
  withIcon?: boolean
}

const Header = ({ withIcon = false }: HeaderProps) => {
  return (
    <View style={headerStyles.container}>
      <StyledText size="large" color={colors.primary.default} bold>
        EasySkill
      </StyledText>
      {withIcon && <SimpleLineIcons name="menu" size={32} color={colors.primary.default} />}
    </View>
  )
}

export default Header

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
