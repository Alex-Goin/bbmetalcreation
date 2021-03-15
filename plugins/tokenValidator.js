import validator from 'validator'
import { Email } from './smtp'

const validate = ({ nom, prenom, email, sujet, message }) => {
  return (
    isEmail(email) &&
    isLength(nom, 3) &&
    isLength(prenom, 3) &&
    !isEmpty(sujet) &&
    !isEmpty(message)
  )
}

const isEmail = email => {
  return validator.isEmail(email)
}
const isLength = (str, nb) => {
  return validator.isLength(str, { min: nb })
}
const isEmpty = str => {
  return validator.isEmpty(str)
}

export default (context, inject) => {
  inject('validate', mail => {
    const user = context.env.NUXT_ENV_G_USER
    const pw = context.env.NUXT_ENV_G_PW
    if (validate(mail)) return { user, pw }
    else console.log('Mail invalidate')
  })

  inject('isEmail', email => {
    return isEmail(email)
  })
  inject('isLength', (str, nb) => {
    return isLength(str, nb)
  })
  inject('isEmpty', str => {
    return isEmpty(str)
  })
  inject('Email', () => {
    return Email
  })
}
