export interface ProductTemplate {
  id: number;
  description: string;
  productType?: null;
  productTemplateAttributes?: ProductTemplateAttributesEntity[] | null;
}

export interface ProductTemplateAttributesEntity {
  id: number;
  attribute: number;
}
