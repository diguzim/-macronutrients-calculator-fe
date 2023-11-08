import "reflect-metadata";
import { Container } from "inversify";
import { NutritionalEntityRepository } from "../../@core/domain/nutritional-entity/nutritional-entity.repository";
import { TYPES } from "./types";
import { HttpNutritionalEntityRepository } from "../../infra/repositories/http/http-nutritional-entity-repository";

// Uncomment this line to use the in-memory repository
// const nutritionalEntityRepository = InMemoryNutritionalEntityRepository;

// Uncomment this line to use the http repository
const nutritionalEntityRepository = HttpNutritionalEntityRepository;

const container = new Container();
container
  .bind<NutritionalEntityRepository>(TYPES.NutritionalEntityRepository)
  .to(nutritionalEntityRepository);

export { container };
