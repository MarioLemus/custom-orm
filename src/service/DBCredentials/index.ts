import { config } from "dotenv"
import { IDB } from "../../interfaces/IDB"
config()

class DBCredentials {
    private _host: string | null
    private _port: string | null
    private _user: string | null
    private _dbName: string | null
    private _password: string | null
    
    constructor() {
        this._host = process.env.DB_HOST || null
        this._port = process.env.DB_PORT || null
        this._user = process.env.DB_USER || null
        this._dbName = process.env.DB_NAME || null
        this._password = process.env.DB_PASSWORD || null
    }

    public get host(): string | null {
        return this._host
    }

    public get port(): string | null {
        return this._port
    }

    public get user(): string | null {
        return this._user
    }

    public get dbName(): string | null {
        return this._dbName
    }
    
    public get password(): string | null {
        return this._password
    }
}