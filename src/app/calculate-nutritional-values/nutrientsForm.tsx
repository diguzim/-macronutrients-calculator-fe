"use client";

import { useCallback, useMemo, useState } from "react";
import { TextInput } from "../../components/TextInput";
import { isNumeric } from "../../utils/numeric/isNumeric";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

function numericChangeHandler(
  event: React.ChangeEvent<HTMLInputElement>,
  setter: (value: number) => void
) {
  const value = event.target.value;

  if (value === "") {
    setter(0);
  } else if (isNumeric(value)) {
    setter(Number(value));
  }
}

interface NutritionalEntityWithWeight {
  id: string | null;
  name: string | "";
  weight: number;
}

type NutrientsFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
};

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

  const columns: GridColDef[] = useMemo(() => {
    return [
      {
        field: "name",
        headerName: "Ingrediente",
        editable: true,
        sortable: false,
        flex: 1,
      },
      {
        field: "weight",
        headerName: "Peso(g)",
        type: "number",
        editable: true,
        sortable: false,
        flex: 0.5,
        align: "left",
        headerAlign: "left",
      },
    ];
  }, []);

  const rows = useMemo(() => {
    return nutritionalEntitiesWithWeight.map((nutritionalEntityWithWeight) => {
      return {
        id: nutritionalEntityWithWeight.id,
        name: nutritionalEntityWithWeight.name,
        weight: nutritionalEntityWithWeight.weight,
      };
    });
  }, [nutritionalEntitiesWithWeight]);

  const addNutritionalEntity = useCallback(() => {
    setNutritionalEntitiesWithWeight([
      ...nutritionalEntitiesWithWeight,
      {
        id: `${Math.ceil(Math.random() * 10000000)}`,
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
      <DataGrid columns={columns} rows={rows} disableColumnMenu={true} />
      {/* ToDo: check https://mui.com/x/react-data-grid/row-updates/#the-updaterows-method */}
      {/*       as this is the solution avoid performance bottleneck */}
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
