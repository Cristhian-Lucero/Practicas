import path from "path";
import { LogDatasource } from "../../domain/datasources/log.datasourse";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';

export class FileSystemDatasouce implements LogDatasource {

    private readonly logPath = 'logs/'
    private readonly allLogPaht = 'logs/logs-low.log'
    private readonly mediumLogPaht = 'logs/logs-medium.log'
    private readonly highLogPaht = 'logs/logs-high.log'

    constructor (){
        this.createLogsFiles
    }

    private createLogsFiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath)
        }
        [
            this.allLogPaht, 
            this.mediumLogPaht,
            this.highLogPaht
        ].forEach(path => {
            if (fs.existsSync(path)) return
            fs.writeFileSync(path,'')
        })
    }

    saveLog(log: LogEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}