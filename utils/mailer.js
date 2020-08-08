const nodemailer = require('nodemailer')

exports.sendmail = async (mail) => {
    const transport  = {
        service:process.env.service,
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    }
    const transporter = await nodemailer.createTransport(transport)
    await transporter.verify((error,success) => {
        if(error){
            console.error(error)
        } else{
            console.log('user ready to mail')
        }  
    })
    const mails = {
        from:process.env.EMAIL,
        to:`${mail.to}`,
        subject:`${mail.subject}`,
        text:`${mail.text}`
    }
    //sending actual email 
    return await transporter.sendMail(mails,(err,data) => {
        if(err){
            console.error(err)
        } else{
            console.log("Sent successfully".green.bold)
        }
    })
}