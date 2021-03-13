const express = require('express')
const nodemailer = require('nodemailer')
import validator from 'validator'

const app = express()

app.use(express.json())

app.post('/', function (req, res) {
    const mail = req.body.mail
    if(validate(mail)){
        sendMail(mail)
        res.status(200).json({ 'message': 'OH YEAH' })
    }
})
module.exports = {
    path: '/api/contact',
    handler: app
}

const validate = ({nom, prenom, email, sujet, message}) => {
    return (
        validator.isEmail(email) &&
        validator.isLength(nom, {min: 3}) &&
        validator.isLength(prenom, {min: 3}) &&
        !validator.isEmpty(sujet) &&
        !validator.isEmpty(message)
    )
    
}

const sendMail = (mail) => {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.G_USER,
            pass: process.env.G_PW
        }
    });

    let mailDetails = {
        from: mail.email,
        to: 'alex.goin@live.fr',
        subject: mail.sujet,
        text: `Nom: ${mail.nom}\nPrénom: ${mail.prenom}\nEmail: ${mail.email}\nMessage:\n\n${mail.message}`
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });

}
