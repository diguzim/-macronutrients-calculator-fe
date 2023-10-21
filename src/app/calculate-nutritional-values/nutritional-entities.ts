import { NutritionalEntityType } from "../../utils/enums/nutritional-entity-type.enum";

const nutritionalEntities: {
  id: string;
  type: NutritionalEntityType;
  name: string;
}[] = [
  {
    id: "1",
    type: NutritionalEntityType.RawIngredient,
    name: "Olive Oil",
  },
  {
    id: "2",
    type: NutritionalEntityType.RawIngredient,
    name: "Raw Rice",
  },
  {
    id: "1",
    type: NutritionalEntityType.CookedDish,
    name: "Cooked rice",
  },
  {
    id: "2",
    type: NutritionalEntityType.CookedDish,
    name: "Cooked lentils",
  },
];

export default nutritionalEntities;
