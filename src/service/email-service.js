const sender = require('../config/email-config')
const TicketRepository = require('../repository/ticket-repository')

const repo = new TicketRepository()
const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const fetchPendingMails = async () => {
  try {
    const result = await repo.get({ status: 'PENDING' })
    return result
  } catch (error) {
    console.log(error)
  }
}

const createNotification = async (data) => {
  try {
    const result = await repo.create(data)
    return result
  } catch (error) {
    console.log(error)
  }
}

const updateTicket = async (ticketId, data) => {
  try {
    const ticket = await repo.update(ticketId, data)
    return ticket
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendBasicEmail,
  fetchPendingMails,
  createNotification,
  updateTicket,
}

/**
 * SMTP -> a@b.com
 * receiver-> d@e.com
 *
 * from: support@noti.com
 */
