const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nouhatrifi94@gmail.com',
        password: 'testest'
    }
});

const mailOptions = {
    from: 'nouhatrifi94@gmail.com',
    to: 'nouhatrifi@gmail.com',
    subject: 'checkpoint',
    text: 'checkpoint node js gomyccode'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});