type ExpandedProps = {
  expanded: boolean
  onExpandClick: () => void
}

type DataNumberType = {
  title: 'Number'
  dataName: string
  value: string
}

type DataTextType = {
  title: 'Text'
  dataName: string
  value: string
}

type DataActionsType = {
  onCloseData: () => void
  setDataName: (name: string) => void
  setValue: (value: string) => void
}

type DataTypes = DataNumberType | DataTextType

type DataBlocks = Array<DataTypes & DataActionsType>

type CompoundDataType = {
  dataBlocks: Array<DataTypes>
  enabled?: boolean
  editing?: boolean
  onSaveData: (dataBlocks: Array<DataTypes>) => void
}

export { ExpandedProps, DataNumberType, DataTextType, CompoundDataType, DataTypes, DataBlocks }
