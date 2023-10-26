import { NutritionalEntityRepository } from "../../@core/domain/nutritional-entity/nutritional-entity.repository";
import { ListAllNutritionalEntitiesUseCase } from "../../@core/use-cases/list-all-nutritional-entities.use-case";
import { container } from "../inversify/inversify.config";
import { TYPES } from "../inversify/types";

export const ListAllNutritionalEntitiesUseCaseFactory = {
  create: () => {
    const nutritionalEntityRepository =
      container.get<NutritionalEntityRepository>(
        TYPES.NutritionalEntityRepository
      );

    return new ListAllNutritionalEntitiesUseCase(nutritionalEntityRepository);
  },
};
