const GoogleIcon = () => (
  <svg className="google-icon" viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#4285f4"
      d="M45.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.8h12.2c-.2 1.9-1.6 4.9-4.5 6.8v5.1H39c4.1-3.8 6.1-9.3 6.1-15.6z"
    />
    <path
      fill="#34a853"
      d="M24 46c5.9 0 10.8-1.9 14.4-5.2l-6.9-5.3c-1.9 1.3-4.3 2.2-7.5 2.2-5.8 0-10.7-3.8-12.4-9.1H4.5v5.3C8 41 15.4 46 24 46z"
    />
    <path
      fill="#fbbc05"
      d="M11.6 28.6c-.5-1.3-.7-2.8-.7-4.3s.3-3 .7-4.3v-5.3H4.5C3 17.6 2.1 20.8 2.1 24.3S3 31 4.5 33.9l7.1-5.3z"
    />
    <path
      fill="#ea4335"
      d="M24 10.9c4.1 0 6.8 1.8 8.4 3.2l6.1-6C34.8 4.6 29.9 2.5 24 2.5 15.4 2.5 8 7.5 4.5 14.7l7.1 5.3c1.7-5.3 6.6-9.1 12.4-9.1z"
    />
  </svg>
)

export function SocialLoginButton() {
  return (
    <button className="google-button" type="button">
      <GoogleIcon />
      <span>CONTINUER AVEC GOOGLE</span>
    </button>
  )
}
