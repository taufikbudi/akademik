import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendaftaranduaPage } from './pendaftarandua.page';

const routes: Routes = [
  {
    path: '',
    component: PendaftaranduaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendaftaranduaPageRoutingModule {}
