
import { useHandlerError } from "@global/errors/hooks/useHandlerError";
import { useState } from "react";
import { type IUserEntity } from "@entities/user/types";
import { useDispatch } from "react-redux";
import { activeGlobalLoading, disableGlobalLoading } from "@app/slices/loading-global/loadingGlobal.slice";
import MotionContainer from "@global/containers/MotionContainer";
import { useNavigate } from "react-router-dom";
import { useStepsControl } from "@features/authentication/hooks/useSignUpSteps";
import StepIndicator from "@features/authentication/components/steps/sign-up/StepIndicator";
import { COMPLETE_PROFILE_STEPS } from "./constants/complete-profile-steps";
import EnterInfoStep1 from "./components/steps/EnterInfoStep1";
import ChooseTeamStep2 from "./components/steps/ChooseTeamStep2";
import { useCompleteProfileActionsServices } from "./services/useCompleteProfileActionsServices";
import { setSession } from "@app/slices/session/session.slice";

export type ICompleteProfileData = Pick<
   IUserEntity,
   "username" | "firstName" | "lastName" | "email" | "birthDate" | "teamId"
>
const initialCompleteProfileData: ICompleteProfileData = {
   firstName: "",
   lastName: "",
   email: "",
   birthDate: "",
   username: "",
   teamId: ""
};

const CompleteProfilePage = () => {
   const handleError = useHandlerError();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { completeProfileService } = useCompleteProfileActionsServices();

   const [completeProfileData, setCompleteProfileData] = useState<ICompleteProfileData>(initialCompleteProfileData);

   const { step, nextStep, previousStep } = useStepsControl(2);

   const onSubmit = async () => {
      dispatch(activeGlobalLoading({ message: "Registrando usuario..." }));
      try {
         const { token } = await completeProfileService(completeProfileData)
         dispatch(setSession({ token, user: null }));
         navigate("/");
      } catch (error) {
         handleError(error);
      } finally {
         dispatch(disableGlobalLoading());
      }
   };

   return (
      <MotionContainer>

         <StepIndicator
            title="Finaliza tu registro"
            description="Completa los últimos pasos para empezar a jugar"
            currentStep={step}
            steps={COMPLETE_PROFILE_STEPS}
         />

         {
            /* Step 1 */
            step === 0 &&
            <EnterInfoStep1
               completeProfileData={completeProfileData}
               nextStep={nextStep}
               setCompleteProfileData={setCompleteProfileData}
            />
         }

         {
            /* Step 2 */
            step === 1 &&
            <ChooseTeamStep2
               previousStep={previousStep}
               handleSubmit={onSubmit}
               setCompleteProfileData={setCompleteProfileData}
            />
         }
      </MotionContainer>
   )
}

export default CompleteProfilePage