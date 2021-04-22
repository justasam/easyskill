import React, { useState } from 'react'
import { Button, Picker, View } from 'react-native-ui-lib'

import StyledText from '../Text'
import { CompoundDataType, ExpandedProps } from './types'
import { colors } from '../../styles'
import { Expandable } from '..'
import { renderDataNumber, renderDataText } from './renderData'

type Props = CompoundDataType & ExpandedProps

type TypePickerProps = {
  items: Array<{ label: string; value: string }>
  selectedValue: string
  onSelect: (value: string) => void
}

const addDisabledTypes = ['none']

const TypePicker = ({ items, selectedValue, onSelect }: TypePickerProps) => {
  return (
    <View flex marginR-24 centerV marginT-16>
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

const Data = ({ dataBlocks, enabled = true, onSaveData, expanded, onExpandClick }: Props) => {
  const [editingBlocks, setEditingBlocks] = useState([...dataBlocks])
  const [selectedValue, setSelectedValue] = useState('none')

  const renderBlocks = () => {
    return editingBlocks.map((dataBlock, index) => {
      const onCloseData = () => {
        const newBlocks = [...editingBlocks]
        newBlocks.splice(index, 1)
        setEditingBlocks(newBlocks)
      }
      const setDataName = (name: string) => {
        const newBlocks = [...editingBlocks]
        newBlocks[index].dataName = name
        setEditingBlocks(newBlocks)
      }
      const setValue = (value: string) => {
        const newBlocks = [...editingBlocks]
        newBlocks[index].value = value
        setEditingBlocks(newBlocks)
      }

      if (dataBlock.title === 'Number')
        return renderDataNumber({
          ...dataBlock,
          onCloseData,
          setDataName,
          setValue,
          key: index,
        })

      if (dataBlock.title === 'Text')
        return renderDataText({ ...dataBlock, onCloseData, setDataName, setValue, key: index })
    })
  }

  const renderBody = () => {
    return (
      <>
        <StyledText color={colors.text.dark} size="small">
          Now lets set up initial data that your app will use. E.g. list of friends, score..
        </StyledText>
        {renderBlocks()}
        <View row spread paddingV-24 centerV>
          <TypePicker items={dataTypes} selectedValue={selectedValue} onSelect={setSelectedValue} />
          <Button
            label="Add"
            borderRadius={8}
            backgroundColor={colors.primary.medium}
            onPress={() => {
              const title = dataTypes.find(({ value }) => value === selectedValue)?.label
              if (!title || (title !== 'Number' && title !== 'Text')) return
              setEditingBlocks(editingBlocks => [
                ...editingBlocks,
                {
                  dataName: '',
                  value: '',
                  title,
                },
              ])
            }}
            disabled={addDisabledTypes.includes(selectedValue)}
          />
        </View>
        <View>
          <Button
            label="Done"
            onPress={() => onSaveData(editingBlocks)}
            borderRadius={8}
            backgroundColor={colors.primary.medium}
          />
        </View>
      </>
    )
  }

  const renderNotEnabled = () => {
    return <StyledText>Set skill name first</StyledText>
  }

  return (
    <Expandable header="Skill data" onExpandClick={onExpandClick} expanded={expanded}>
      <View paddingV-8>{enabled ? renderBody() : renderNotEnabled()}</View>
    </Expandable>
  )
}

export default Data
