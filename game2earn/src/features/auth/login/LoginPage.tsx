import { LoginField } from '../../../components/auth/LoginField'
import { SecureNotice } from '../../../components/auth/SecureNotice'
import { SocialLoginButton } from '../../../components/auth/SocialLoginButton'

export function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-panel" aria-labelledby="login-title">
        <div className="login-heading">
          <h1 id="login-title">BON RETOUR</h1>
          <p>Connecte-toi pour accéder à ton arène et à tes Éclats.</p>
        </div>

        <SocialLoginButton />

        <div className="divider" role="presentation">
          <span>OU PAR EMAIL</span>
        </div>

        <form className="login-form">
          <LoginField
            ariaLabel="Adresse email"
            label="ADRESSE EMAIL"
            placeholder="user@gmail.com"
            type="email"
          />

          <LoginField
            ariaLabel="Mot de passe"
            label="MOT DE PASSE"
            placeholder="user@gmail.com"
            type="password"
          />

          <label className="remember-row">
            <input type="checkbox" />
            <span>Se souvenir de moi sur cet appareil</span>
          </label>

          <button className="submit-button" type="button">
            Se Connecter
          </button>
        </form>

        <p className="signup-copy">
          Pas encore de compte ? <a href="#create-account">Créer mon compte →</a>
        </p>

        <SecureNotice />
      </section>
    </main>
  )
}
