import { TextInput } from "../../components/TextInput";
import { getNutritionalEntities } from "./actions";

export const revalidate = 0;

async function CalculateNutritionalValues() {
  const nutritionalEntities = await getNutritionalEntities();

  async function onSubmit(formData: FormData) {
    "use server";
    console.log("formData", formData);
  }

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
      <form action={onSubmit}>
        <TextInput name="final-weight" label="Final weight" />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default CalculateNutritionalValues;
