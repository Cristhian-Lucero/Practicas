import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repository/log.repository";
import { LogDatasource } from '../../domain/datasources/log.datasourse';
/**
 * Repository es la capa de abstracción que nos permite desacoplar la lógica de negocio de la implementación de la persistencia de datos.
 * Es decir que separa la lógica de negocio de la forma en que se guardan los datos, ya sea en una base de datos, un archivo, etc.
 * Es como un puente entre la lógica de negocio y la persistencia de datos, no se encarga de nada más que de recibir los datos de la lógica de negocio y pasarlos a la persistencia de datos, y viceversa.
 */
export class LogRepositoryImpl implements LogRepository {

    constructor(
        private readonly LogDatasource: LogDatasource // Es lo mismo que recibir como argumento y declararlo con this.
    ){}

    async saveLog(log: LogEntity): Promise<void> {
        return this.LogDatasource.saveLog(log)
    }
    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.LogDatasource.getLogs(severityLevel)
    }

}