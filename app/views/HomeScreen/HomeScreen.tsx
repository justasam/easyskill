import React, { useContext, useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import {
  Card,
  CardList,
  Header,
  Spacer,
  StyledButton,
  StyledInput,
  StyledText,
} from '../../components'
import { AuthContext } from '../../state'
import { colors, spacing } from '../../styles'

const HomeScreen = () => {
  const [skillName, setSkillName] = useState('')
  const [description, setDescription] = useState('')

  const { signOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <View style={styles.padHorizontal}>
        <Header withIcon />
        <Spacer size="small" />
        <StyledText>You've logged in!</StyledText>
        <Spacer size="xSmall" />
        <StyledButton text="Sign Out" onPress={signOut} />
        <Spacer size="small" />
      </View>
      {/* <FlatList horizontal renderItem={({}) Card} /> */}

      <View style={{ height: 128, flexDirection: 'row', alignSelf: 'stretch' }}>
        <CardList
          items={[
            {
              header: 'Hello world',
              body: 'This is my first action...',
              image: {
                uri:
                  'https://images.unsplash.com/photo-1616345247720-417dcefef9a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              },
              key: 'test-i-1',
            },
            { header: 'Ahoy there!', body: 'This is my second action...', key: 'test-i-2' },
            { header: 'Ahoy there!', body: 'This is my second action...', key: 'test-i-3' },
            { header: 'Ahoy there!', body: 'This is my second action...', key: 'test-i-4' },
            { header: 'Ahoy there!', body: 'This is my second action...', key: 'test-i-5' },
            { header: 'Ahoy there!', body: 'This is my second action...', key: 'test-i-6' },
            { header: 'Ahoy there!', body: 'This is my second action...', key: 'test-i-7' },
          ]}
          onClick={item => console.log(item)}
        />
      </View>
      <Spacer size="small" />

      <View style={styles.padHorizontal}>
        <StyledText color={colors.primary.default} size="large">
          Create a new skill
        </StyledText>
        <Spacer size="small" />
        <Card
          header={
            <>
              <StyledInput
                textProps={{ bold: true, color: colors.primary.default, size: 'large' }}
                placeholder="Skill name..."
                value={skillName}
                onChange={setSkillName}
                placeholderColor={colors.primary.medium}
              />
              <Spacer size="xSmall" />
            </>
          }
          body={
            <StyledInput
              textProps={{ color: colors.primary.default, size: 'medium', opacity: 1 }}
              placeholder="Description..."
              value={description}
              onChange={setDescription}
              placeholderColor={colors.primary.medium}
              multiline
            />
          }
          footer={
            <View style={styles.cardFooter}>
              <SimpleLineIcons name="camera" color={colors.primary.default} size={28} />
              <StyledButton size="content" text="Create" />
            </View>
          }
          withShadow
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingVertical: spacing.medium,
  },
  padHorizontal: {
    paddingHorizontal: spacing.medium,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
