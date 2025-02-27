import { Usuario } from "../models/usuario"

export interface TokenDTO {
    user: Usuario
    token: string
}