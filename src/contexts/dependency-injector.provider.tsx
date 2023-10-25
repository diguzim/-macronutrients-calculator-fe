"use client"
import { createContext, PropsWithChildren } from "react";
import { NutritionalEntityRepository } from "../@core/domain/nutritional-entity/nutritional-entity.repository";
import { InMemoryNutritionalEntityRepository } from "../infra/repositories/in-memory/in-memory-nutritional-entity-repository";
import { ListAllNutritionalEntitiesUseCase } from "../@core/use-cases/list-all-nutritional-entities.use-case";

export type DependencyInjectorContextType = {
  nutritionalEntityRepository: NutritionalEntityRepository;
  listAllNutritionalEntitiesUseCase: ListAllNutritionalEntitiesUseCase;
};

const nutritionalEntityRepository = new InMemoryNutritionalEntityRepository();

const defaultContext: DependencyInjectorContextType = {
  nutritionalEntityRepository: nutritionalEntityRepository,
  listAllNutritionalEntitiesUseCase: new ListAllNutritionalEntitiesUseCase(
    nutritionalEntityRepository
  ),
};

export const DependencyInjectorContext = createContext(defaultContext);

export const DependencyInjectionProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <DependencyInjectorContext.Provider value={defaultContext}>
      {children}
    </DependencyInjectorContext.Provider>
  );
};
