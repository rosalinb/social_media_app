function logger(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`${new Date()} ${req.method} ${req.path} ${ip}`)

  next()
}

module.exports = logger