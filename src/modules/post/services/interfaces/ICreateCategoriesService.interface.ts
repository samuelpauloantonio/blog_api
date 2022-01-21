import { ICreateCategoryDTO } from '../../dto/ICreateCategory.dto';
import { CategoriesDocument } from '../../infra/mongo/mongoose/schemas/categories.schema';

export interface ICreateCategoryService {
    execute({
        name,
        description,
    }: ICreateCategoryDTO): Promise<CategoriesDocument>;
}
