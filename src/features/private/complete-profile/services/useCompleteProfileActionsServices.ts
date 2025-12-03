import apiPublic from '@api/interceptors/api-public';
import { type ITeam } from '@entities/team/types';

export const useCompleteProfileActionsServices = () => {

    const validateUsernameService = async (username: string): Promise<{ exists: boolean }> => {
        const response = await apiPublic.post("/auth/validate-username", { username });
        return response.data.data;
    }
    
    const getFantasyTeams = async (): Promise<ITeam[]> => {
        const response = await apiPublic.get("/team/all");
        return response.data.data;
    }

    return {
        validateUsernameService,
        getFantasyTeams,
    }
}
