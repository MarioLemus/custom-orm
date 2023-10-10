import { IDB } from "../../interfaces/IDB"

class DBSettings {
    private engine: IDB | null
    constructor() {
        this.engine = null
    }
}