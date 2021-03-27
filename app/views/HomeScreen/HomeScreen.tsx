import React, { useContext, useState } from 'react'
import { FlatList, StyleSheet, View, ScrollView } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

import { Card, Header, Spacer, StyledButton, StyledInput, StyledText } from '../../components'
import { AuthContext } from '../../state'
import { colors, spacing } from '../../styles'

const HomeScreen = () => {
  const [skillName, setSkillName] = useState('')
  const [description, setDescription] = useState('')

  const { signOut } = useContext(AuthContext)

  return (
    <ScrollView style={styles.container}>
      <Header withIcon />
      <Spacer size="small" />
      <StyledText>You've logged in!</StyledText>
      <Spacer size="xSmall" />
      <StyledButton text="Sign Out" onPress={signOut} />
      <Spacer size="small" />

      {/* <FlatList horizontal renderItem={({}) Card} /> */}
      <View style={{ height: 132, flexDirection: 'row' }}>
        <Card
          header={
            <>
              <StyledText size="small" numberOfLines={1} color={colors.primary.default} bold>
                Hello world
              </StyledText>
              <Spacer size="xSmall" />
            </>
          }
          body={
            <StyledText size="xSmall" color={colors.primary.default}>
              This is my first action...
            </StyledText>
          }
          image={{
            uri:
              'https://images.unsplash.com/photo-1616345247720-417dcefef9a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
          }}
          padding={spacing.small}
        />
        <Spacer size="xSmall" orientation="horizontal" />
        <Card
          header={
            <>
              <StyledText size="small" numberOfLines={1} color={colors.primary.default} bold>
                Ahoy there!
              </StyledText>
              <Spacer size="xSmall" />
            </>
          }
          body={
            <StyledText size="xSmall" color={colors.primary.default}>
              This is my second action...
            </StyledText>
          }
          padding={spacing.small}
        />
      </View>
      <Spacer size="small" />

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
      />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
    alignSelf: 'stretch',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
