import Lottie from "react-lottie";
import { motion } from "framer-motion";
import lottieSplashScreen from "../../assets/lotties/splash-screen-animation.json";
import bgSplashScreen from "../../assets/images/backgrounds/bg-gradient-splash-screen.png";
import { useEffect } from "react";
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useDispatch } from "react-redux";
import { clearPlayer } from "@app/slices/player/player.slice";
import { useLoading } from "@global/loaders/hooks/useLoading";
import { useLoadingSplashActionsServices } from "@global/loaders/services/useLoadingSplashActionsServices";

const AppOverlayLoader = () => {
    const dispatch = useDispatch();
    const handleError = useHandlerError();

    const { hideLoading } = useLoading();
    const { verifyTokenAndGetAccountDataService } = useLoadingSplashActionsServices();

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieSplashScreen,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;

            try {
                await verifyTokenAndGetAccountDataService({ token });
            } catch (error) {
                handleError(error);
                dispatch(clearPlayer());
            } finally {
                hideLoading();
            }
        };

        verifyToken();
    }, [dispatch, handleError, hideLoading, verifyTokenAndGetAccountDataService])

    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center">
            <div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[140%] h-[120%] bg-left bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bgSplashScreen})` }}
            />

            <motion.div
                className="absolute inset-0 bg-linear-180 from-neutral-900 via-primary-900 to-neutral-900"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />

            <Lottie options={lottieOptions} height={124} width={124} />
        </div>
    )
}

export default AppOverlayLoader