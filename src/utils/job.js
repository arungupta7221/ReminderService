const cron = require('node-cron')
const emailService = require('../service/email-service')
const sender = require('../config/email-config')
const setupJobs = () => {
  cron.schedule('*/2 * * * *', async () => {
    const response = await emailService.fetchPendingMails()

    response.forEach((email) => {
      sender.sendMail(
        {
          to: email.recepientEMail,
          subject: email.subject,
          text: email.content,
        },
        async (err, data) => {
          if (err) {
            console.log(err)
          } else {
            console.log(data)
            await emailService.updateTicket(email.id, { status: 'SUCCESS' })
          }
        },
      )
    })
  })
}
module.exports = setupJobs
