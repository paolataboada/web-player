import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../navigation/routes/routes";
import { useDispatch } from "react-redux";
import MotionContainer from "@global/containers/MotionContainer";
import { clearSession } from "@app/slices/session/session.slice";
import LeagueCard from "@global/components/cards/LeagueCard";
import Camiseta from "@global/assets/icons/card/Camiseta.svg";

const HomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        navigate(ROUTES.LOGIN);
        dispatch(clearSession());
    }

    return (
        <MotionContainer className="pb-20 sm:pb-0">
            <div className="flex justify-between items-center p-3">
                <div>HomePage</div>
                <button type="button" onClick={handleLogout} className="bg-red-500 rounded-xl px-3 py-1 cursor-pointer">
                    Log out
                </button>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 p-4">
                <LeagueCard
                    type="Liga Publica"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="rosa"
                />

                <LeagueCard
                    type="Liga Privada"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="verde"
                />

                <LeagueCard
                    type="Liga Privada"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="celeste"
                />

                <LeagueCard
                    type="Liga Privada"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="amarillo"
                />
                <LeagueCard
                    type="Liga Privada"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="azul"
                />

                <LeagueCard
                    type="Liga Privada"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="morado"
                />

                <LeagueCard
                    type="Liga Privada"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="rojo"
                />


                <LeagueCard
                    type="Liga Private"
                    id="A123-456"
                    title="FFANTASY"
                    creator="FFantasy"
                    icon={Camiseta}
                    color="negro"
                />
            </div>
        </MotionContainer>
    )
}

export default HomePage