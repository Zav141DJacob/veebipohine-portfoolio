
type Institution = {
    name: string;
    url: string;
}

export type Education = {
    institution: Institution;
    degree?: string;
    startDate: string;
    endDate?: string;
}