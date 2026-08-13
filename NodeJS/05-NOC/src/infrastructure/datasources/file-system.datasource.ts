import path from "path";
import { LogDatasource } from "../../domain/datasources/log.datasourse";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from 'fs';
/**
 * Datasource es la capa de abstracción que nos permite desacoplar la lógica de negocio de la implementación de la persistencia de datos.
 * Lo que se hace aqui es la implementación de la persistencia de datos, es decir, como se guardan los datos, ya sea en una base de datos, un archivo, etc.
 */
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

    private getLogsFromFile = (path:string): LogEntity[] => {
        const content = fs.readFileSync(path, 'utf-8')
        const logs = content.split('\n').map(log => LogEntity.fromJson(log))
        return logs
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        switch (severityLevel) {
            case LogSeverityLevel.low:
                return this.getLogsFromFile(this.allLogsPaht)
            case LogSeverityLevel.medium:
                return this.getLogsFromFile(this.mediumLogPaht)
            case LogSeverityLevel.high:
                return this.getLogsFromFile(this.highLogPaht)
            default:
                throw new Error(`${severityLevel} not implemented`)
        }
    }

}