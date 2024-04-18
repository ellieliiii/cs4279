export interface Activity {
    actId: number;
    title: string;
    description: string;
    date: string;
    organizer: string;
    membershipIds: [];
}

export interface Org {
    orgId: number;
    title: string;
    description: string;
    creator: string;
    membershipIds: []; 
}
