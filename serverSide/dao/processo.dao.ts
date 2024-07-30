import Processo, { STATUS_PROCESSO } from "../entities/Processo";
import DataAccess from "../dataAccess/Processos.data";
import {
  ProcessoFiltro,
  ProcessoOrdenacao,
} from "../useCases/processo.control";


class ProcessoDAO {
  private processos: Processo[];

  constructor() {
    this.processos = DataAccess.getMockData();
  }
  
  private getProcessosByStatus(
    processos: Processo[],
    statusProcesso: STATUS_PROCESSO[]
  ): Processo[] {
    return processos.filter((processo) =>
      statusProcesso.includes(processo.status)
    );
  }

  private getProcessosByIntervalo(
    processos: Processo[],
    dataInicialPrescricao?: Date,
    dataFinalPrescricao?: Date
  ): Processo[] {
    return processos.filter((processo) => {
      const dataPrescricao = processo.dataPrescricao;
      return (
        (!dataInicialPrescricao || dataPrescricao >= dataInicialPrescricao) &&
        (!dataFinalPrescricao || dataPrescricao <= dataFinalPrescricao)
      );
    });
  }

  private ordenarProcessos(
    processos: Processo[],
    ordenacao: "ASC" | "DESC"
  ): Processo[] {
    return processos.sort((a, b) => {
      if (ordenacao === "ASC") {
        return a.dataPrescricao.getTime() - b.dataPrescricao.getTime();
      } else{
        return b.dataPrescricao.getTime() - a.dataPrescricao.getTime();
      }
    });
  }

  public getAllProcessos(): Processo[] {
    return this.processos;
  }

  public getProcessoById(id: number): Processo | undefined {
    return this.processos.find((processo) => processo.id === id);
  }

  public getProcessoByNumero(numero: number): Processo | undefined {
    return this.processos.find(
      (processo) => processo.numeroProcesso === numero
    );
  }

  public getProcessosByFiltroOrdenacao(
    filtro: ProcessoFiltro,
    ordenacao?: ProcessoOrdenacao
  ): Processo[] {
    let filteredProcessos = this.processos;

    if (filtro.statusProcesso) {
      filteredProcessos = this.getProcessosByStatus(
        filteredProcessos,
        filtro.statusProcesso
      );
    }

    if (filtro.dataInicialPrescricao || filtro.dataFinalPrescricao) {
      filteredProcessos = this.getProcessosByIntervalo(
        filteredProcessos,
        filtro.dataInicialPrescricao,
        filtro.dataFinalPrescricao
      );
    }

    if (ordenacao?.ordanacaoDataPrescricao) {
      filteredProcessos = this.ordenarProcessos(
        filteredProcessos,
        ordenacao.ordanacaoDataPrescricao
      );
    }

    return filteredProcessos;
  }
}

export default ProcessoDAO;
