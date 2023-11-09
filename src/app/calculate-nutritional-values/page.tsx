import { getNutritionalEntities } from "./actions";
import { NutrientsForm } from "./nutrientsForm";

export const revalidate = 0;

async function CalculateNutritionalValues() {
  const nutritionalEntities = await getNutritionalEntities();

  async function onSubmit(formData: FormData) {
    "use server";
    console.log("formData", formData);
  }

  return (
    <div style={{ width: "800px", margin: "auto" }}>
      <h1>Calculate nutritional values</h1>
      <ul>
        {nutritionalEntities.map((nutritionalEntity) => (
          <li key={`${nutritionalEntity.type}-${nutritionalEntity.id}`}>
            {nutritionalEntity.name}
          </li>
        ))}
      </ul>
      <NutrientsForm onSubmit={onSubmit} />
    </div>
  );
}

export default CalculateNutritionalValues;
