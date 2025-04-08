import { Atributos } from "../models/atributos"
import { Raca } from "../models/raca"
import { Usuario } from "../models/usuario"
import { ArquetipoDTO } from "./arquetipo-dto"
import { AtributosDTO } from "./atributos-dto"
import { CaminhoDTO } from "./caminho-dto"
import { PericiaDTO } from "./pericia-dto"
import { SingularidadeDTO } from "./singularidade-dto"

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
    cibernetica: string
    historia: string
    imagemBase64?: string | null
    singularidade: SingularidadeDTO,
    caracteristica: string,
    level: number
}