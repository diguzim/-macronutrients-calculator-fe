"use client"
import { useContext } from "react";
import _nutritionalEntities from "./nutritional-entities";
import { DependencyInjectorContext } from "../../contexts/dependency-injector.provider";

// async function getNutritionalEntities() {
//   return Promise.resolve(_nutritionalEntities);
// }

function CalculateNutritionalValues() {
  const { listAllNutritionalEntitiesUseCase } = useContext(DependencyInjectorContext);
  // const nutritionalEntities = await getNutritionalEntities();

  console.log('listAllNutritionalEntitiesUseCase', listAllNutritionalEntitiesUseCase);
  
  return (
    <>
      <h1>Calculate nutritional values</h1>
      <ul>
        {/* {nutritionalEntities.map((nutritionalEntity) => (
          <li key={`${nutritionalEntity.type}-${nutritionalEntity.id}`}>
            {nutritionalEntity.name}
          </li>
        ))} */}
      </ul>
    </>
  )
}

export default CalculateNutritionalValues;