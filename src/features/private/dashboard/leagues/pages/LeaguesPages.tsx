import MotionContainer from "@global/containers/MotionContainer";
import bannerPrivate from "@global/assets/banners/banner-private.png";

const LeaguesPage = () => {
	return (
		<MotionContainer className="grid justify-items-center h-full p-4 md:h-auto md:p-8">
			<img src={bannerPrivate} alt="Mock Banner Privado" className="rounded-2xl md:h-[300px] md:w-full md:object-cover" />
			Leagues Page
		</MotionContainer>
	);
};

export default LeaguesPage;