
import {z} from "zod"

 export const usernameSchema=z.object({
    username:z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/,"Username only can contain letters,numbers  and underscores")
  })