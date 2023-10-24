import { NutritionalEntity } from "../../@core/domain/nutritional-entity/nutritional-entity.entity";
import { NutritionalEntityType } from "../enums/nutritional-entity-type.enum";

export const nutritionalEntity1 = new NutritionalEntity({
  id: "1",
  name: "Example Raw Ingredient",
  type: NutritionalEntityType.RawIngredient,
  protein_ratio: 1,
  fat_ratio: 1,
  carbohydrate_ratio: 1,
  fiber_ratio: 1,
  kcal_per_gram: 1,
});

export const nutritionalEntity2 = new NutritionalEntity({
  id: "1",
  name: "Example Cooked Dish",
  type: NutritionalEntityType.CookedDish,
  protein_ratio: 1,
  fat_ratio: 1,
  carbohydrate_ratio: 1,
  fiber_ratio: 1,
  kcal_per_gram: 1,
});
