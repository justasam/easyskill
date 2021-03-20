import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, SafeAreaView, StyleSheet, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import { useFonts, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik'
import { Spacer, StyledButton, StyledText } from './components'
import { colors, spacing } from './styles'

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <StyledText size="large" color={colors.primary.default} bold>
          EasySkill
        </StyledText>
        <Image style={styles.image} source={require('../app/assets/Illustration/Hello.png')} />
        <StyledText color={colors.text.dark} size="regular">
          <StyledText bold>Create a Skill for your Google Assistant...</StyledText>
          <StyledText color={colors.text.secondary}>
            without programming knowledge...or paying
          </StyledText>
        </StyledText>
        <Spacer size="small" />
        <StyledButton type="primary" text="Login with Google" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
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
