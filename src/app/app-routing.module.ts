import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./halaman/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./halaman/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  
   
  {
    path: 'pendaftaran',
    loadChildren: () => import('./halaman/pendaftaran/pendaftaran.module').then( m => m.PendaftaranPageModule)
  },
  
  {
    path: 'pendaftarandua',
    loadChildren: () => import('./halaman/pendaftarandua/pendaftarandua.module').then( m => m.PendaftaranduaPageModule)
  },
  {
    path: 'tahun-ajar',
    loadChildren: () => import('./halaman/tahun-ajar/tahun-ajar.module').then( m => m.TahunAjarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
