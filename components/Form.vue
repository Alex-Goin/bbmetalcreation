<template>
  <div class="container mx-6">
      <h1 class="title has-text-centered has-text-weight-light">Envoyez moi un message</h1>
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label class="label">Votre nom</label>
        <div class="control has-icons-left">
          <input
            class="input"
            type="text"
            v-model="mail.nom"
            placeholder="Entrez votre nom ici"
            minlength="3"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Votre prénom</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            v-model="mail.prenom"
            placeholder="Entrez votre prénom ici"
            minlength="3"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Votre email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            v-model="mail.email"
            placeholder="Entrez votre adresse email ici"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Sujet</label>
        <div class="control">
          <div class="select">
            <select v-model="mail.sujet">
              <option value="" selected disabled hidden>
                Choisissez un sujet
              </option>
              <option>Chaudronnerie</option>
              <option>Prestation soudure</option>
              <option>Mobilier métal</option>
              <option>Autre</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            class="textarea"
            v-model="mail.message"
            placeholder="Entrez votre message ici"
            required
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Envoyer</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="clear">
            Annuler
          </button>
        </div>
        <strong>Tous les champs sont requis.</strong>
      </div>
    </form>
  </div>
</template>

<script>
import validator from '~/plugins/validator'
export default {
  data() {
    return {
      mail: {
        nom: '',
        prenom: '',
        email: '',
        sujet: '',
        message: '',
      },
      sent: false,
    }
  },
  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    clear() {
      this.mail = {
        nom: '',
        prenom: '',
        email: '',
        sujet: '',
        message: '',
      }
      this.sent = false
    },

    validate({ nom, prenom, email, sujet, message }) {
      let messages = []
      if (!validator.isEmail(email)) messages.push('Email invalide.')
      if (!validator.isLength(nom, { min: 3 })) messages.push('Nom invalide.')
      if (!validator.isLength(prenom, { min: 3 }))
        messages.push('Prénom invalide.')
      if (validator.isEmpty(sujet)) messages.push('Choisissez un sujet.')
      if (validator.isEmpty(message) || !validator.isLength(message, {min: 5})) messages.push('Message vide / trop court.')

      if (messages.length) {
        this.$toast.error(messages)
        return false
      } else return true
    },

    async submitMail() {
      try {
        await this.$axios.$post('/api/contact', {
          mail: this.mail,
        })
        this.sent = true
      } catch (e) {
        console.error(e)
      }
    },
    async onSubmit() {
      if (this.validate(this.mail)) {
        try {
          const token = await this.$recaptcha.execute('login')
          const config = { headers: { 'Content-Type': 'application/json' } }

          /* RECAPTCHA FROM GOOGLE */
          const response = await this.$axios.post(
            '/api/recaptcha',
            { token: token },
            config
          )

          /* IF RESPONSE = 200 FROM GOOGLE TOKEN => SEND MAIL */
          console.log(response.status)
          if (response.status === 200) {
            await this.submitMail()
            if (this.sent) {
              this.$toast.success('Message envoyé !')
              this.clear()
              await new Promise((resolve) => setTimeout(resolve, 2500))
            }
          }
        } catch (error) {
          console.log('Login error:', error)
        }
      }
    },
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
}
</script>

<style>
</style>