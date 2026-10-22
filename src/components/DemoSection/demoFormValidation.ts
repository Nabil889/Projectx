export type DemoFormValues = {
  name: string
  organization: string
  email: string
  role: string
  subjectOrLevel: string
  message: string
  privacyAccepted: boolean
}

export type DemoFormField = keyof DemoFormValues

export type DemoFormErrors = Partial<Record<DemoFormField, string>>

export const initialDemoFormValues: DemoFormValues = {
  name: '',
  organization: '',
  email: '',
  role: '',
  subjectOrLevel: '',
  message: '',
  privacyAccepted: false,
}

/** Order in which fields appear in the form – used to focus the first invalid field. */
export const demoFormFieldOrder: DemoFormField[] = [
  'name',
  'organization',
  'email',
  'role',
  'subjectOrLevel',
  'message',
  'privacyAccepted',
]

export const MESSAGE_MAX_LENGTH = 1000

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateDemoForm(values: DemoFormValues): DemoFormErrors {
  const errors: DemoFormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Bitte geben Sie Ihren Namen an.'
  }

  if (values.organization.trim().length < 2) {
    errors.organization = 'Bitte geben Sie Ihre Schule oder Organisation an.'
  }

  if (!values.email.trim()) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an, z. B. name@schule.ch.'
  }

  if (!values.role) {
    errors.role = 'Bitte wählen Sie Ihre Funktion aus.'
  }

  if (values.message.length > MESSAGE_MAX_LENGTH) {
    errors.message = `Die Nachricht darf höchstens ${MESSAGE_MAX_LENGTH} Zeichen lang sein.`
  }

  if (!values.privacyAccepted) {
    errors.privacyAccepted = 'Bitte bestätigen Sie die Datenschutzhinweise.'
  }

  return errors
}
