import React from 'react'
import { Button, Card, Carousel, View } from 'react-native-ui-lib'

import Expandable from '../Expandable'
import StyledText from '../Text'
import { ExpandedProps } from './types'
import { colors } from '../../styles'
import { Spacer } from '..'
import { renderControlAlexa, renderControlYou } from './renderData'

type Props = { enabled?: boolean } & ExpandedProps

type AllControlState = {}

const Control = ({ enabled, onExpandClick, expanded }: Props) => {
  const renderBody = () => {
    return (
      <>
        <StyledText color={colors.text.dark} size="small">
          Last step! Think of logic in a top to bottom sequence.
        </StyledText>
        <Spacer size="small" />

        <View style={{ backgroundColor: colors.primary.default }} br40 padding-5>
          <View padding-10>
            <StyledText color={colors.text.light} size="small">
              Swipe and add control blocks:
            </StyledText>
          </View>

          <Carousel>
            <Card containerStyle={{ height: 120 }} center margin-5>
              <View paddingR-20 row centerV spread>
                <Card.Section
                  content={[
                    { text: 'You 🗣️', dark10: true, text70BO: true },
                    { text: 'what you want to say to Alexa', text90: true, dark50: true },
                  ]}
                  style={{ padding: 20, flex: 1 }}
                />
                <Button
                  label="Add"
                  onPress={undefined}
                  borderRadius={8}
                  backgroundColor={colors.primary.medium}
                />
              </View>
            </Card>
            <Card containerStyle={{ height: 120 }} center margin-5>
              <View paddingR-20 row centerV spread>
                <Card.Section
                  content={[
                    { text: 'Alexa 🤖', dark10: true, text70BO: true },
                    { text: 'what you want Alexa to say', text90: true, dark50: true },
                  ]}
                  style={{ padding: 20, flex: 1 }}
                />
                <Button
                  label="Add"
                  onPress={undefined}
                  borderRadius={8}
                  backgroundColor={colors.primary.medium}
                />
              </View>
            </Card>
            <Card containerStyle={{ height: 120 }} center margin-5>
              <View paddingR-20 row centerV spread>
                <Card.Section
                  content={[
                    { text: 'Compare ✔️', dark10: true, text70BO: true },
                    {
                      text: 'Compare two values and do something depending on the result',
                      text90: true,
                      dark50: true,
                    },
                  ]}
                  style={{ padding: 20, flex: 1 }}
                />
                <Button
                  label="Add"
                  onPress={undefined}
                  borderRadius={8}
                  backgroundColor={colors.primary.medium}
                />
              </View>
            </Card>
            <Card containerStyle={{ height: 120 }} center margin-5>
              <View paddingR-20 row centerV spread>
                <Card.Section
                  content={[
                    { text: 'Math 🧮', dark10: true, text70BO: true },
                    {
                      text: 'Perform a mathematical operation',
                      text90: true,
                      dark50: true,
                    },
                  ]}
                  style={{ padding: 20, flex: 1 }}
                />
                <Button
                  label="Add"
                  onPress={undefined}
                  borderRadius={8}
                  backgroundColor={colors.primary.medium}
                />
              </View>
            </Card>
            <Card containerStyle={{ height: 120 }} center margin-5>
              <View paddingR-20 row centerV spread>
                <Card.Section
                  content={[
                    { text: 'Random 🎲', dark10: true, text70BO: true },
                    {
                      text: 'Pick a random element from a list or generate a random number',
                      text90: true,
                      dark50: true,
                    },
                  ]}
                  style={{ padding: 20, flex: 1 }}
                />
                <Button
                  label="Add"
                  onPress={undefined}
                  borderRadius={8}
                  backgroundColor={colors.primary.medium}
                />
              </View>
            </Card>
            <Card containerStyle={{ height: 120 }} center margin-5>
              <View paddingR-20 row centerV spread>
                <Card.Section
                  content={[
                    { text: 'API ✨', dark10: true, text70BO: true },
                    {
                      text: 'get external data for movies, numbers, etc',
                      text90: true,
                      dark50: true,
                    },
                  ]}
                  style={{ padding: 20, flex: 1 }}
                />
                <Button
                  label="Add"
                  onPress={undefined}
                  borderRadius={8}
                  backgroundColor={colors.primary.medium}
                />
              </View>
            </Card>
          </Carousel>
        </View>
        {renderControlYou({
          value: '',
          setValue: () => null,
          key: 'abc',
          onCloseData: () => null,
        })}
        {renderControlAlexa({
          value: '',
          setValue: () => null,
          key: 'abcd',
          onCloseData: () => null,
          availableVariables: ['score', 'answer1', 'question', 'number', 'asdasd'],
        })}
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
