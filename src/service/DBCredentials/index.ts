import { config } from "dotenv"
import { IDB } from "../../interfaces/IDB"
config()

class DBCredentials {
    private host: string | null
    private port: string | null
    private user: string | null
    private dbName: string | null
    private password: string | null
    
    constructor() {
        this.host = process.env.DB_HOST || null
        this.port = process.env.DB_PORT || null
        this.user = process.env.DB_USER || null
        this.dbName = process.env.DB_NAME || null
        this.password = process.env.DB_PASSWORD || null
    }

    // connect briefly to DB, just to validate creds working ok
    private validate(engine: IDB) {
        engine.connect()
    }

    getCredentials() {
        // if connection ok return creds
        // else quit app
    }
}