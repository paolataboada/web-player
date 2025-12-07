import { RankingContent } from "../../elements/RankingContent ";
import { ModalBaseLeagues } from "./ModalBaseLeagues";

interface RankingLeagueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RankingLeagueModal = ({
  isOpen,
  onClose,
}: RankingLeagueModalProps) => {
  return (
    <ModalBaseLeagues
      isOpen={isOpen}
      title="LOS MEJORES DE LA LIGA FFANTASY"
      onClose={onClose}>
      <RankingContent />
    </ModalBaseLeagues>
  );
};