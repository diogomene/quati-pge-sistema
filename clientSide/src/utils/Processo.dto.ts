import { STATUS_PROCESSO } from "@/entities/Processo";

export interface ProcessoDTO {
    id: number;
    numeroProcesso: number;
    status: STATUS_PROCESSO;
    executado: string[];
    dataDistribuicao: Date;
    dataPrescricao: Date;
}
