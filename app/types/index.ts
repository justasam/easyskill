export type SkillState = {
  // state
  isEditing: boolean
  isPublished: boolean

  stepsDone: 0 | 1 | 2

  // general info
  skillName: string
  isPrivate: boolean
  author: string

  // initial data
  initialData: Array<SkillData>
  variables: Array<SkillVariable>

  // logic
  sequence: Array<SkillLogic>
}

type SkillData = SkillDataNumber | SkillDataText | SkillDataList | SkillDataQuiz

// Skill Data Types
type SkillDataCommon = {
  title: string
  varName: string
  validation?: () => void
}

type SkillDataNumber = {
  type: 'number'
  value: string
} & SkillDataCommon

type SkillDataText = {
  type: 'text'
  value: string
} & SkillDataCommon

type SkillDataList = {
  type: 'list'
  value: Array<string>
} & SkillDataCommon

type SkillDataQuiz = {
  type: 'quiz'
  value: Array<{ question: string; answers: Array<string> }>
} & SkillDataCommon

type SkillVariable = {
  varName: string
  type: 'number' | 'text' | 'list' | 'quiz'
}

type SkillLogic = {}

type SkillInputElement = {}

export * from './InputBlock'
