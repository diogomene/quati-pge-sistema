import { Request, Response } from "express";
import Processo, { STATUS_PROCESSO } from "../entities/Processo";
import {
  ProcessoFiltro,
  ProcessoOrdenacao,
} from "../useCases/processo.control";
import * as processoUseCases from "../useCases/processo.control";

const getProcessos = async (req: Request, res: Response) => {
  const {
    statusProcesso,
    numeroProcesso,
    dataInicialPrescricao,
    dataFinalPrescricao,
    ordanacaoDataPrescricao,
  } = req.query;

  const filtro: ProcessoFiltro = {
    statusProcesso: statusProcesso
      ? Array.isArray(statusProcesso)
        ? statusProcesso.map((value) => value as STATUS_PROCESSO)
        : [statusProcesso as STATUS_PROCESSO]
      : undefined,
    numeroProcesso: numeroProcesso
      ? parseInt(numeroProcesso as string)
      : undefined,
    dataInicialPrescricao: dataInicialPrescricao
      ? new Date(dataInicialPrescricao as string)
      : undefined,
    dataFinalPrescricao: dataFinalPrescricao
      ? new Date(dataFinalPrescricao as string)
      : undefined,
  };

  const ordenacao: ProcessoOrdenacao = {
    ordanacaoDataPrescricao: ordanacaoDataPrescricao as "ASC" | "DESC",
  };

  res.status(200).json(processoUseCases.getProcessos(filtro, ordenacao));
};

const getProcessoById = async (req: Request, res: Response) => {
  const idProcesso: number = parseInt(req.params.id);
  const processo = processoUseCases.getProcessoById(idProcesso);
  if(!processo){
    res.status(404).send()
    return;
  }
  res.status(200).send(processoUseCases.getProcessoById(idProcesso));
};

export { getProcessos, getProcessoById };
