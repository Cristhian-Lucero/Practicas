export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export class LogEntity {
    public level: LogSeverityLevel
    public message: string
    public createAt: Date

    constructor (message: string, level: LogSeverityLevel) {
        this.message = message
        this.level = level
        this.createAt = new Date()
    }

    static fromJson = (json:string): LogEntity =>{
        const {messsage,level,createAt} = JSON.parse(json)
        const log = new LogEntity(messsage,level)
        log.createAt = new Date (createAt)

        return log
    }
}