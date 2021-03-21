import React, { useContext } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { Header, Spacer, StyledButton, StyledText } from '../../components'
import { AuthContext } from '../../state'
import { spacing, colors } from '../../styles'

const AuthScreen = () => {
  const { signIn } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Header />

      <Image style={styles.image} source={require('../../assets/Illustration/Hello.png')} />
      <StyledText color={colors.text.dark} size="regular">
        <StyledText bold>Create a Skill for your Google Assistant...</StyledText>
        <StyledText color={colors.text.secondary}>
          without programming knowledge...or paying
        </StyledText>
      </StyledText>
      <Spacer size="small" />
      <StyledButton type="primary" text="Login with Google" onPress={signIn} />
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.medium,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    maxHeight: '50%',
  },
})
