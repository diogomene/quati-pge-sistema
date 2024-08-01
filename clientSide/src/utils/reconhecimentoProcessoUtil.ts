import { Processo } from "@/entities/Processo";
import { formataData, formatarValorMonetario } from "./formatacaoUtil";

export function gerarTextoReconhecimento(processo:Processo|undefined):string{
    if(!processo) return "";
    return `
Excelentíssimo Senhor ${processo.juiz.nome},

Nos termos do artigo 40 da Lei nº 6.830/1980, que dispõe sobre a Lei de Execução Fiscal, a Procuradoria Geral do Estado de Mato Grosso do Sul vem, por meio deste, solicitar o reconhecimento da prescrição intercorrente do processo de número ${processo.numeroProcesso}.
Consta dos autos que o presente processo, sob o número ${processo.numeroProcesso}, foi distribuído em ${formataData(processo.dataDistribuicao)}, tendo como valor atribuído a quantia de ${formatarValorMonetario(processo.valor)}. O status atual do processo é '${processo.status}', e observa-se que não houve movimentação processual efetiva nos últimos cinco anos. Tal fato evidencia que, até a presente data, não foram localizados bens para penhora nem a parte devedora, sendo essa: ${processo.executado.map(e => e.nome).join(", ")}, foi encontrada, conforme registram as movimentações constantes nos autos.
É de suma importância destacar que o não reconhecimento tempestivo da prescrição intercorrente pode resultar em ônus adicionais para o Estado, incluindo o pagamento de honorários advocatícios, o que contraria os princípios da economicidade e eficiência administrativa.
Diante do exposto, e em cumprimento ao dever legal da Procuradoria Geral do Estado, solicitamos respeitosamente a Vossa Excelência que reconheça a prescrição intercorrente e declare extinto o processo nº ${processo.numeroProcesso}, evitando, assim, prejuízos ao erário público.
Sem mais para o momento, renovo votos de elevada estima e distinta consideração.

Atenciosamente,
[Nome]

Campo Grande, MS, ${formataData(new Date())}`
}


