import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TahunAjarPageRoutingModule } from './tahun-ajar-routing.module';

import { TahunAjarPage } from './tahun-ajar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TahunAjarPageRoutingModule
  ],
  declarations: [TahunAjarPage]
})
export class TahunAjarPageModule {}
