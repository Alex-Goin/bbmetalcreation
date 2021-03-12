import validator from 'validator'

const validate = ({ nom, prenom, email, sujet, message }) => {
    return (
        isEmail(email) &&
        isLength(nom, 3) &&
        isLength(prenom, 3) &&
        !isEmpty(sujet) &&
        !isEmpty(message)
    )
}

const isEmail = (email) => {
    return validator.isEmail(email)
}
const isLength = (str, nb) => {
    return validator.isLength(str, { min: nb })
}
const isEmpty = (str) => {
    return validator.isEmpty(str)
}


export default (context, inject) => {

    inject('validate', (mail) => {
        const userid = context.env.NUXT_ENV_EMAILJS_USER_ID
        const templateid = context.env.NUXT_ENV_EMAILJS_TEMPLATE_ID
        const serviceid = context.env.NUXT_ENV_EMAILJS_SERVICE_ID
        if (validate(mail)) return ({ userid, templateid, serviceid })
        else console.log('Mail invalidate')
    })

    inject('isEmail', (email) => {
        return isEmail(email)
    })
    inject('isLength', (str, nb) => {
        return isLength(str, nb)
    })
    inject('isEmpty', (str) => {
        return isEmpty(str)
    })
}