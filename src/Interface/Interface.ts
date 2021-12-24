
export interface IColorLink{
    color: string;
}

export interface ITads{
    tad: string;
}

export interface IFormTask{
    title: string;
    description: string;
    image: string;
    tads?: ITads[];
}