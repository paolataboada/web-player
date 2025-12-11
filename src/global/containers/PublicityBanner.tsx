import { motion } from "framer-motion";

interface Props {
    src: string;
}

export const PublicityBanner = ({ src }: Props) => {
    return (
        src &&
        <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl w-full md:h-[300px] md:object-cover"
            src={src}
            alt="Banner publicitario"
        />
    )
}
