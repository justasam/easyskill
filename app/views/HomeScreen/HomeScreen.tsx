import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Spacer, StyledButton, StyledText } from '../../components'
import { AuthContext } from '../../state'
import { colors, spacing } from '../../styles'

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <StyledText>You've logged in!</StyledText>
      <StyledButton text="Sign Out" onPress={signOut} />
      <Spacer size="large" />

      <StyledText color={colors.primary.default} size="large">
        Create a new skill
      </StyledText>
      <Spacer size="xSmall" />

      <Card
        header={
          <StyledText color={colors.primary.default} size="large" opacity={0.7} bold>
            Skill name...
          </StyledText>
        }
        body={
          <StyledText color={colors.primary.default} size="medium" opacity={0.7}>
            Description...
          </StyledText>
        }
        footer={
          <View style={styles.cardFooter}>
            <StyledText>Icon</StyledText>
            <StyledButton size="content" text="Create" />
          </View>
        }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
