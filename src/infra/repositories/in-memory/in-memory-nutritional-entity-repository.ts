import { NutritionalEntityRepository } from "../../../@core/domain/nutritional-entity/nutritional-entity.repository";
import { NutritionalEntity } from "../../../@core/domain/nutritional-entity/nutritional-entity.entity";
import {
  nutritionalEntity1,
  nutritionalEntity2,
} from "../../../utils/fake_data/fake-nutritional-entity";

export class InMemoryNutritionalEntityRepository
  implements NutritionalEntityRepository
{
  private nutritionalEntities: NutritionalEntity[] = [
    nutritionalEntity1,
    nutritionalEntity2,
  ];

  findAll(): Promise<NutritionalEntity[]> {
    return Promise.resolve(this.nutritionalEntities);
  }
}
