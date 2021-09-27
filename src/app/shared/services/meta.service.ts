import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntityResponse } from '../interfaces/entity';
import {
  Attribute,
  AttributeGroup,
  ConversionType,
  ProductType,
} from '../interfaces/meta';

const PRODUCT_TYPES: EntityResponse<ProductType> = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      description: 'Bags',
    },
    {
      id: 2,
      description: 'Boxes',
    },
    {
      id: 3,
      description: 'Food Products',
    },
  ],
};

const ATTRIBUTE_GROUPS: EntityResponse<AttributeGroup> = {
  count: 3,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      description: 'AdStar',
      attributesGroupAttributes: [
        {
          attribute: {
            id: 13,
            description: 'Width',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 14,
            description: 'Length',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 16,
            description: 'Bottom',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 10,
            description: 'ValveLength',
            systemUom: {
              id: 1,
              description: 'mm',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 15,
            description: 'Weight',
            systemUom: {
              id: 7,
              description: 'gm',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 18,
            description: 'GSM',
            systemUom: {
              id: 12,
              description: 'gm/m2',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 17,
            description: 'Cost',
            systemUom: {
              id: 13,
              description: 'USD',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 19,
            description: 'SurfaceArea',
            systemUom: {
              id: 6,
              description: 'm2',
            },
          },
          required: false,
        },
      ],
    },
    {
      id: 2,
      description: 'MetricTonnePercent',
      attributesGroupAttributes: [
        {
          attribute: {
            id: 17,
            description: 'Cost',
            systemUom: {
              id: 13,
              description: 'USD',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 23,
            description: 'PercentUsed',
            systemUom: {
              id: 14,
              description: 'count',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 22,
            description: 'Density',
            systemUom: {
              id: 15,
              description: 'gm/cm3',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 24,
            description: 'EffectiveDensity',
            systemUom: {
              id: 15,
              description: 'gm/cm3',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 25,
            description: 'EffectiveCost',
            systemUom: {
              id: 13,
              description: 'USD',
            },
          },
          required: false,
        },
        {
          attribute: {
            id: 26,
            description: 'PercentWaste',
            systemUom: {
              id: 14,
              description: 'count',
            },
          },
          required: false,
        },
      ],
    },
    {
      id: 3,
      description: 'CostPerWeight',
      attributesGroupAttributes: [
        {
          attribute: {
            id: 15,
            description: 'Weight',
            systemUom: {
              id: 7,
              description: 'gm',
            },
          },
          required: true,
        },
        {
          attribute: {
            id: 17,
            description: 'Cost',
            systemUom: {
              id: 13,
              description: 'USD',
            },
          },
          required: true,
        },
        {
          attribute: {
            id: 18,
            description: 'GSM',
            systemUom: {
              id: 12,
              description: 'gm/m2',
            },
          },
          required: true,
        },
        {
          attribute: {
            id: 22,
            description: 'Density',
            systemUom: {
              id: 15,
              description: 'gm/cm3',
            },
          },
          required: true,
        },
      ],
    },
  ],
};

const ATTRIBUTES: EntityResponse<Attribute> = {
  count: 26,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      description: 'BodyWidth',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 2,
      description: 'BodyLength',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 3,
      description: 'BodySurfaceArea',
      systemUom: {
        id: 6,
        description: 'm2',
      },
      availableUoms: [
        {
          id: 4,
          description: 'mm2',
        },
        {
          id: 5,
          description: 'cm2',
        },
        {
          id: 6,
          description: 'm2',
        },
      ],
    },
    {
      id: 4,
      description: 'BodyWeight',
      systemUom: {
        id: 7,
        description: 'gm',
      },
      availableUoms: [
        {
          id: 7,
          description: 'gm',
        },
        {
          id: 8,
          description: 'kg',
        },
        {
          id: 9,
          description: 'mt',
        },
      ],
    },
    {
      id: 5,
      description: 'PatchWidth',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 6,
      description: 'PatchLength',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 7,
      description: 'PatchSurfaceArea',
      systemUom: {
        id: 6,
        description: 'm2',
      },
      availableUoms: [
        {
          id: 4,
          description: 'mm2',
        },
        {
          id: 5,
          description: 'cm2',
        },
        {
          id: 6,
          description: 'm2',
        },
      ],
    },
    {
      id: 8,
      description: 'PatchWeight',
      systemUom: {
        id: 7,
        description: 'gm',
      },
      availableUoms: [
        {
          id: 7,
          description: 'gm',
        },
        {
          id: 8,
          description: 'kg',
        },
        {
          id: 9,
          description: 'mt',
        },
      ],
    },
    {
      id: 9,
      description: 'ValveWidth',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 10,
      description: 'ValveLength',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 11,
      description: 'ValveSurfaceArea',
      systemUom: {
        id: 6,
        description: 'm2',
      },
      availableUoms: [
        {
          id: 4,
          description: 'mm2',
        },
        {
          id: 5,
          description: 'cm2',
        },
        {
          id: 6,
          description: 'm2',
        },
      ],
    },
    {
      id: 12,
      description: 'ValveWeight',
      systemUom: {
        id: 7,
        description: 'gm',
      },
      availableUoms: [
        {
          id: 7,
          description: 'gm',
        },
        {
          id: 8,
          description: 'kg',
        },
        {
          id: 9,
          description: 'mt',
        },
      ],
    },
    {
      id: 13,
      description: 'Width',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 14,
      description: 'Length',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 15,
      description: 'Weight',
      systemUom: {
        id: 7,
        description: 'gm',
      },
      availableUoms: [
        {
          id: 7,
          description: 'gm',
        },
        {
          id: 8,
          description: 'kg',
        },
        {
          id: 9,
          description: 'mt',
        },
      ],
    },
    {
      id: 16,
      description: 'Bottom',
      systemUom: {
        id: 1,
        description: 'mm',
      },
      availableUoms: [
        {
          id: 1,
          description: 'mm',
        },
        {
          id: 2,
          description: 'cm',
        },
        {
          id: 3,
          description: 'm',
        },
      ],
    },
    {
      id: 17,
      description: 'Cost',
      systemUom: {
        id: 13,
        description: 'USD',
      },
      availableUoms: [
        {
          id: 13,
          description: 'USD',
        },
      ],
    },
    {
      id: 18,
      description: 'GSM',
      systemUom: {
        id: 12,
        description: 'gm/m2',
      },
      availableUoms: [
        {
          id: 10,
          description: 'gm/mm2',
        },
        {
          id: 11,
          description: 'gm/cm2',
        },
        {
          id: 12,
          description: 'gm/m2',
        },
      ],
    },
    {
      id: 19,
      description: 'SurfaceArea',
      systemUom: {
        id: 6,
        description: 'm2',
      },
      availableUoms: [
        {
          id: 4,
          description: 'mm2',
        },
        {
          id: 5,
          description: 'cm2',
        },
        {
          id: 6,
          description: 'm2',
        },
      ],
    },
    {
      id: 20,
      description: 'NumberOfProducts',
      systemUom: {
        id: 14,
        description: 'count',
      },
      availableUoms: [
        {
          id: 14,
          description: 'count',
        },
      ],
    },
    {
      id: 21,
      description: 'Thickness',
      systemUom: {
        id: 16,
        description: 'micron',
      },
      availableUoms: [],
    },
    {
      id: 22,
      description: 'Density',
      systemUom: {
        id: 15,
        description: 'gm/cm3',
      },
      availableUoms: [
        {
          id: 15,
          description: 'gm/cm3',
        },
      ],
    },
    {
      id: 23,
      description: 'PercentUsed',
      systemUom: {
        id: 14,
        description: 'count',
      },
      availableUoms: [
        {
          id: 14,
          description: 'count',
        },
      ],
    },
    {
      id: 24,
      description: 'AverageDensity',
      systemUom: {
        id: 15,
        description: 'gm/cm3',
      },
      availableUoms: [
        {
          id: 15,
          description: 'gm/cm3',
        },
      ],
    },
    {
      id: 25,
      description: 'CostAddOn',
      systemUom: {
        id: 13,
        description: 'USD',
      },
      availableUoms: [
        {
          id: 13,
          description: 'USD',
        },
      ],
    },
    {
      id: 26,
      description: 'PercentWaste',
      systemUom: {
        id: 14,
        description: 'count',
      },
      availableUoms: [
        {
          id: 14,
          description: 'count',
        },
      ],
    },
  ],
};

const CONVERSION_COST: EntityResponse<ConversionType> = {
  count: 4,
  next: null,
  previous: null,
  results: [
    {
      id: 1,
      description: 'Labor',
    },
    {
      id: 2,
      description: 'Electric',
    },
    {
      id: 3,
      description: 'CookCharges',
    },
    {
      id: 4,
      description: 'Gas',
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  /**
   * Gets product types from API
   * @returns List of Product Types
   */
  getProductTypes$(): Observable<ProductType[] | undefined> {
    return of(PRODUCT_TYPES).pipe(
      map((items) => (items.results ? items.results : undefined))
    );
  }

  /**
   * Gets Attribute Groups from API
   * @returns List of Attribute Groups
   */
  getAttributeGroups$(): Observable<AttributeGroup[] | undefined> {
    return of(ATTRIBUTE_GROUPS).pipe(
      map((items) => (items.results ? items.results : undefined))
    );
  }

  /**
   * Gets Attributes from API
   * @returns List of Attributes
   */
  getAttributes$(): Observable<Attribute[] | undefined> {
    return of(ATTRIBUTES).pipe(
      map((items) => (items.results ? items.results : undefined))
    );
  }

  /**
   * Gets Conversion Types from API
   * @returns List of Conversion Types
   */
  getConversionTypes$(): Observable<ConversionType[] | undefined> {
    return of(CONVERSION_COST).pipe(
      map((items) => (items.results ? items.results : undefined))
    );
  }
}
