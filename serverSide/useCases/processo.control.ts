import ProcessoDAO from "../dao/processo.dao";
import Processo, { STATUS_PROCESSO } from "../entities/Processo";

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

function getProcessos(filtro: ProcessoFiltro, ordenacao: ProcessoOrdenacao) {
    return processoDao.getProcessosByFiltroOrdenacao(filtro, ordenacao);
}

function getProcessoById(id: number) {
    return processoDao.getProcessoById(id);
}

export { ProcessoFiltro, ProcessoOrdenacao, getProcessos, getProcessoById };


