const emailService = require('../service/email-service')

const create = async (req, res) => {
  try {
    const response = await emailService.createNotification(req.body)
    return res.status(201).json({
      success: true,
      data: response,
      error: {},
      message: 'Successfully registered a email',
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: response,
      error: error,
      message: 'not able to registered a email',
    })
  }
}

module.exports = {
  create,
}
