const express = require('express')
// const cron = require('node-cron')
const bodyParser = require('body-parser')
// const { sendBasicEmail } = require('./service/email-service')
const { PORT } = require('./config/serverConfig')
const TicketController = require('./controllers/ticket-controller')
const jobs = require('./utils/job')
const setupAndStartServer = () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.post('/api/v1/tickets', TicketController.create)
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
    jobs()

    // cron.schedule('*/2 * * * *', () => {
    //   console.log('running a task every two minutes')
    // })
    // sendBasicEmail(
    //   'support@admin.com',
    //   'guptaarun7877@gmail.com',
    //   'This is a testing email',
    //   'Hey, how are you, I hope you like the support',
    // )
  })
}

setupAndStartServer()
