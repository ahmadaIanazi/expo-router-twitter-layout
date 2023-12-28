const health = (req, res) => {
  logger.info('Health check called')

  res.send('Hello World')
}

module.exports = health