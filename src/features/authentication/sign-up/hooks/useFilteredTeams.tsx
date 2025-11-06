import { useMemo, useState } from "react";
import type { ITeam } from "@entities/team/types";

export const useFilteredTeams = (teams: ITeam[]) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredTeams = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        if (!term) return teams;
        return teams.filter((team) =>
            team.nickname.toLowerCase().includes(term) ||
            team.acronym?.toLowerCase().includes(term)
        );
    }, [teams, searchTerm]);

    return { searchTerm, setSearchTerm, filteredTeams };
};
