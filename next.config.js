const withPWA = require('next-pwa')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction
  },
  env: {
    firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
    firebaseApiKey: process.env.FIREBASE_API_KEY,
    firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    firebaseAppId: process.env.FIREBASE_APP_ID
  }
})
