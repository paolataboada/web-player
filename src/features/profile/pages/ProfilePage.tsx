import MotionContainer from "@global/containers/MotionContainer"

const ProfilePage = () => {
    return (
        <MotionContainer className="flex items-start gap-12">
            <div className="w-full max-w-[618px]">
                Profile Section 1
            </div>
            <div className="w-full max-w-[480px]">
                Profile Section 2
                {/* DailyRewardCard */}
                {/* ReferredFriendCard */}
                {/* Iteración -> UserDetailLink */}
            </div>
        </MotionContainer>
    )
}

export default ProfilePage