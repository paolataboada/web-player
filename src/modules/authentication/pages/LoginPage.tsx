import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

interface ILoginForm {
    username: string;
    password: string;
}

const LoginPage = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<ILoginForm>();

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className="min-h-screen grid place-content-center mx-auto h-[500px]">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 border rounded-2xl p-10">
                <h1 className="font-semibold text-center text-xl">Login</h1>

                <div className="grid gap-1">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="bg-amber-50 text-black" {...register("username", { required: true })} />
                    {errors.username && <span>This field is required</span>}
                </div>

                <div className="grid gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="bg-amber-50 text-black" {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>

                <div className="text-sm">
                    You don't have an account? <Link to={ROUTES.SIGNUP} className="underline underline-offset-2">Sign up</Link>
                </div>

                <input
                    type="submit"
                    value="Login"
                    disabled={!isValid}
                    className="bg-gray-700 rounded-lg py-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                />
            </form>
        </div>
    )
}

export default LoginPage