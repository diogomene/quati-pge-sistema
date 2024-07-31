import ProcessoDAO from "../dao/processo.dao";
import Processo, { STATUS_PROCESSO } from "../entities/Processo";
import ProcessoDTO from "./dto/processo.dto";

const processoDao: ProcessoDAO = new ProcessoDAO();

interface ProcessoFiltro {
  statusProcesso?: STATUS_PROCESSO[];
  numeroProcesso?: number;
  dataInicialPrescricao?: Date;
  dataFinalPrescricao?: Date;
}

interface ProcessoOrdenacao {
  ordanacaoDataPrescricao?: "ASC" | "DESC";
}

function getProcessos(filtro: ProcessoFiltro, ordenacao: ProcessoOrdenacao) : ProcessoDTO[] {
    let resProcessos : Processo[] = processoDao.getProcessosByFiltroOrdenacao(filtro, ordenacao);
    return resProcessos.map((processo) => {return new ProcessoDTO(processo)});
}

function getProcessoById(id: number) {
    let resProcessos : Processo|undefined = processoDao.getProcessoById(id);
    if(!resProcessos){
        return undefined
    }
    return new ProcessoDTO(resProcessos);
}

export { ProcessoFiltro, ProcessoOrdenacao, getProcessos, getProcessoById };


