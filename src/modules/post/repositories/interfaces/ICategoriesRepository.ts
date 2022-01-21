import { ICreateCategoryDTO } from '../../dto/IcreateCategory.dto';
import { CategoriesDocument } from '../../infra/mongo/mongoose/schemas/categories.schema';

export interface ICategoriesRepository {
    createCategory({
        name,
        description,
    }: ICreateCategoryDTO): Promise<CategoriesDocument>;

    findOneByName(name: string): Promise<CategoriesDocument>;
}
