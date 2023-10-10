export interface IDB {
    connect():void
    disconnect():void
    getOne():void
    getAll():void
    addOne():void
    updateOne():void
    deleteOne():void
}