<template>
  <div class="container mx-6">
    <div class="block content">
      <h1 class="title has-text-centered has-text-weight-light">
        Envoyez moi un message
      </h1>
      <strong>Tous les champs sont requis.</strong>
    </div>
    <section>
      <form @submit.prevent="sendEmail">
        <b-field label="Nom" :type="checkNom ? 'is-success' : 'is-danger'">
          <b-input
            minlength="3"
            v-model="nom"
            placeholder="Entrez votre nom ici"
            icon="account"
            required
          >
          </b-input>
        </b-field>

        <b-field
          label="Prénom"
          :type="checkPrenom ? 'is-success' : 'is-danger'"
        >
          <b-input
            minlength="3"
            v-model="prenom"
            placeholder="Entrez votre prénom ici"
            icon="account"
            required
          >
          </b-input>
        </b-field>

        <b-field label="Email" :type="checkEmail ? 'is-success' : 'is-danger'">
          <b-input
            type="email"
            v-model="email"
            placeholder="Entrez votre adresse mail ici"
            icon="email"
            required
          >
          </b-input>
        </b-field>

        <b-field label="Sujet" :type="checkSujet ? 'is-success' : 'is-danger'">
          <b-select v-model="sujet" required>
            <option value="" hidden>Choisissez un sujet</option>
            <option value="chaudronnerie">Chaudronnerie</option>
            <option value="prestation soudure">Prestation soudure</option>
            <option value="mobilier métal">Mobilier métal</option>
            <option value="autre">Autre</option>
          </b-select>
        </b-field>

        <b-field
          label="Message"
          :type="checkMessage ? 'is-success' : 'is-danger'"
        >
          <b-input
            type="textarea"
            minlength="10"
            maxlength="1000"
            v-model="message"
            placeholder="Entrez votre message ici"
            required
          >
          </b-input>
        </b-field>

        <div class="block">
          <recaptcha
            @error="onError"
            @success="onSuccess"
            @expired="onExpired"
            class="is-radiusless"
          />
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-radiusless">Envoyer</button>
          </div>
          <div class="control">
            <button
              class="button is-link is-light is-radiusless"
              @click="clear"
            >
              Annuler
            </button>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    mailpro() {
      return this.$store.state.contact.mail
    }
  },
  data() {
    return {
      nom: '',
      prenom: '',
      email: '',
      sujet: '',
      message: '',
      token: '',
      recaptcha: false,
      checkNom: false,
      checkPrenom: false,
      checkEmail: false,
      checkSujet: false,
      checkMessage: false
    }
  },
  watch: {
    nom: function(n) {
      this.checkNom = this.$isLength(n, 3)
    },
    prenom: function(n) {
      this.checkPrenom = this.$isLength(n, 3)
    },
    email: function(n) {
      this.checkEmail = this.$isEmail(n)
    },
    sujet: function(n) {
      this.checkSujet = !this.$isEmpty(n)
    },
    message: function(n) {
      this.checkMessage = this.$isLength(n, 10)
    }
  },
  methods: {
    clear() {
      this.nom = ''
      this.prenom = ''
      this.email = ''
      this.sujet = ''
      this.message = ''
    },
    sendEmail(e) {
      if (this.recaptcha && this.token.length > 0) {
        const { user, pw } = this.$validate({
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          sujet: this.sujet,
          message: this.message
        })
        if (user && pw) {
          const Email = this.$Email()
          const msg = `${this.nom} ${this.prenom} - ${this.email}<br /><br />${this.message}`
          const mail_to = this.mailpro

          try {
            Email.send({
              Host: 'smtp.gmail.com',
              Username: user,
              Password: pw,
              To: mail_to,
              From: 'bruno.bianchi.metal.creation@gmail.com',
              Subject: this.sujet,
              Body: msg
            })
          } catch (error) {
            this.toastError(error)
            this.clear()
          }
          this.toastSuccess('Message envoyé !')
          this.clear()
        }
      }
    },
    toastSuccess(message) {
      this.$buefy.toast.open({
        message: message,
        type: 'is-success'
      })
    },
    toastError(message) {
      this.$buefy.toast.open({
        message: message,
        type: 'is-danger'
      })
    },

    onError(error) {
      console.log('Error happened:', error)
    },
    onExpired() {
      console.log('Expired')
    },
    async onSubmit() {
      try {
        //const token = await this.$recaptcha.getResponse();
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    async onSuccess(token) {
      console.log('Succeeded')
      this.recaptcha = true
      this.token = token
    }
  }
}
</script>

<style></style>
