
import { Executado } from "./Executado";
import { Juiz } from "./Juiz";
import {Movimentacao} from "./Movimentacao";

enum STATUS_PROCESSO {
  EM_EXECUCAO = "Em execução",
  PRESTES_A_PRESCREVER = "Prestes a prescrever",
  PRESCRITO_RECONHECIDO = "Prescrito reconhecido",
  PRESCRITO_NAO_RECONHECIDO = "Prescrito não reconhecido",
}

export interface Processo {
  id: number;
  numeroProcesso: number;
  status: STATUS_PROCESSO;
  dataDistribuicao: Date;
  dataPrescricao: Date;
  valor: number;
  executado: Executado;
  juiz: Juiz;
  movimentacao: Movimentacao[];
}

export { STATUS_PROCESSO };
