import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './component/form/form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'Form',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'Form',
    pathMatch: 'full',
  },
  {
    path: 'Form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
