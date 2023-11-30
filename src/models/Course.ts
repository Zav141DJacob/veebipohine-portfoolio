
type Provider = {
    name: string;
    url: string;
}

export type Course = {
    name: string;
    provider: Provider;
    startDate: string;
    endDate?: string;
}