import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GridComponent } from './components/grid/grid.component';
import { GridCellTemplate } from './components/grid/cell-template/cell-template.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    HeaderComponent,
    NavigationComponent,
    GridComponent,
    GridCellTemplate,
    FlexLayoutModule,
  ],
  declarations: [
    HeaderComponent,
    NavigationComponent,
    GridComponent,
    GridCellTemplate,
  ],
})
export class AppSharedModule {}
