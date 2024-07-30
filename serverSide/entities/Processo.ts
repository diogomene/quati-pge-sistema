import Executado from "./Executado";
import Juiz from "./Juiz";
import Movimentacao from "./Movimentacao";

enum STATUS_PROCESSO {
  EM_EXECUCAO = "EM_EXECUCAO",
  PRESTES_A_PRESCREVER = "PRESTES_A_PRESCREVER",
  PRESCRITO_RECONHECIDO = "PRESCRITO_RECONHECIDO",
  PRESCRITO_NAO_RECONHECIDO = "PRESCRITO_NAO_RECONHECIDO",
}

class Processo {
  id: number;
  numeroProcesso: number;
  status: STATUS_PROCESSO;
  dataDistribuicao: Date;
  dataPrescricao: Date;
  valor: number;
  executado: Executado;
  juiz: Juiz;
  movimentacao!: Movimentacao[];

  constructor(
    id: number,
    numeroProcesso: number,
    status: STATUS_PROCESSO,
    dataDistribuicao: Date,
    dataPrescricao: Date,
    valor: number,
    executado: Executado,
    juiz: Juiz
  ) {
    this.id = id;
    this.numeroProcesso = numeroProcesso;
    this.status = status;
    this.dataDistribuicao = dataDistribuicao;
    this.dataPrescricao = dataPrescricao;
    this.valor = valor;
    this.executado = executado;
    this.juiz = juiz;
  }
}

export { STATUS_PROCESSO };
export default Processo;
