const user = process.env.DB_USER || ''
const pass = process.env.DB_PASS || ''
const name = process.env.DB_NAME || 'test'
const host = process.env.DB_HOST || 'localhost'
const port = process.env.DB_PORT || 27017

const creds = user ? `${user}:${pass}@` : '';
const connectionUrl = `mongodb://${creds}${host}:${port}/${name}`

module.exports = {
  connectionUrl
}