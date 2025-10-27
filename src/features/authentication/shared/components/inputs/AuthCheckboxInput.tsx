import { useState } from "react";
import { Link } from "react-router-dom";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	linkText?: string;
	href?: string;
}

const AuthCheckboxInput = ({
	label,
	linkText,
	href = "#",
	...inputProps
}: Props) => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<div className="flex items-center gap-2">
			<input
				id={inputProps.id ?? label}
				type="checkbox"
				checked={isChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
				className="w-5 h-5 cursor-pointer focus:ring-2"
				{...inputProps}
			/>
			<label
				htmlFor={inputProps.id ?? label}
				className="font-body-normal-regular text-neutral-200 select-none">
				{label}
				{linkText && (
					<Link
						to={href}
						target="_blank"
						className="text-neutral-50 font-bold hover:underline ml-1">
						{linkText}
					</Link>
				)}
			</label>
		</div>
	);
};

export default AuthCheckboxInput;
