let nodemailer = require('nodemailer');

class Model {

    sendMessage(name, email, phoneNumber, message, call_back) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD
                }
        });

        let mailOptions = {
            from: 'RyanLackiePortfolio@gmail.com',
            to: 'ryanwlackie@gmail.com',
            subject: 'Sent from Portfolio Website',
            text: name + ': ' + email + ': ' + phoneNumber + '\n' + message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return call_back({ 'data': error.response, 'status': error.responseCode });
            }
            return call_back({ 'data': 'success', 'status': 200 });
        });
    }

}

module.exports = Model;
