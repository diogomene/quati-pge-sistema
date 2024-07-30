import Usuario from "./Usuario"

enum TIPO_MOVIMENTACAO{
    CITACAO_EXECUTADO = "Citação executado",
    PEDIDO_PENHORA = "Pedido penhora",
    PRESCRICAO_POR_RECONHECIMENTO = "Prescrição por reconhecimento",
    PRESCRICAO_POR_TEMPO = "Prescrição por tempo"
}

class Movimentacao{
    id: number
    data: Date
    tipo: TIPO_MOVIMENTACAO
    descricao: string
    usuario: Usuario

    constructor(id:number, date: Date, tipo: TIPO_MOVIMENTACAO, descricao: string, usuario: Usuario){
        this.id = id
        this.data = date
        this.tipo = tipo
        this. descricao = descricao
        this.usuario = usuario
    }
}

export default Movimentacao
export {TIPO_MOVIMENTACAO}