import { NutritionalEntityRepository } from "../../../@core/domain/nutritional-entity/nutritional-entity.repository";
import { NutritionalEntity } from "../../../@core/domain/nutritional-entity/nutritional-entity.entity";
import { injectable } from "inversify";

const BASE_URL = "http://localhost:3000/nutritional-entities";

@injectable()
export class HttpNutritionalEntityRepository
  implements NutritionalEntityRepository
{
  async findAll(): Promise<NutritionalEntity[]> {
    const res = await fetch(`${BASE_URL}/get-all`);

    if (!res.ok) {
      throw new Error("Error fetching nutritional entities");
    }

    const nutritionalEntitiesGroupedByType = await res.json();

    const nutritionalEntities = [] as NutritionalEntity[];

    nutritionalEntitiesGroupedByType.forEach(
      (nutritionalEntitiesGroup: any) => {
        const type = nutritionalEntitiesGroup.type;
        const values = nutritionalEntitiesGroup.values;
        values.forEach((value: any) => {
          nutritionalEntities.push(
            new NutritionalEntity({
              id: value.id,
              name: value.name,
              type: type,
              protein_ratio: value.protein_ratio,
              fat_ratio: value.fat_ratio,
              carbohydrate_ratio: value.carbohydrate_ratio,
              fiber_ratio: value.fiber_ratio,
              kcal_per_gram: value.kcal_per_gram,
            })
          );
        });
      }
    );

    return nutritionalEntities;
  }
}
