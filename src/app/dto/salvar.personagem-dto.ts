import { Arquetipo } from "../models/arquetipo"
import { Atributos } from "../models/atributos"
import { Caminho } from "../models/caminho"
import { Pericia } from "../models/pericia"
import { Raca } from "../models/raca"
import { Usuario } from "../models/usuario"

export interface PersonagemDTO {
    id: number
    nome: string
    usuario: Usuario
    raca: Raca
    caminho: Caminho[]
    arquetipo: Arquetipo[]
    pericia: Pericia[]
    atributos: Atributos
    maxvida: number
    vidaatual: number
    maxmana: number
    manaatual: number
    defesa: number
    inventario: string
    imagem: string
}