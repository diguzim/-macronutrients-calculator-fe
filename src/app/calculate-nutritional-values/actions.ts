import { ListAllNutritionalEntitiesUseCaseFactory } from "../../utils/factories/list-all-nutritional-entities-use-case.factory";

export async function getNutritionalEntities() {
  const listAllNutritionalEntitiesUseCase =
    ListAllNutritionalEntitiesUseCaseFactory.create();

  return await listAllNutritionalEntitiesUseCase.execute();
}
