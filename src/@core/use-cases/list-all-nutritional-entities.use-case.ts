import { NutritionalEntity } from "../domain/nutritional-entity/nutritional-entity.entity";
import { NutritionalEntityRepository } from "../domain/nutritional-entity/nutritional-entity.repository";

export class ListAllNutritionalEntitiesUseCase {
  constructor(
    private readonly nutritionalEntityRepository: NutritionalEntityRepository
  ) {}

  async execute(): Promise<NutritionalEntity[]> {
    return await this.nutritionalEntityRepository.findAll();
  }
}
