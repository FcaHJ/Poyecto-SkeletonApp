import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'json-placeholder',
    loadChildren: () => import('./pages/json-placeholder/json-placeholder.module').then( m => m.JsonPlaceholderPageModule)
  },
  {
    path: 'character-detail',
    redirectTo: 'character-detail/0',
    pathMatch: 'full'
  },
  {
    path: 'characters-detail:id',
    loadChildren: () => import('./pages/characters-detail/characters-detail.module').then( m => m.CharactersDetailPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
