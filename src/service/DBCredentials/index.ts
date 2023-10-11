import { config } from "dotenv"
config()

interface IProccessDBCreds {
    get host(): string
    get port(): string
    get user(): string
    get dbName(): string
    get password(): string
}

export class DBCredentials implements IProccessDBCreds {
    private _host: string
    private _port: string
    private _user: string
    private _dbName: string
    private _password: string
    
    constructor() {
        this._host = process.env.DB_HOST || ""
        this._port = process.env.DB_PORT || ""
        this._user = process.env.DB_USER || ""
        this._dbName = process.env.DB_NAME || ""
        this._password = process.env.DB_PASSWORD || "" 
    }

    public get host(): string {
        this.throwErrorIfPropIsInvalid(this._host, "DB_HOST")
        return this._host
    }

    public get port(): string {
        this.throwErrorIfPropIsInvalid(this._port, "DB_PORT")
        return this._port
    }

    public get user(): string {
        this.throwErrorIfPropIsInvalid(this._user, "DB_USER")
        return this._user
    }

    public get dbName(): string {
        this.throwErrorIfPropIsInvalid(this._dbName, "DB_NAME")
        return this._dbName
    }

    public get password(): string {
        this.throwErrorIfPropIsInvalid(this._password, "DB_PASSWORD")
        return this._password
    }

    private throwErrorIfPropIsInvalid(prop: string, propName: string) {
        if (prop.trim().length === 0) 
            throw new Error(`"${propName}" must exist and be valid, check your enviroment variable`)
    }
}