import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GridColumn } from 'src/app/shared/components/grid/grid.component';
import { ProductPackageSummary } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

const COLUMNS: GridColumn[][] = [
  [
    {
      name: 'Package Summary',
      key: 'packageSummary',
      colspan: 5,
    },
    {
      name: 'Detail Packaging View',
      route: '/new-product/-1/packaging',
      key: 'detailPackagingView',
      colspan: 2,
    },
    {
      name: 'Elobrate Packaging Cost',
      key: 'packagingCost',
      colspan: 2,
    },
  ],
  [
    {
      name: 'Package',
      key: 'package',
    },
    {
      name: 'Size',
      key: 'size',
    },
    {
      name: 'Number of Items',
      key: 'itemCountDescription',
    },
    {
      name: 'UOM Relation',
      key: 'uomRelation',
    },
    {
      name: 'Gross Weight',
      key: 'weight',
    },
    {
      name: 'Cost (USD)',
      key: 'amount',
    },
    {
      name: 'Volume (CBM)',
      key: 'volume',
    },
    {
      name: 'Class',
      key: 'packageClass',
    },
    {
      name: '',
      key: '_actions',
    },
  ],
];

@Component({
  selector: 'app-package-grid',
  templateUrl: './package-grid.component.html',
  styleUrls: ['./package-grid.component.scss'],
})
export class PackageGridComponent implements OnInit, OnChanges {
  @Input()
  productId?: number;

  columns: GridColumn[][] = COLUMNS;
  data$?: Observable<ProductPackageSummary[]>;

  private productIdSubject = new BehaviorSubject<number | undefined>(undefined);

  constructor(private products: ProductService) {}

  ngOnInit(): void {
    const productId$ = this.productIdSubject.asObservable();
    this.data$ = productId$.pipe(
      switchMap((productId) => {
        if (productId) {
          return this.products.getProductPackageSummary$(productId);
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
