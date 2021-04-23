import { ComponentProps } from 'react'
import { Spacer } from '../components'

type IBTextField = {
  elementType: 'text-field'
  value: string
  onChange: (newValue: string) => void
  type: 'number' | 'text' | 'one-word'
  prefix?: string
  placeholder?: string
  title?: string
  disabled?: boolean
  error?: string
}

type IBSwitch = {
  elementType: 'switch'
  value: boolean
  label?: string
  disabled?: boolean
  onChange: (newValue: boolean) => void
}

type IBPicker = {
  elementType: 'picker'
  placeholder: string
  value: string
  onChange: (newValue: string) => void
  items: Array<{ value: string; label: string }>
  disabled?: boolean
}

type IBButton = {
  elementType: 'button'
  label: string
  onPress: () => void
  disabled?: boolean
}

type IBSpacer = {
  elementType: 'spacer'
} & ComponentProps<typeof Spacer>

type IBElements = IBTextField | IBSwitch | IBPicker | IBButton | IBSpacer

type IBRenderType = 'row'

type IBProps = {
  contents: Array<{ type: IBRenderType; elements: Array<IBElements>; key: string }>
}

export { IBProps, IBSwitch, IBButton, IBTextField, IBPicker, IBElements, IBSpacer }
