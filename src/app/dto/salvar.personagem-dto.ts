import { Atributos } from "../models/atributos"
import { Raca } from "../models/raca"
import { Usuario } from "../models/usuario"
import { ArquetipoDTO } from "./arquetipo-dto"
import { AtributosDTO } from "./atributos-dto"
import { CaminhoDTO } from "./caminho-dto"
import { PericiaDTO } from "./pericia-dto"

export interface PersonagemDTO {
    id: number
    nome: string
    usuario: Usuario
    raca: Raca
    caminho: CaminhoDTO[]
    arquetipo: ArquetipoDTO[]
    pericias: PericiaDTO[]
    atributos: AtributosDTO
    vidaMax: number
    vidaAtual: number
    energiaMax: number
    energiaAtual: number
    defesa: number
    inventario: string
    imagem?: string | null
    singularidade: string,
    caracteristica: string,
    level: number
}