/**
 * @file sendEmail.js
 * @author hector
 * @desc This module is used to send an email to GLG Freight with the information provided by a customer in the form.
 * @requires dotenv
 * @requires sendgrid
 */

const sgMail = require('@sendgrid/mail')
require('dotenv').config()

/**
 * @desc Set the Sendgrid API key using the environment variable SENDGRID_API_KEY
 */
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


/**
 * @function sendEmail
 * @param {Object} data - An object that contains the customer's information from the form
 * @param {string} data.companyName - The company name of the customer
 * @param {string} data.name - The name of the customer
 * @param {string} data.phone - The phone number of the customer
 * @param {string} data.email - The email of the customer
 * @param {string} data.shippingFrom - The location where the customer is shipping from
 * @param {string} data.shippingTo - The location where the customer is shipping to
 * @param {string} data.anythingElse - Additional information provided by the customer
 * @param {string} data.service - The selected services by the customer
 * @returns {Promise} Resolves when the email is sent successfully, otherwise rejects with an error code.
 */

function sendEmail(data) {
  const { companyName, name, phone, email, shippingFrom, shippingTo, anythingElse, service } = data;

  /**
   * @desc Create the message object with the customer's information
   */
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

  /**
   * @desc Use the sendgrid library to send the email
   */
  return sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error.code)
    })
}

module.exports = sendEmail;