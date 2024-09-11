import {z} from "zod"

export const userSigupSchema = z.object({
    fullName:z.string().min(1,"Fullname is required"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be atleast of 6 characters"),
    contact:z.string().min(10,"Contact number must be of 10 digit")
});
// now we are exporting type using zod
export type SignupInputState = z.infer<typeof userSigupSchema>

export const userLoginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be atleast of 6 characters")
});
// now we are exporting type using zod
export type LoginInputState = z.infer<typeof userLoginSchema>