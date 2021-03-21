import React, { useEffect, useReducer } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as SecureStore from 'expo-secure-store'
import { useFonts, Rubik_400Regular, Rubik_500Medium } from '@expo-google-fonts/rubik'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { colors } from './styles'
import { AuthScreen, HomeScreen } from './views'
import { AuthContext } from './state'

const Stack = createStackNavigator()

type AppStateType = {
  isSignout: boolean
  userToken?: string | null
  isLoading: boolean
}

type ActionType = {
  type: 'RESTORE_TOKEN' | 'SIGN_IN' | 'SIGN_OUT'
  token?: string | null
}

type ReducerType = (prevState: AppStateType, action: ActionType) => AppStateType

const App = () => {
  const [state, dispatch] = useReducer<ReducerType, AppStateType>(
    (prevState: AppStateType, action: ActionType) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return { ...prevState, userToken: action.token, isLoading: false }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
      }
    },
    { isLoading: true, isSignout: false, userToken: null },
    initialState => ({ ...initialState }),
  )

  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
  })

  useEffect(() => {
    const restoreToken = async () => {
      let userToken: string | null = null

      try {
        userToken = await SecureStore.getItemAsync('userToken')
      } catch (e) {
        console.error(e)
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }

    restoreToken()
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    [],
  )

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const renderScreens = () => {
    if (state.isLoading || !fontsLoaded)
      return <Stack.Screen name="Splash" component={AppLoading} />

    if (!state.userToken)
      return (
        <Stack.Screen
          name="SignIn"
          component={AuthScreen}
          options={{
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
      )

    return <Stack.Screen name="Home" component={HomeScreen} />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaView style={styles.safeView}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {renderScreens()}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.background.light,
  },
})
