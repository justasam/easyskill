import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { StyledButton, StyledText } from '../../components'
import { AuthContext } from '../../state'
import { spacing } from '../../styles'

const HomeScreen = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <StyledText>You've logged in!</StyledText>
      <StyledButton text="Sign Out" onPress={signOut} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
  },
})
