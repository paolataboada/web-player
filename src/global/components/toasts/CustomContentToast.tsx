import { capitalize } from "@mui/material";

const CustomContentToast = (title: string, message: string) => (
    <div className="grid gap-1">
        <h4 className="font-body-large-medium text-neutral-50">{capitalize(title)}</h4>
        <p className="font-body-normal-regular text-neutral-200">{message}</p>
    </div>
);

export default CustomContentToast;