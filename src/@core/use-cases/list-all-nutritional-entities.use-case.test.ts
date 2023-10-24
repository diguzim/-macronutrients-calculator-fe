import { NutritionalEntityType } from "../../utils/enums/nutritional-entity-type.enum";
import { NutritionalEntity } from "../domain/nutritional-entity/nutritional-entity.entity";
import { NutritionalEntityRepository } from "../domain/nutritional-entity/nutritional-entity.repository";
import { ListAllNutritionalEntitiesUseCase } from "./list-all-nutritional-entities.use-case";

describe("ListAllNutritionalEntitiesUseCase", () => {
  describe("execute", () => {
    it("should return all nutritional entities", async () => {
      const nutritionalEntityRepositoryMock: NutritionalEntityRepository = {
        findAll: jest.fn().mockResolvedValue([
          new NutritionalEntity({
            id: "1",
            name: "Nutritional Entity 1",
            type: NutritionalEntityType.RawIngredient,
            protein_ratio: 0.1,
            fat_ratio: 0.2,
            carbohydrate_ratio: 0.3,
            fiber_ratio: 0.4,
            kcal_per_gram: 0.5,
          }),
          new NutritionalEntity({
            id: "2",
            name: "Nutritional Entity 2",
            type: NutritionalEntityType.CookedDish,
            protein_ratio: 0.6,
            fat_ratio: 0.7,
            carbohydrate_ratio: 0.8,
            fiber_ratio: 0.9,
            kcal_per_gram: 1.0,
          }),
        ]),
      };

      const listAllNutritionalEntitiesUseCase =
        new ListAllNutritionalEntitiesUseCase(nutritionalEntityRepositoryMock);

      const nutritionalEntities =
        await listAllNutritionalEntitiesUseCase.execute();

      expect(nutritionalEntities).toEqual([
        new NutritionalEntity({
          id: "1",
          name: "Nutritional Entity 1",
          type: NutritionalEntityType.RawIngredient,
          protein_ratio: 0.1,
          fat_ratio: 0.2,
          carbohydrate_ratio: 0.3,
          fiber_ratio: 0.4,
          kcal_per_gram: 0.5,
        }),
        new NutritionalEntity({
          id: "2",
          name: "Nutritional Entity 2",
          type: NutritionalEntityType.CookedDish,
          protein_ratio: 0.6,
          fat_ratio: 0.7,
          carbohydrate_ratio: 0.8,
          fiber_ratio: 0.9,
          kcal_per_gram: 1.0,
        }),
      ]);
    });
  });
});
