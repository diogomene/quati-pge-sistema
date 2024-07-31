import { Processo, STATUS_PROCESSO } from "@/entities/Processo";
import { ProcessoDTO } from "@/utils/Processo.dto";
import { TipoOrdenacao } from "@/utils/TipoOrdenacao";

interface ParametrosPesquisaProcesso {
    statusProcesso?: STATUS_PROCESSO[];
    numeroProcesso?: number;
    dataInicialPrescricao?: Date;
    dataFinalPrescricao?: Date;
    ordanacaoDataPrescricao?: TipoOrdenacao;
}
type QueryPesquisaProcesso = string
export function buildFilterAndSortQuery( params : ParametrosPesquisaProcesso) : QueryPesquisaProcesso{
    const parametroPesquisa = new URLSearchParams();

    if (params.numeroProcesso !== undefined) {
        parametroPesquisa.append('numeroProcesso', params.numeroProcesso.toString());
    }
    if (params.ordanacaoDataPrescricao !== undefined) {
        parametroPesquisa.append('ordanacaoDataPrescricao', params.ordanacaoDataPrescricao);
    }
    if (params.statusProcesso !== undefined) {
        if(params.statusProcesso.length != Object.keys(STATUS_PROCESSO).length){
            params.statusProcesso.forEach(status => parametroPesquisa.append('statusProcesso', status));
        }
    }
    if (params.dataInicialPrescricao !== undefined) {
        parametroPesquisa.append('dataInicialPrescricao', params.dataInicialPrescricao.toISOString());
    }
    if (params.dataFinalPrescricao !== undefined) {
        parametroPesquisa.append('dataFinalPrescricao', params.dataFinalPrescricao.toISOString());
    }

    return parametroPesquisa.toString();
}

async function getAll(query: QueryPesquisaProcesso) : Promise<ProcessoDTO[]>{
    try{
        const res = await fetch('http://127.0.0.1:3000/processo' + (query ? '?' + query : '' ));
        const data = await res.json();
        data.forEach((processo: ProcessoDTO) => {
            processo.dataDistribuicao = new Date(processo.dataDistribuicao);
            processo.dataPrescricao = new Date(processo.dataPrescricao);
            if(processo.status in STATUS_PROCESSO){
                processo.status = STATUS_PROCESSO[processo.status as unknown as keyof typeof STATUS_PROCESSO];
            }
        });
        return data;
    }
    catch(err){
        console.error(err);
        return [];
    }
}

async function getById(id:number) : Promise<Processo|undefined>{
    try{
        const res = await fetch(`http://127.0.0.1:3000/processo/${id}`);
        const data = await res.json();
        return data;
    }
    catch(err){
        console.error(err);
        return undefined;
    }
}

export {getAll, getById};