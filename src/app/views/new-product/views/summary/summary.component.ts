import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Attribute,
  ProductType,
  AttributeGroup,
  ConversionType,
} from 'src/app/shared/interfaces/meta';
import { ProductTemplate } from 'src/app/shared/interfaces/product-template';
import { MetaService } from 'src/app/shared/services/meta.service';
import { ProductTemplateService } from 'src/app/shared/services/product-template.service';

interface AppProductSummaryMetaData {
  productTypes: ProductType[] | undefined;
  attributeGroups: AttributeGroup[] | undefined;
  attributes: Attribute[] | undefined;
  conversionTypes: ConversionType[] | undefined;
  productTemplates: ProductTemplate[] | undefined;
}

@Component({
  selector: 'app-new-product',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class ProductSummaryComponent implements OnInit {
  formGroup = new FormGroup({
    industryCategory: new FormControl(''),
    productTemplate: new FormControl(''),
    weight: new FormControl(''),
    cost: new FormControl(''),
    surfaceArea: new FormControl(''),
    productCategory: new FormControl(''),
    productSubType: new FormControl(''),
    prefix: new FormControl(''),
    productWeightCalculator: new FormControl(''),
    length: new FormControl(''),
    width: new FormControl(''),
    productType: new FormControl(''),
    hsnCode: new FormControl(''),
    productCode: new FormControl(''),
  });

  metaData$?: Observable<AppProductSummaryMetaData>;

  constructor(
    private meta: MetaService,
    private productTemplates: ProductTemplateService
  ) {}

  ngOnInit(): void {
    const productTypes$ = this.meta.getProductTypes$();
    const attributeGroups$ = this.meta.getAttributeGroups$();
    const attributes$ = this.meta.getAttributes$();
    const conversionTypes$ = this.meta.getConversionTypes$();
    const productTemplates$ = this.productTemplates.getProductTemplates$();

    this.metaData$ = combineLatest([
      productTypes$,
      attributeGroups$,
      attributes$,
      conversionTypes$,
      productTemplates$,
    ]).pipe(
      map(
        ([
          productTypes,
          attributeGroups,
          attributes,
          conversionTypes,
          productTemplates,
        ]) => {
          return {
            productTypes,
            attributeGroups,
            attributes,
            conversionTypes,
            productTemplates,
          };
        }
      )
    );
  }
}
