import Lottie from "react-lottie";
import { motion } from "framer-motion";
import lottieSplashScreen from "../../assets/lotties/splash-screen-animation.json";
import bgSplashScreen from "../../assets/images/backgrounds/bg-gradient-splash-screen.png";

const AppOverlayLoader = () => {
    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieSplashScreen,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

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