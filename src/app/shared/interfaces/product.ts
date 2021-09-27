import { Attribute } from './meta';

export interface Product {
  id: number;
  description: string;
  businessAccount: number;
  productTemplate?: null;
  process?: null;
  productAttributeValues?: ProductAttributeValuesEntity[] | null;
}

export interface ProductAttributeValuesEntity {
  id: number;
  attribute: Attribute;
  attributeValue: string;
  userConversionUom: string;
}

export interface ProductPackageSummary {
  id: number;
  package: string;
  size: string;
  itemCount: number;
  itemCountDescription: string;
  uomRelation: string;
  weight: string;
  amount: number;
  volumn: number;
  packageClass: string;
}

export interface ProductCostSummary {
  id: number;
  subProduct: string;
  size: string;
  thickness: number;
  thicknessDescription: string;
  measurement: string;
  percentUsedGsm: number;
  weight: number;
  percentUsedWeight: number;
  product: string;
  conversion: string;
  cost: string;
}
