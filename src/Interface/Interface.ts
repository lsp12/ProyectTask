
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
    type: string;
    tads?: ITads[];
    public: boolean;
}

export interface IFormAuthor extends IFormTask{
    author?: string;
    id?: string;
    createdAT?: string;
}

export interface IAWS{
    data:{
        body:{
            res:{
                Items:IFormAuthor[],
                count: number;
            }
        }
    }
}

export interface IcardsProps{
    items: IFormAuthor;
}