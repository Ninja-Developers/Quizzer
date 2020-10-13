require('dotenv').config()

module.exports = {
    env: {
        QUIZZER_BASE: process.env.QUIZZER_BASE,
        AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY
    }
}