import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GridColumn } from 'src/app/shared/components/grid/grid.component';
import { ProductCostSummary } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

const COLUMNS: GridColumn[][] = [
  [
    {
      name: 'Cost Summary Sheet',
      colspan: 5,
    },
    {
      name: 'Elobrate Process View',
      colspan: 2,
    },
    {
      name: 'Costing Summary Sheet',
      route: '/new-product/-1/materials',
      colspan: 3,
    },
  ],
  [
    {
      name: 'SubProduct',
    },
    {
      name: '',
    },
    {
      name: 'Thickness',
    },
    {
      name: '',
    },
    {
      name: '% Used (GSM)',
    },
    {
      name: '',
    },
    {
      name: '% Used (Weight)',
    },
    {
      name: '',
    },
    {
      name: 'Cost',
    },
    {
      name: '',
    },
  ],
  [
    {
      name: '',
      key: 'subProduct'
    },
    {
      name: 'Micron',
      key: 'size',
    },
    {
      name: 'Mil',
      key: 'thicknessDescription',
    },
    {
      name: 'GSM',
      key: 'measurement',
    },
    {
      name: '',
      key: 'percentUsedGsm',
    },
    {
      name: 'Weight (gm)',
      key: 'weight',
    },
    {
      name: '',
      key: 'percentUsedWeight',
    },
    {
      name: 'Product',
      key: 'product',
    },
    {
      name: 'Conversion',
      key: 'conversion',
    },
    {
      name: 'Cost',
      key: 'cost',
    },
  ]
];

@Component({
  selector: 'app-cost-grid',
  templateUrl: './cost-grid.component.html',
  styleUrls: ['./cost-grid.component.scss'],
})
export class CostGridComponent implements OnInit, OnChanges {
  @Input()
  productId?: number;

  columns: GridColumn[][] = COLUMNS;
  data$?: Observable<ProductCostSummary[]>;

  private productIdSubject = new BehaviorSubject<number | undefined>(undefined);

  constructor(private products: ProductService) {}

  ngOnInit(): void {
    const productId$ = this.productIdSubject.asObservable();
    this.data$ = productId$.pipe(
      switchMap((productId) => {
        if (productId) {
          return this.products.getProductCostSummary$(productId);
        } else {
          return [];
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productId) {
      this.productIdSubject.next(this.productId);
    }
  }
}
