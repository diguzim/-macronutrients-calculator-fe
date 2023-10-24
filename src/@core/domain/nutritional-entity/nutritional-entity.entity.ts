import { NutritionalEntityType } from "../../../utils/enums/nutritional-entity-type.enum";

export type NutritionalEntityProps = {
  id?: string;
  name?: string;
  type?: NutritionalEntityType;
  fat_ratio?: number;
  carbohydrate_ratio?: number;
  fiber_ratio?: number;
  kcal_per_gram?: number;
};

export class NutritionalEntity {
  public id?: string;
  public name?: string;
  public type?: NutritionalEntityType;
  public protein_ratio?: number;
  public fat_ratio?: number;
  public carbohydrate_ratio?: number;
  public fiber_ratio?: number;
  public kcal_per_gram?: number;

  constructor(props: NutritionalEntityProps) {
    Object.assign(this, props);
  }
}
