import { UsuarioDTO } from "./dtos/usuario-dto";

export class Usuario {
    id: number = 0;
    login: string = '';
    nome: string = '';
    senha: string = '';
    email: string = '';
    role: string = 'USER';

    constructor(init?: Partial<Usuario>) {
        Object.assign(this, init);
    }

    userDto(): UsuarioDTO {
        return {
            id: this.id,
            nome: this.nome,
            login: this.login,
            email: this.email,
            role: this.role
        }
    }
}
