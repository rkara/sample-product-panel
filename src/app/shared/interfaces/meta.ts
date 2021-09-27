export interface ProductType {
  id: number;
  description: string;
}

export interface AttributeGroup {
  id: number;
  description: string;
  attributesGroupAttributes?: (AttributesGroupAttributesEntity)[] | null;
}

export interface AttributesGroupAttributesEntity {
  attribute: Attribute;
  required: boolean;
}

export interface Attribute {
  id: number;
  description: string;
  systemUom: AvailableUomsEntityOrSystemUom;
  availableUoms?: AvailableUomsEntityOrSystemUom[] | null;
}

export interface AvailableUomsEntityOrSystemUom {
  id: number;
  description: string;
}

export interface ConversionType {
  id: number;
  description: string;
}
