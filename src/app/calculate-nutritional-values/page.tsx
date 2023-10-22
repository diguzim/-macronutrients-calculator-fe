import _nutritionalEntities from "./nutritional-entities";

async function getNutritionalEntities() {
  return Promise.resolve(_nutritionalEntities);
}

async function CalculateNutritionalValues() {
  const nutritionalEntities = await getNutritionalEntities();
  
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
  )
}

export default CalculateNutritionalValues;