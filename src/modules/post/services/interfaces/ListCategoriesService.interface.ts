import { CategoriesDocument } from '../../infra/mongo/mongoose/schemas/categories.schema';

export interface IListCategoryService {
    execute(): Promise<CategoriesDocument[]>;
}
