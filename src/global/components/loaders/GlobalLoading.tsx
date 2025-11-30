import Lottie from "react-lottie";
import lottieFantasyLoader from "../../assets/lotties/splash-screen-animation.json";

export const GlobalLoading = ({ message }: { message: string }) => {
    return (
        <div
            className="text-neutral-50 z-50 backdrop-blur-sm fixed top-0 left-0 w-full 
            font-body-large-medium h-full bg-black/50 grid place-content-center gap-4">
            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData: lottieFantasyLoader,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice",
                    }
                }}
                height={124}
                width={124}
            />
            {message || "Cargando..."}
        </div>
    )
}