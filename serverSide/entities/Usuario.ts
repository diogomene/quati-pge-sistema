export interface UsuarioDTO{
    nomeUsuario: string
}

class Usuario{
    id: number
    nomeUsuario: string
    senha: string
    
    constructor(id:number, nomeUsuario : string, senha: string){
        this.id = id
        this.nomeUsuario = nomeUsuario
        this.senha = senha
    }
}

export default Usuario