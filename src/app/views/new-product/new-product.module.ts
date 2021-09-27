import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { ProductSummaryComponent } from './views/summary/summary.component';
import { PackagingComponent } from './views/packaging/packaging.component';
import { MaterialsComponent } from './views/materials/materials.component';
import { TemplateComponent } from './views/template/template.component';
import { PackageGridComponent } from './components/package-grid/package-grid.component';
import { CostGridComponent } from './components/cost-grid/cost-grid.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ProductSummaryComponent,
  },
  {
    path: 'summary',
    component: ProductSummaryComponent,
  },
  {
    path: ':id/packaging',
    component: PackagingComponent,
  },
  {
    path: ':id/materials',
    component: MaterialsComponent,
  },
  {
    path: ':id/template',
    component: TemplateComponent,
  },
];

@NgModule({
  imports: [AppSharedModule, RouterModule.forChild(ROUTES)],
  declarations: [
    ProductSummaryComponent,
    PackagingComponent,
    MaterialsComponent,
    TemplateComponent,
    PackageGridComponent,
    CostGridComponent,
  ],
})
export class AppNewProductModule {}
