import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface CheckServiceUseCase {
    execute(url:string):Promise<boolean>;
}

type SuccessCallbak = () => void
type ErrorCallbak = (error: string) => void

/** Flujo: 
 * Caso de Uso -> Repositorio -> Datasource 
 * CheckService es un caso de uso que se encarga de verificar si un servicio está disponible o no.
 */
export class CheckService implements CheckServiceUseCase{

    constructor(
        private readonly LogRepository: LogRepository,
        private readonly succesCallback: SuccessCallbak,
        private readonly errorCallback: ErrorCallbak
    ){}

    public async execute(url:string): Promise<boolean>{
        try {
            const req = await fetch(url)
            if (!req.ok){
                throw new Error(`Error on check service ${url}`)
            }
            const log = new LogEntity(`Service ${url} working`, LogSeverityLevel.low)
            this.LogRepository.saveLog(log)
            this.succesCallback()
            return  true
        } catch (error) {
            const errorMessage = `${error}`
            const log = new LogEntity(errorMessage, LogSeverityLevel.low)
            this.LogRepository.saveLog(log)
            this.errorCallback(errorMessage)
            return false
        }
    }
}