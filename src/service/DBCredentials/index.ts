import { config } from "dotenv"
import { IDB } from "../../interfaces/IDB"
config()

class DBCredentials {
    private _host: string | undefined
    private _port: string | undefined
    private _user: string | undefined
    private _dbName: string | undefined
    private _password: string | undefined
    
    constructor() {
        this._host = process.env.DB_HOST || undefined
        this._port = process.env.DB_PORT || undefined
        this._user = process.env.DB_USER || undefined
        this._dbName = process.env.DB_NAME || undefined
        this._password = process.env.DB_PASSWORD || undefined
    }

    public get host(): string | undefined {
        return this._host
    }

    public get port(): string | undefined {
        return this._port
    }

    public get user(): string | undefined {
        return this._user
    }

    public get dbName(): string | undefined {
        return this._dbName
    }

    public get password(): string | undefined {
        return this._password
    }
}