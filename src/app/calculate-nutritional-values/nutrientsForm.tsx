"use client";

import { useState } from "react";
import { TextInput } from "../../components/TextInput";

type NutrientsFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

export function NutrientsForm({ onSubmit }: NutrientsFormProps) {
  const [finalWeight, setFinalWeight] = useState(0);

  function handleFinalWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setFinalWeight(Number(value));
  }

  return (
    <form
      action={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TextInput
        name="final-weight"
        label="Final weight"
        value={finalWeight}
        onChange={handleFinalWeightChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
