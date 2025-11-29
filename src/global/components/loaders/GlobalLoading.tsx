

export const GlobalLoading = ({ message }: { message: string }) => {
    return (
        <div
            className="text-neutral-50 z-50 backdrop-blur-sm fixed top-0 left-0 w-full 
                    h-full bg-black/50 flex items-center justify-center ">
            {message || "Cargando..."}
        </div>
    )
}