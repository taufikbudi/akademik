import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TahunAjarPage } from './tahun-ajar.page';

const routes: Routes = [
  {
    path: '',
    component: TahunAjarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TahunAjarPageRoutingModule {}
