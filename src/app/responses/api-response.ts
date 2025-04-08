export interface ApiResponse <T> {
    sucesso: boolean
    mensagem: string
    data: T
}