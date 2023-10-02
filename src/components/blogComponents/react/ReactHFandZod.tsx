import { useForm, type SubmitHandler } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginSchema = z.object({})

export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'El campo email es obligatorio' })
    .email({ message: 'Revisa el formato del email' }),
  password: z
    .string()
    .min(4, { message: 'La contraseña debe contener entre 4 y 12 caracteres' })
    .max(12, {
      message: 'La contraseña debe contener entre 4 y 12 caracteres',
    }),
  userName: z
    .string()
    .min(1, { message: 'El nombre de usuario es obligatorio' }),
})

type LoginType = z.TypeOf<typeof loginSchema>
type SignUpType = z.TypeOf<typeof signUpSchema>

function SignUpForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isLoading },
    //validación bien hecha
    // @ts-ignore
  } = useForm<SignUpType>({ resolver: zodResolver(signUpSchema) })

  const onSubmit: SubmitHandler<SignUpType> = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      //hay que pulir esto

      console.log(error)
    }
  }
  return (
    <div className="w-full max-w-xl my-10 mx-auto py-3 px-5 bg-slate-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="userName">
            Nombre de usuario
          </label>
          <input
            type="text"
            id="userName"
            className="mt-2 w-full rounded-md p-2"
            placeholder="Susana"
            {...register('userName')}
          />
          {errors.userName && (
            <span className="text-red-500">{errors.userName.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-2 w-full rounded-md p-2"
            placeholder="susana@acme.com"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-3">
          <label className="text-sm ml-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className=" mt-2 w-full rounded-md p-2"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          className="w-full mt-4 bg-black hover:bg-[#24292F]/90 py-3 text-slate-50  text-xl"
          type="submit"
        >
          Regístrate
        </button>
      </form>
      <p className="mt-4">
        ya tienes cuenta?{' '}
        <a className="text-blue-800" href="#">
          Inicia sesión
        </a>
      </p>
    </div>
  )
}

export default SignUpForm
