export interface AuthorResponseDTO {
    _id: string;
    name: string;
    email: string;
    posts?: any;
    createdAt: Date;
    updatedAt: Date;
}
