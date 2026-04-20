const LockIcon = () => (
  <svg className="notice-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.5 4.5 5.8v5c0 4.8 3.2 9.2 7.5 10.7 4.3-1.5 7.5-5.9 7.5-10.7v-5L12 2.5z" />
    <path d="M9 11.2h6v5H9z" />
    <path d="M10 11.2V9.8a2 2 0 0 1 4 0v1.4" />
  </svg>
)

export function SecureNotice() {
  return (
    <aside className="secure-notice">
      <LockIcon />
      <p>
        Connexion sécurisée · <strong>2FA disponible</strong> dans les
        paramètres ·
        <br />
        Tes fonds sont protégés par Smart Contract
      </p>
    </aside>
  )
}
