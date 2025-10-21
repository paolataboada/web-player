import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

interface ISignUpForm {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
}

const SignUpPage = () => {
    const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<ISignUpForm>();

    const onSubmit: SubmitHandler<ISignUpForm> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className="min-h-screen grid place-content-center mx-auto h-[500px]">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 border rounded-2xl p-10">
                <h1 className="font-semibold text-center text-xl">Sign Up</h1>

                <div className="grid gap-1">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="bg-amber-50 text-black" {...register("username", { required: true })} />
                    {errors.username && <span>This field is required</span>}
                </div>

                <div className="grid gap-1">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="bg-amber-50 text-black" {...register("firstName", { required: true })} />
                    {errors.firstName && <span>This field is required</span>}
                </div>

                <div className="grid gap-1">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="bg-amber-50 text-black" {...register("lastName", { required: true })} />
                    {errors.lastName && <span>This field is required</span>}
                </div>

                <div className="grid gap-1">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="bg-amber-50 text-black" {...register("password", { required: true })} />
                    {errors.password && <span>This field is required</span>}
                </div>

                <div className="grid gap-1">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="bg-amber-50 text-black" {...register("confirmPassword", { required: true })} />
                    {errors.confirmPassword && <span>This field is required</span>}
                </div>

                <div className="text-sm">
                    Already have an account? <Link to={ROUTES.LOGIN} className="underline underline-offset-2">Login</Link>
                </div>

                <input
                    type="submit"
                    value="Register"
                    disabled={!isValid}
                    className="bg-gray-700 rounded-lg py-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                />
            </form>
        </div>
    )
}

export default SignUpPage