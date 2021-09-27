import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityResponse } from '../interfaces/entity';
import { ProductTemplate } from '../interfaces/product-template';

const PRODUCT_TEMPLATES: EntityResponse<ProductTemplate> = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      description: 'ProductTemplate',
      productType: null,
      productTemplateAttributes: [
        {
          id: 1,
          attribute: 1,
        },
        {
          id: 2,
          attribute: 2,
        },
        {
          id: 3,
          attribute: 3,
        },
      ],
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class ProductTemplateService {
  /**
   * Gets product types from API
   * @returns List of Product Types
   */
  getProductTemplates$(): Observable<ProductTemplate[] | undefined> {
    return of(PRODUCT_TEMPLATES).pipe(
      map((items) => (items.results ? items.results : undefined))
    );
  }
}
