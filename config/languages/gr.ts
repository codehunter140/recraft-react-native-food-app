import { AppLanguage } from '../languages'

export const gr: AppLanguage = {
  firstButton: "Zu Essen bekommen",
  welcome: "Iss immer gesundes Essen",
  signIn: "Anmelden",
  register: "Registrieren",
  signUp: "Anmelden",
  signText: "Melden Sie sich an, um fortzufahren",
  registerText: "Registrieren Sie sich, um fortzufahren",
  remember: "Merken",
  forgetText: "Passwort vergessen?",
  forget: "Passwort vergessen",
  forgePasswordText: "Geben Sie Ihre E-Mail-Adresse oder Ihr Telefon ein",
  signWith: "Melden Sie sich mit an",
  registerWith: "Oder registrieren Sie sich mit",
  checkAcc: "Sie haben noch keinen Account?",
  loginValidation : {
    username: `E-Mail / Telefon ist erforderlich`,
    password: `Passwort wird benötigt`,
    passwordLength: 'Passwortlänge zwischen 6 und 12',
  },
  signupValidation : {
    email: `E-Mail ist erforderlich`,
    validEmail: 'Bitte geben Sie eine gültige Email-Adresse ein',
    phone: `Telefonnummer ist erforderlich`,
    validPhone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
    password: `Passwort wird benötigt`,
    passwordLength: 'Passwortlänge zwischen 6 und 12',
  },
}
