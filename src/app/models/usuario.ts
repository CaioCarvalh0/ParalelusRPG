export class Usuario {
    id: number = 0;
    login: string = '';
    nome: string = '';
    senha: string = '';
    email: string = '';

    constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }
}