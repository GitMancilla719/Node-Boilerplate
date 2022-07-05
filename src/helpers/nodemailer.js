const nodemailer = require('nodemailer')

// Generate an app password to use gmail
// manage account > security > turn on 2 step verification > 
// go back to security > enable app passwords > select mail & windows computer > generate app password
// save app password in env
const emailer = async (to, subject, text) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            secure: false,
            auth: {
              user: 'sender email here',
              pass: 'sender email generated app password here'
            }
        })
        
        let info = await transporter.sendMail({
            from: 'sender email address',
            to: "receiver(s) (separated by comma)", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            // html: "<b>Hello world?</b>", // html body
        })
    } catch (error) {
        return error
    }
}

module.exports = emailer