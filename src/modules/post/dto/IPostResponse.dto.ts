export interface IPostResponseDTO {
    _id: any;
    title: string;
    category: {
        _id: any;
        name: string;
        description: string;
    };

    author: {
        _id: string;
        name: string;
        email: string;
    };

    createdAt: Date;
    updatedAt: Date;
}
