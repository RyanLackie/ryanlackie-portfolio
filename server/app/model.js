var nodemailer = require('nodemailer');

class Model {

    sendMessage(name, email, phoneNumber, message, call_back) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
                auth: {
                    user: 'RyanLackiePortfolio@gmail.com',
                    pass: 'StabConn433Auth!'
                }
        });
    
        var mailOptions = {
            from: 'RyanLackiePortfolio@gmail.com',
            to: 'ryanwlackie@gmail.com',
            subject: 'Sent from Portfolio Website',
            text: name + ': ' + email + ': ' + phoneNumber + '\n' + message
        };
        
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                call_back('404');
            }
            else {
                console.log('Email sent: ' + info.response);
                call_back('100');
            }
        });
    }
    
}

module.exports = Model;