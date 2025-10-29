import type { UseFormRegisterReturn } from "react-hook-form";
import { Link } from "react-router-dom";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	linkText?: string;
	href?: string;
	register?: UseFormRegisterReturn;
	error?: string;
}

const AuthCheckboxInput = ({
	label,
	linkText,
	href = "#",
	register,
	error,
	...inputProps
}: Props) => {
	return (
		<div className="grid gap-0.5">
			<div className="flex items-start gap-2">
				<input
					id={inputProps.id ?? label}
					type="checkbox"
					className="h-5 w-5 min-w-5 cursor-pointer"
					{...register}
					{...inputProps}
				/>
				<label
					htmlFor={inputProps.id ?? label}
					className="font-body-normal-regular text-neutral-200 select-none">
					{label}{" "}
					{linkText && (
						<Link
							to={href}
							target="_blank"
							className="text-neutral-50 font-bold hover:underline">
							{linkText}
						</Link>
					)}
				</label>
			</div>
			{error?.trim() && <p className="text-[#F21F29] text-sm">{error}</p>}
		</div>
	);
};

export default AuthCheckboxInput;
