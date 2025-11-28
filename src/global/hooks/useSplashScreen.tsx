import { useEffect, useState } from "react";

export const useSplashScreen = (duration: number = 2000) => {
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSplash(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return { splash };
};
