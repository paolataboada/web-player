import MotionContainer from "@global/containers/MotionContainer";
import bannerPrivate from "@global/assets/banners/banner-private.png";
import { PublicityBanner } from "@global/containers/PublicityBanner";

const JoinLeaguePage = () => {
	return (
		<MotionContainer className="flex flex-col h-full p-4 md:h-auto md:p-8 md:pb-14">
			<PublicityBanner src={bannerPrivate} />

			<section className="grid gap-6 py-2 mt-4">
				
			</section>
		</MotionContainer>
	);
};

export default JoinLeaguePage;