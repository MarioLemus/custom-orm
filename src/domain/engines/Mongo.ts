import { IDB } from "../../interfaces/IDB"

class Mongo implements IDB {
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    getOne(): void {
        throw new Error("Method not implemented.");
    }
    getAll(): void {
        throw new Error("Method not implemented.");
    }
    addOne(): void {
        throw new Error("Method not implemented.");
    }
    updateOne(): void {
        throw new Error("Method not implemented.");
    }
    deleteOne(): void {
        throw new Error("Method not implemented.");
    }
    
}