import { NutritionalEntity } from "./nutritional-entity.entity";

export abstract class NutritionalEntityRepository {
  abstract findAll(): Promise<NutritionalEntity[]>;
}
