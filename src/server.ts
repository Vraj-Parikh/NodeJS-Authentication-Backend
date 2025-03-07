import app from './app.js'
import parsedEnv from './constants/envParsed.js'

const server = app.listen(parsedEnv.PORT)

;(() => {
    try {
        console.info('APPLICATION_STARTED', {
            meta: {
                PORT: parsedEnv.PORT
                // SERVER_URL:parsedEnv.SERVER_URL
            }
        })
    } catch (err) {
        console.error('APPLICATION_ERROR', { meta: err })
        server.close((error) => {
            if (error) {
                console.error('APPLICATION_ERROR', { meta: error })
            }
            process.exit(1)
        })
    }
})()
