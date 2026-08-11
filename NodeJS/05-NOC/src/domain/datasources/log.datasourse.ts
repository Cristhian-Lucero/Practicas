import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

export abstract class LogDatasource {
    // cualquier origen de datos debe implementar este método para guardar un log (log = Entrada de datos)
    abstract saveLog(log: LogEntity): Promise<void>
    abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>
}

