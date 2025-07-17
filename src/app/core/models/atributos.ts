export class Atributos {
    id: number = 0
    forca: number = 0
    agilidade: number = 0
    intelecto: number = 0
    poder: number = 0
    sanidade: number = 0
    resistencia: number = 0

    constructor(init?: Partial<Atributos>) {
        Object.assign(this, init)
    }
}