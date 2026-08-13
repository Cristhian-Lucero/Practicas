import path from "path";
import { LogDatasource } from "../../domain/datasources/log.datasourse";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';

export class FileSystemDatasouce implements LogDatasource {

    private readonly logPath = 'logs/'
    private readonly allLogsPaht = 'logs/logs-all.log'
    private readonly mediumLogPaht = 'logs/logs-medium.log'
    private readonly highLogPaht = 'logs/logs-high.log'

    constructor (){
        this.createLogsFiles()
    }

    private createLogsFiles = () => {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirSync(this.logPath)
        }
        [
            this.allLogsPaht, 
            this.mediumLogPaht,
            this.highLogPaht
        ].forEach(path => {
            if (fs.existsSync(path)) return
            fs.writeFileSync(path,'')
        })
    }

    async saveLog(newLog: LogEntity): Promise<void> {
        const logAsJson = `${JSON.stringify(newLog)}\n`

        fs.appendFileSync(this.allLogsPaht,logAsJson)

        if (newLog.level === LogSeverityLevel.low) return;

        if (newLog.level === LogSeverityLevel.medium) {
            fs.appendFileSync(this.mediumLogPaht,logAsJson)
        }else{
            fs.appendFileSync(this.highLogPaht,logAsJson)
        }
    }
    getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        throw new Error("Method not implemented.");
    }

}