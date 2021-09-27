import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityResponse } from '../interfaces/entity';
import {
  Product,
  ProductCostSummary,
  ProductPackageSummary,
} from '../interfaces/product';

const PRODUCTS: EntityResponse<Product> = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      description: 'Product Without Process',
      businessAccount: 2,
      productTemplate: null,
      process: null,
      productAttributeValues: [
        {
          id: 1,
          attribute: {
            id: 1,
            description: 'BodyWidth',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          attributeValue: '21',
          userConversionUom: 'mm',
        },
        {
          id: 2,
          attribute: {
            id: 2,
            description: 'BodyLength',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          attributeValue: '22',
          userConversionUom: 'mm',
        },
        {
          id: 3,
          attribute: {
            id: 3,
            description: 'BodySurfaceArea',
            systemUom: {
              id: 6,
              description: 'm2',
            },
          },
          attributeValue: '23',
          userConversionUom: 'm2',
        },
        {
          id: 4,
          attribute: {
            id: 4,
            description: 'BodyWeight',
            systemUom: {
              id: 7,
              description: 'gm',
            },
          },
          attributeValue: '24',
          userConversionUom: 'gm',
        },
        {
          id: 5,
          attribute: {
            id: 5,
            description: 'PatchWidth',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          attributeValue: '25',
          userConversionUom: 'mm',
        },
        {
          id: 6,
          attribute: {
            id: 6,
            description: 'PatchLength',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          attributeValue: '26',
          userConversionUom: 'mm',
        },
      ],
    },
  ],
};

const PRODUCT: Product = {
  id: 1,
  description: 'Product Without Process',
  businessAccount: 2,
  productTemplate: null,
  process: null,
  productAttributeValues: [
    {
      id: 1,
      attribute: {
        id: 1,
        description: 'BodyWidth',
        systemUom: {
          id: 1,
          description: 'mm',
        },
      },
      attributeValue: '21',
      userConversionUom: 'mm',
    },
    {
      id: 2,
      attribute: {
        id: 2,
        description: 'BodyLength',
        systemUom: {
          id: 1,
          description: 'mm',
        },
      },
      attributeValue: '22',
      userConversionUom: 'mm',
    },
    {
      id: 3,
      attribute: {
        id: 3,
        description: 'BodySurfaceArea',
        systemUom: {
          id: 6,
          description: 'm2',
        },
      },
      attributeValue: '23',
      userConversionUom: 'm2',
    },
    {
      id: 4,
      attribute: {
        id: 4,
        description: 'BodyWeight',
        systemUom: {
          id: 7,
          description: 'gm',
        },
      },
      attributeValue: '24',
      userConversionUom: 'gm',
    },
    {
      id: 5,
      attribute: {
        id: 5,
        description: 'PatchWidth',
        systemUom: {
          id: 1,
          description: 'mm',
        },
      },
      attributeValue: '25',
      userConversionUom: 'mm',
    },
    {
      id: 6,
      attribute: {
        id: 6,
        description: 'PatchLength',
        systemUom: {
          id: 1,
          description: 'mm',
        },
      },
      attributeValue: '26',
      userConversionUom: 'mm',
    },
  ],
};

const PRODUCT_PACKAGE_SUMMARY: ProductPackageSummary[] = [
  {
    id: 0,
    package: 'Adstar',
    size: '4*5*6',
    itemCount: 1,
    itemCountDescription: '1 Bag',
    uomRelation: '2 Bags/Box',
    weight: '78gm',
    amount: 233,
    volumn: 0,
    packageClass: 'NA',
  },
  {
    id: 1,
    package: 'Box',
    size: '4*5*6',
    itemCount: 1,
    itemCountDescription: '1 Bag',
    uomRelation: '2 Bags/Box',
    weight: '78gm',
    amount: 233,
    volumn: 0,
    packageClass: 'NA',
  },
  {
    id: 2,
    package: 'Pallet',
    size: '4*5*6',
    itemCount: 1,
    itemCountDescription: '1 Bag',
    uomRelation: '2 Bags/Box',
    weight: '78gm',
    amount: 233,
    volumn: 0,
    packageClass: 'NA',
  },
];

const PRODUCT_COST_SUMMARY: ProductCostSummary[] = [
  {
    id: 0,
    subProduct: 'Woven Fabric',
    size: '4*5*6',
    thickness: 1,
    thicknessDescription: '1 Bag',
    measurement: '',
    percentUsedGsm: 77,
    weight: 0,
    percentUsedWeight: 78,
    product: 'NA',
    conversion: 'NA',
    cost: '',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /**
   * Gets product types from API
   * @returns List of Product Types
   */
  getProducts$(): Observable<Product[] | undefined> {
    return of(PRODUCTS).pipe(
      map((items) => (items.results ? items.results : undefined))
    );
  }

  /**
   * Gets product by id from API
   * @param id Id of Product
   * @returns Product
   */
  getProductById$(id: number): Observable<Product> {
    return of(PRODUCT);
  }

  /**
   * Gets product package summary by id from API
   * @param id Id of Product
   * @returns Product Package Summary
   */
  getProductPackageSummary$(id: number): Observable<ProductPackageSummary[]> {
    return of(PRODUCT_PACKAGE_SUMMARY);
  }

  /**
   * Gets product cost summary by id from API
   * @param id Id of Product
   * @returns Product Cost Summary
   */
  getProductCostSummary$(id: number): Observable<ProductCostSummary[]> {
    return of(PRODUCT_COST_SUMMARY);
  }
}
