export class Singularidade {
    id: number = 0
    criacao: number = 0
    manipulacao: number = 0
    ampliacao: number = 0
    difusao: number = 0
    corporeo: number = 0
    espacial: number = 0
    descricao: string = ''

    constructor(init?: Partial<Singularidade>) {
        Object.assign(this, init)
    }
}