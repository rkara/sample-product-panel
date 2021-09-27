import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [AppSharedModule, RouterModule.forChild(ROUTES)],
  declarations: [LoginComponent],
})
export class AppLoginModule {}
