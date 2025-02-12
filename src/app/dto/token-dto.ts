import { Usuario } from "../models/usuario"

export interface TokenDTO {
    usuario: Usuario
    token: string
}