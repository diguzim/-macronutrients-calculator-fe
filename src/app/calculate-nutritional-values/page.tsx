import { useContext, useEffect, useState } from "react";
import { DependencyInjectorContext } from "../../contexts/dependency-injector.provider";
import { NutritionalEntity } from "../../@core/domain/nutritional-entity/nutritional-entity.entity";

async function CalculateNutritionalValues() {
  // const { listAllNutritionalEntitiesUseCase } = useContext(DependencyInjectorContext);

  // const [nutritionalEntities, setNutritionalEntities] = useState([] as NutritionalEntity[]);

  // useEffect(() => {
  //   const fetchNutritionalEntities = async () => {
  //     const listAllNutritionalEntitiesUseCaseResult = await listAllNutritionalEntitiesUseCase.execute();
  //     setNutritionalEntities(listAllNutritionalEntitiesUseCaseResult);
  //   };

  //   fetchNutritionalEntities();
  // });

  return (
    <>
      <h1>Calculate nutritional values</h1>
      {/* <ul>
        {nutritionalEntities.map((nutritionalEntity) => (
          <li key={`${nutritionalEntity.type}-${nutritionalEntity.id}`}>
            {nutritionalEntity.name}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default CalculateNutritionalValues;
