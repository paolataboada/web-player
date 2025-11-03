export interface ITeam {
    _id: string;
    nickname: string;
    acronym: string;
    imageUrl: string;
    status: ETeamStatus
    code: string;
}

export enum ETeamStatus {
    ACTIVE = 'Active',
    INACTIVE = 'Inactive'
}