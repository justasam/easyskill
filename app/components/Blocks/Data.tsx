import React, { useState } from 'react'
import { Button, Picker, View } from 'react-native-ui-lib'

import StyledText from '../Text'
import { ExpandedProps } from './types'
import { colors } from '../../styles'
import { Expandable } from '..'
import { renderDataNumber, renderDataText } from './renderData'

type Props = {
  skillName: string
  setSkillName: (value: string) => void
} & ExpandedProps

type TypePickerProps = {
  items: Array<{ label: string; value: string }>
  selectedValue: string
  onSelect: (value: string) => void
}

const TypePicker = ({ items, selectedValue, onSelect }: TypePickerProps) => {
  return (
    <View flex marginR-24>
      <Picker
        placeholder="Data Type"
        value={selectedValue}
        onChange={onSelect}
        floatingPlaceholder
        useNativePicker
      >
        {items.map(({ value, label }) => (
          <Picker.Item key={`picker-${value}`} label={label} value={value} />
        ))}
      </Picker>
    </View>
  )
}

const dataTypes = [
  { value: 'none', label: 'None' },
  { value: 'list', label: 'List' },
  { value: 'quiz', label: 'Quiz' },
  { value: 'text', label: 'Text' },
  { value: 'number', label: 'Number' },
]

const Data = ({ skillName, setSkillName, expanded, onExpandClick }: Props) => {
  const [selectedValue, setSelectedValue] = useState('none')

  return (
    <Expandable header="Skill data" onExpandClick={onExpandClick} expanded={expanded}>
      <View paddingV-8>
        <StyledText color={colors.text.dark} size="small">
          Now lets set up initial data that your app will use. E.g. list of friends, score..
        </StyledText>

        {renderDataNumber({
          title: 'Number',
          onCloseData: () => null,
          dataName: '',
          setDataName: () => null,
          value: '0',
          setValue: () => null,
        })}

        {renderDataText({
          title: 'Text',
          onCloseData: () => null,
          dataName: '',
          setDataName: () => null,
          value: '',
          setValue: () => null,
        })}

        {renderDataNumber({
          title: 'Number',
          onCloseData: () => null,
          dataName: '',
          setDataName: () => null,
          value: '0',
          setValue: () => null,
        })}

        {renderDataText({
          title: 'Text',
          onCloseData: () => null,
          dataName: '',
          setDataName: () => null,
          value: '',
          setValue: () => null,
        })}
        <View row spread paddingV-24 centerV>
          <TypePicker items={dataTypes} selectedValue={selectedValue} onSelect={setSelectedValue} />
          <Button label="Add" borderRadius={8} backgroundColor={colors.primary.medium} />
        </View>

        <View>
          <Button
            label="Done"
            onPress={undefined}
            borderRadius={8}
            backgroundColor={colors.primary.medium}
          />
        </View>
      </View>
    </Expandable>
  )
}

export default Data
