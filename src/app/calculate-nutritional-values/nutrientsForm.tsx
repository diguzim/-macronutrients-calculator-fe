"use client";

import { use, useCallback, useState } from "react";
import { TextInput } from "../../components/TextInput";
import { NutritionalEntity } from "../../@core/domain/nutritional-entity/nutritional-entity.entity";

type NutrientsFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

function isStringNumeric(str: string) {
  return /^\d+$/.test(str);
}

function numericChangeHandler(
  event: React.ChangeEvent<HTMLInputElement>,
  setter: (value: number) => void
) {
  const value = event.target.value;

  if (value === "") {
    setter(0);
  } else if (isStringNumeric(value)) {
    setter(Number(value));
  }
}

interface NutritionalEntityWithWeight {
  id: string | null;
  name: string | "";
  weight: number;
}

export function NutrientsForm({ onSubmit }: NutrientsFormProps) {
  const [nutritionalEntitiesWithWeight, setNutritionalEntitiesWithWeight] =
    useState<NutritionalEntityWithWeight[]>([]);
  const [finalWeight, setFinalWeight] = useState(0);

  const handleFinalWeightChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      numericChangeHandler(event, setFinalWeight);
    },
    []
  );

  const handleNutritionalEntityChange = useCallback(
    (
      entryPosition: number,
      entryField: "id" | "name" | "weight",
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const value = event.target.value;

      setNutritionalEntitiesWithWeight((prev) =>
        prev.map((nutritionalEntityWithWeight, index) => {
          if (index === entryPosition) {
            return {
              ...nutritionalEntityWithWeight,
              [entryField]: value,
            };
          }

          return nutritionalEntityWithWeight;
        })
      );
    },
    []
  );

  const addNutritionalEntity = useCallback(() => {
    setNutritionalEntitiesWithWeight([
      ...nutritionalEntitiesWithWeight,
      {
        id: "",
        name: "",
        weight: 0,
      },
    ]);
  }, [nutritionalEntitiesWithWeight]);

  return (
    <form
      action={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {nutritionalEntitiesWithWeight.map(
        (nutritionalEntityWithWeight, index) => {
          const { name, weight } = nutritionalEntityWithWeight;

          function handleNutritionalEntityNameChange(
            event: React.ChangeEvent<HTMLInputElement>
          ) {
            handleNutritionalEntityChange(index, "name", event);
          }

          function handleNutritionalEntityWeightChange(
            event: React.ChangeEvent<HTMLInputElement>
          ) {
            handleNutritionalEntityChange(index, "weight", event);
          }

          return (
            <div
              key={`${index}`}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <span
                style={{
                  marginRight: "0.5rem",
                  alignSelf: "center",
                }}
              >
                #{index + 1}
              </span>
              <TextInput
                id="nutritional-entity-name"
                label="Nutritional entity name"
                value={name}
                onChange={handleNutritionalEntityNameChange}
                style={{
                  flex: 3,
                  marginRight: "0.5rem",
                }}
              />
              <TextInput
                id="nutritional-entity-weight"
                label="Nutritional entity weight"
                value={weight}
                onChange={handleNutritionalEntityWeightChange}
                style={{
                  flex: 1,
                }}
              />
            </div>
          );
        }
      )}
      <button type="button" onClick={addNutritionalEntity}>
        Add one more nutritional entity
      </button>
      <TextInput
        id="final-weight"
        label="Final weight"
        value={finalWeight}
        onChange={handleFinalWeightChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
