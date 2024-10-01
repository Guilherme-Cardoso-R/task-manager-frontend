export class Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    prioridade: string;
    status: string;
    dataPrazo: Date;
    responsavel: string;

    constructor() {
        this.id = 0;
        this.titulo = '';
        this.descricao = '';
        this.prioridade = '';
        this.status = '';
        this.dataPrazo = new Date();  // Inicializa com a data atual
        this.responsavel = '';
    }
}
