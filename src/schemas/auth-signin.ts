import { z } from "zod"

export const authSignInShecma = z.object({
    email: z.string({message: 'Campo e-mail é obrigatório'}).email('E-mail inválido')
});