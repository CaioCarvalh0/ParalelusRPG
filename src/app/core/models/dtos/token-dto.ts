import { Usuario } from "../usuario"

export interface TokenDTO {
    user: Usuario
    token: string
}