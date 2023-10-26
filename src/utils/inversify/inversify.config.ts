import "reflect-metadata";
import { Container } from "inversify";
import { NutritionalEntityRepository } from "../../@core/domain/nutritional-entity/nutritional-entity.repository";
import { TYPES } from "./types";
import { InMemoryNutritionalEntityRepository } from "../../infra/repositories/in-memory/in-memory-nutritional-entity-repository";

const container = new Container();
container
  .bind<NutritionalEntityRepository>(TYPES.NutritionalEntityRepository)
  .to(InMemoryNutritionalEntityRepository);

export { container };
