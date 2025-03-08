import app from './app.js'
import parsedEnv from './constants/envParsed.js'
import logger from './utils/logger.js'

const server = app.listen(parsedEnv.PORT)

;(() => {
    try {
        logger.info('APPLICATION_STARTED', {
            meta: {
                PORT: parsedEnv.PORT
                // SERVER_URL:parsedEnv.SERVER_URL
            }
        })
    } catch (err) {
        logger.error('APPLICATION_ERROR', { meta: err })
        server.close((error) => {
            if (error) {
                console.error('APPLICATION_ERROR', { meta: error })
            }
            process.exit(1)
        })
    }
})()
