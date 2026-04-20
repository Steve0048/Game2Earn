type LoginFieldProps = {
  label: string
  ariaLabel: string
  type: 'email' | 'password'
  placeholder: string
}

const EnvelopeIcon = () => (
  <svg className="field-icon" viewBox="0 0 28 20" aria-hidden="true">
    <path d="M2 2h24v16H2z" />
    <path d="m2 3 12 9 12-9" />
    <path d="m2 18 8.8-7" />
    <path d="m26 18-8.8-7" />
  </svg>
)

export function LoginField({
  label,
  ariaLabel,
  type,
  placeholder,
}: LoginFieldProps) {
  return (
    <label className="field-group">
      <span className="field-label">{label}</span>
      <span className="field-shell">
        <EnvelopeIcon />
        <input aria-label={ariaLabel} placeholder={placeholder} type={type} />
      </span>
    </label>
  )
}
