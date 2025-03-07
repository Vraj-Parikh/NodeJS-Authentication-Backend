import { z } from 'zod'
const environmentSchema = z.object({
    PORT: z.number(),
    BCRYPT_SALT_ROUNDS: z.number(),
    DATABASE_URL: z.string().nonempty(),
    JWT_ACCESS_TOKEN_SECRET: z.string().nonempty(),
    JWT_REFRESH_TOKEN_SECRET: z.string().nonempty(),
    JWT_ACCESS_TOKEN_EXPIRY_TIME: z.string().nonempty(),
    JWT_REFRESH_TOKEN_EXPIRY_TIME: z.string().nonempty()
})
function parseEnvironmentVariables() {
    try {
        const environmentVariables = {
            PORT: parseInt(process.env.PORT!),
            BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS!),
            DATABASE_URL: process.env.DATABASE_URL,
            JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET,
            JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET,
            JWT_ACCESS_TOKEN_EXPIRY_TIME: process.env.JWT_ACCESS_TOKEN_EXPIRY_TIME,
            JWT_REFRESH_TOKEN_EXPIRY_TIME: process.env.JWT_REFRESH_TOKEN_EXPIRY_TIME
        }
        const parsedVariables = environmentSchema.parse(environmentVariables)
        return parsedVariables
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const parsedEnv = parseEnvironmentVariables()
export default parsedEnv
