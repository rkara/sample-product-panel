import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { GridCellTemplate } from './cell-template/cell-template.component';

export interface GridColumn {
  name: string;
  width?: string;
  key?: string;
  route?: string;
  colspan?: number;

  template?: TemplateRef<any>;
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements AfterContentInit {
  @ContentChildren(GridCellTemplate)
  private cellTemplates?: QueryList<GridCellTemplate>;

  @Input()
  columns?: GridColumn[][];

  @Input()
  data?: any[];

  get displayColumns() {
    return this.columns ? this.columns[this.columns.length - 1] : [];
  }

  ngAfterContentInit(): void {
    if (this.columns && this.cellTemplates) {
      this.cellTemplates.forEach((t) => {
        if (this.columns) {
          const name = t.name;
          for (
            let collectionIndex = 0;
            collectionIndex < this.columns.length;
            collectionIndex++
          ) {
            const columns = this.columns[collectionIndex];
            const column = columns.find((c) => c.key === name);
            if (column) {
              column.template = t.template;
              break;
            }
          }
        }
      });
    }
  }
}
