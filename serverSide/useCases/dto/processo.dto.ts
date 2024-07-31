import Processo, { STATUS_PROCESSO } from "../../entities/Processo"
export default class ProcessoDTO{
    id: number
    numeroProcesso: number
    status: STATUS_PROCESSO
    executado: string[]
    dataDistribuicao: Date
    dataPrescricao: Date
    constructor(processo: Processo){
        this.id = processo.id
        this.numeroProcesso = processo.numeroProcesso
        this.status = processo.status
        this.executado = processo.executado.map(executado => executado.nome)
        this.dataDistribuicao = processo.dataDistribuicao
        this.dataPrescricao = processo.dataPrescricao
    }
}