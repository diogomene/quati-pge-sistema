import Processo from '../entities/Processo';
import fs from 'fs';

class ProcessosDataAccess {
    private static instance: ProcessosDataAccess;
    private processos: Processo[] = [];
    private constructor() {}

    public static getInstance(): ProcessosDataAccess {
        if (!ProcessosDataAccess.instance) {
            ProcessosDataAccess.instance = new ProcessosDataAccess();
        }
        return ProcessosDataAccess.instance;
    }

    private loadMockData(): Processo[] {
        const data = fs.readFileSync('dataAccess/processos.mock.json', 'utf8');
        const processos:Processo[] = JSON.parse(data, (chave, valor) => {
            if (chave === 'dataDistribuicao' || chave === 'dataPrescricao') {
                if(typeof valor === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(valor)){
                    return new Date(valor);
                }
                return valor;
            }
            return valor;
        });
        return processos;
    }
    public getMockData(): Processo[] {
        if (this.processos.length === 0) {
            this.processos = this.loadMockData();
        }
        return this.processos;
    }
}

export default ProcessosDataAccess.getInstance();