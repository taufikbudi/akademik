import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendaftaranduaPageRoutingModule } from './pendaftarandua-routing.module';

import { PendaftaranduaPage } from './pendaftarandua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendaftaranduaPageRoutingModule
  ],
  declarations: [PendaftaranduaPage]
})
export class PendaftaranduaPageModule {}
