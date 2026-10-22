export type IconName =
  | 'arrowRight'
  | 'book'
  | 'chart'
  | 'check'
  | 'checkCircle'
  | 'chevronDown'
  | 'clipboard'
  | 'close'
  | 'dashboard'
  | 'filter'
  | 'folderCheck'
  | 'graduation'
  | 'layers'
  | 'lightbulb'
  | 'lock'
  | 'menu'
  | 'message'
  | 'repeat'
  | 'school'
  | 'search'
  | 'shield'
  | 'sliders'
  | 'sparkPath'
  | 'target'
  | 'trendUp'
  | 'upload'
  | 'user'
  | 'users'
  | 'warning'

export type Tone = 'primary' | 'accent' | 'success'

export type NavLink = {
  label: string
  href: string
}

export type IconCard = {
  icon: IconName
  title: string
  description: string
}

export type ProcessStep = IconCard & {
  number: number
}

export type AudienceBenefit = {
  audience: string
  icon: IconName
  tone: Tone
  intro: string
  items: string[]
}

export type LearningStepKind = 'mistake' | 'easier' | 'explain' | 'practice'

export type LearningStep = {
  kind: LearningStepKind
  label: string
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type SelectOption = {
  value: string
  label: string
}
