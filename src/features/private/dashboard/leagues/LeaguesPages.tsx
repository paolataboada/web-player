import MotionContainer from "@global/containers/MotionContainer"
import { PublicityBanner } from "@global/containers/PublicityBanner"
import fantasyBanner from "@global/assets/banners/fantasy-banner.png"
import FantasyButton from "@global/components/buttons/FantasyButton"
import addIcon from "@global/assets/icons/shared/plus.svg"
import keyIcon from "@global/assets/icons/shared/key.svg"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { MaxLeagueLimitModal } from "./components/MaxLeagueLimitModal"

const LeaguesPages = () => {


  const [modalLimit, setModalLimit] = useState(false)

  return (
    <MotionContainer className="space-y-4">
      <PublicityBanner src={fantasyBanner} />
      <div
        className="grid grid-cols-2 gap-4 items-center
        sm:grid-cols-[260px_260px] sm:justify-end sm:gap-6">
        <FantasyButton 
        variant="secondary" 
        className="justify-center"
        onClick={()=>setModalLimit(true)}>
          <img src={addIcon} alt="" className="w-4" />
          Crear Liga
        </FantasyButton>
        <FantasyButton variant="primary" className="justify-center">
          <img src={keyIcon} alt="" className="w-6" />
          Unirme a Liga
        </FantasyButton>
      </div>
      <AnimatePresence>
        {modalLimit && (
          <MaxLeagueLimitModal
            isOpen={modalLimit}
            onClose={() => setModalLimit(false)}
          />
        )}
      </AnimatePresence>
    </MotionContainer>
  )
}

export default LeaguesPages