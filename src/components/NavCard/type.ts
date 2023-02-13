export interface INavCardProps {
    items: TItems;
}

export type TItems = {
    title: string;
    link: string;
    description?: string;
    image?: string;
    icon?: string;
}