const sgMail = require('@sendgrid/mail')

require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function sendEmail(data) {
  console.log(data);
  const { companyName, name, phone, email, shippingFrom, shippingTo, anythingElse, service } = data;

  const msg = {
    to: 'Info@glgfreight.com', // Change to your recipient
    from: 'Info@glgfreight.com', // Change to your verified sender
    subject: 'New quote from GLG app',
    html: `<div>
              <h1>Quote's info</h1>
              <p>Customer name: ${name}</>
              <p>customer mail: ${email}</p>
              <p>customer phone: ${phone}</p>
              <p>Company name: ${companyName}</p>
              <p>Where are you shipping from: ${shippingFrom}</p>
              <p>Where are you shipping to: ${shippingTo}</p>
              <p>Services selected: ${service}</p>
              <p>Additional Information: ${anythingElse}
          </div>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error.code)
    })
}

module.exports = sendEmail;