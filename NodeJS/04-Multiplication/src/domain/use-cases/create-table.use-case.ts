export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string,
}
export interface CreateTableOptions{
    base: number,
    limit?: number
}
export class CreateTable implements CreateTableUseCase{
    constructor(
        /**
         * DI - Dependency Injection
         */
    ){}
    execute({base,limit=10}: CreateTableOptions){
        let Tabla = ''
        for (let index = 0; index < limit+1; index++) {
            Tabla += `${base} x ${index} = ${base*index} \n`
        }
        return Tabla
    }
}