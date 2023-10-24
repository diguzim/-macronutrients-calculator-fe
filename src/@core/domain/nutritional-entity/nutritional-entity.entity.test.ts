import { NutritionalEntityType } from "../../../utils/enums/nutritional-entity-type.enum";
import { NutritionalEntity } from "./nutritional-entity.entity";

describe("NutritionalEntity", () => {
  it("should create a NutritionalEntity instance", () => {
    const nutritionalEntity = new NutritionalEntity({
      id: "1",
      name: "Nutritional Entity",
      type: NutritionalEntityType.RawIngredient,
      protein_ratio: 0.1,
      fat_ratio: 0.2,
      carbohydrate_ratio: 0.3,
      fiber_ratio: 0.4,
      kcal_per_gram: 0.5,
    });

    expect(nutritionalEntity).toBeInstanceOf(NutritionalEntity);
    expect(nutritionalEntity).toEqual({
      id: "1",
      name: "Nutritional Entity",
      type: NutritionalEntityType.RawIngredient,
      protein_ratio: 0.1,
      fat_ratio: 0.2,
      carbohydrate_ratio: 0.3,
      fiber_ratio: 0.4,
      kcal_per_gram: 0.5,
    });
  });
});
