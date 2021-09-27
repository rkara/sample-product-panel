import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-grid-cell-template',
  template: '',
})
export class GridCellTemplate {
  @Input()
  name = '';

  @ContentChild(TemplateRef, { static: true })
  template?: TemplateRef<any>;
}
