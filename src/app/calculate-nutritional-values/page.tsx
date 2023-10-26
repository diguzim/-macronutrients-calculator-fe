import { ListAllNutritionalEntitiesUseCaseFactory } from "../../utils/factories/list-all-nutritional-entities-use-case.factory";

async function CalculateNutritionalValues() {
  const listAllNutritionalEntitiesUseCase =
    ListAllNutritionalEntitiesUseCaseFactory.create();

  const nutritionalEntities = await listAllNutritionalEntitiesUseCase.execute();

  return (
    <>
      <h1>Calculate nutritional values</h1>
      <ul>
        {nutritionalEntities.map((nutritionalEntity) => (
          <li key={`${nutritionalEntity.type}-${nutritionalEntity.id}`}>
            {nutritionalEntity.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CalculateNutritionalValues;
