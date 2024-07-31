import { Usuario } from "./Usuario"

enum TIPO_MOVIMENTACAO{
    CITACAO_EXECUTADO = "Citação executado",
    PEDIDO_PENHORA = "Pedido penhora",
    PRESCRICAO_POR_RECONHECIMENTO = "Prescrição por reconhecimento",
    PRESCRICAO_POR_TEMPO = "Prescrição por tempo"
}

export interface Movimentacao{
    id: number
    data: Date
    tipo: TIPO_MOVIMENTACAO
    descricao: string
    usuario: Usuario
}

export {TIPO_MOVIMENTACAO}