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
            className="object-cover w-full 
            h-[146px] md:h-[220px] lg:h-[300px]
            rounded-2xl lg:rounded-[20px]"
            src={src}
            alt="Banner publicitario"
        />
    )
}
