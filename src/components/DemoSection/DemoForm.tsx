import { useRef, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { roleOptions } from '../../data/content'
import { siteConfig } from '../../data/siteConfig'
import { Icon } from '../Icon/Icon'
import {
  MESSAGE_MAX_LENGTH,
  initialDemoFormValues,
  demoFormFieldOrder,
  validateDemoForm,
} from './demoFormValidation'
import type { DemoFormErrors, DemoFormField, DemoFormValues } from './demoFormValidation'
import styles from './DemoForm.module.css'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const fieldId = (field: DemoFormField) => `demo-${field}`
const errorId = (field: DemoFormField) => `demo-${field}-error`

/**
 * TODO(api): Hier muss die echte API für Demo-Anfragen angebunden werden.
 * Solange kein Backend existiert, wird KEINE Anfrage versendet. Die Funktion schlägt bewusst fehl,
 * damit auf der Website keine erfolgreiche Übermittlung vorgetäuscht wird. Besucher sehen dann
 * eine neutrale Fehlermeldung (siehe `status === 'error'`).
 *
 * Beispiel für eine spätere Umsetzung:
 *   const response = await fetch('/api/demo-requests', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(values),
 *   })
 *   if (!response.ok) throw new Error('Request failed')
 *
 * Zusätzlich zu ergänzen: Spam-Schutz und serverseitige Validierung.
 */
async function submitDemoRequest(values: DemoFormValues): Promise<void> {
  void values
  throw new Error('Demo request API is not connected yet.')
}

export function DemoForm() {
  const [values, setValues] = useState<DemoFormValues>(initialDemoFormValues)
  const [errors, setErrors] = useState<DemoFormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<DemoFormField, boolean>>>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const successRef = useRef<HTMLDivElement>(null)

  const updateField = <K extends DemoFormField>(field: K, value: DemoFormValues[K]) => {
    const nextValues = { ...values, [field]: value }
    setValues(nextValues)
    // Re-validate already visited fields while the user is typing.
    if (touched[field]) {
      setErrors((current) => ({ ...current, [field]: validateDemoForm(nextValues)[field] }))
    }
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as DemoFormField
    const value =
      event.target instanceof HTMLInputElement && event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    updateField(field, value)
  }

  const handleBlur = (field: DemoFormField) => {
    setTouched((current) => ({ ...current, [field]: true }))
    setErrors((current) => ({ ...current, [field]: validateDemoForm(values)[field] }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validateDemoForm(values)
    setErrors(validationErrors)
    setTouched(Object.fromEntries(demoFormFieldOrder.map((field) => [field, true])))

    const firstInvalidField = demoFormFieldOrder.find((field) => validationErrors[field])
    if (firstInvalidField) {
      formRef.current?.querySelector<HTMLElement>(`#${fieldId(firstInvalidField)}`)?.focus()
      return
    }

    setStatus('submitting')
    try {
      await submitDemoRequest(values)
      setStatus('success')
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setValues(initialDemoFormValues)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  const fieldProps = (field: DemoFormField) => ({
    id: fieldId(field),
    name: field,
    onBlur: () => handleBlur(field),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? errorId(field) : undefined,
  })

  const renderError = (field: DemoFormField) =>
    errors[field] ? (
      <p id={errorId(field)} className={styles.error}>
        <Icon name="warning" />
        {errors[field]}
      </p>
    ) : null

  if (status === 'success') {
    return (
      <div ref={successRef} className={styles.success} tabIndex={-1} role="status">
        <span className={styles.successIcon}>
          <Icon name="checkCircle" />
        </span>
        <h3 className={styles.successTitle}>Vielen Dank für Ihr Interesse!</h3>
        <p>Wir haben Ihre Demo-Anfrage erhalten und melden uns in Kürze bei Ihnen.</p>
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Weitere Anfrage senden
        </button>
      </div>
    )
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
      <p className={styles.requiredNote}>
        Pflichtfelder sind mit <span aria-hidden="true">*</span>
        <span className="visually-hidden">einem Sternchen</span> gekennzeichnet.
      </p>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label htmlFor={fieldId('name')} className={styles.label}>
            Name <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps('name')}
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange}
            className={styles.input}
          />
          {renderError('name')}
        </div>

        <div className={styles.field}>
          <label htmlFor={fieldId('organization')} className={styles.label}>
            Schule oder Organisation <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps('organization')}
            type="text"
            autoComplete="organization"
            required
            value={values.organization}
            onChange={handleChange}
            className={styles.input}
          />
          {renderError('organization')}
        </div>

        <div className={styles.field}>
          <label htmlFor={fieldId('email')} className={styles.label}>
            E-Mail-Adresse <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            {...fieldProps('email')}
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            className={styles.input}
          />
          {renderError('email')}
        </div>

        <div className={styles.field}>
          <label htmlFor={fieldId('role')} className={styles.label}>
            Funktion <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <div className={styles.selectWrapper}>
            <select
              {...fieldProps('role')}
              required
              value={values.role}
              onChange={handleChange}
              className={`${styles.input} ${styles.select}`}
            >
              <option value="">Bitte auswählen</option>
              {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Icon name="chevronDown" className={styles.selectIcon} />
          </div>
          {renderError('role')}
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor={fieldId('subjectOrLevel')} className={styles.label}>
            Fachbereich oder Lehrgang <span className={styles.optional}>(optional)</span>
          </label>
          <input
            {...fieldProps('subjectOrLevel')}
            type="text"
            placeholder="z. B. Berufskunde, Allgemeinbildung oder ein bestimmter Beruf"
            value={values.subjectOrLevel}
            onChange={handleChange}
            className={styles.input}
          />
          {renderError('subjectOrLevel')}
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <label htmlFor={fieldId('message')} className={styles.label}>
            Nachricht <span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            {...fieldProps('message')}
            rows={5}
            maxLength={MESSAGE_MAX_LENGTH}
            placeholder="Welche Lern- und Fachbereiche interessieren Sie besonders?"
            value={values.message}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea}`}
          />
          <p className={styles.counter} aria-live="polite">
            {values.message.length} / {MESSAGE_MAX_LENGTH} Zeichen
          </p>
          {renderError('message')}
        </div>

        <div className={`${styles.field} ${styles.fullWidth}`}>
          <div className={styles.checkboxRow}>
            <input
              {...fieldProps('privacyAccepted')}
              type="checkbox"
              required
              checked={values.privacyAccepted}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <label htmlFor={fieldId('privacyAccepted')} className={styles.checkboxLabel}>
              Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
              verwendet werden. Weitere Informationen finden Sie in der{' '}
              {/* Neuer Tab, damit bereits eingegebene Formulardaten erhalten bleiben. */}
              <a href={siteConfig.privacyPolicyHref} target="_blank" rel="noopener">
                Datenschutzerklärung
              </a>
              .{' '}
              <span className={styles.required} aria-hidden="true">*</span>
            </label>
          </div>
          {renderError('privacyAccepted')}
        </div>
      </div>

      {status === 'error' && (
        <p className={styles.submitError} role="alert">
          <Icon name="warning" />
          Ihre Anfrage konnte leider nicht übermittelt werden. Bitte versuchen Sie es später erneut.
        </p>
      )}

      <button
        type="submit"
        className={`btn btn-primary ${styles.submit}`}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Wird gesendet …' : 'Demo anfragen'}
        {status !== 'submitting' && <Icon name="arrowRight" />}
      </button>
    </form>
  )
}
