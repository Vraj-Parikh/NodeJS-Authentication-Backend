import dotenv from 'dotenv'
dotenv.config()
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import parsedEnv from '../constants/envParsed.js'

const schema = {}
const pool = new Pool({
    connectionString: parsedEnv.DATABASE_URL
})
export const db = drizzle({ client: pool, schema })
