import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./Paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  // {
  //   path: 'inicio-mensaje',
  //   loadChildren: () => import('./Paginas/inicio-mensaje/inicio-mensaje.module').then( m => m.InicioMensajePageModule)
  // },
  {
    path: 'nuevo-mensaje',
    loadChildren: () => import('./Paginas/nuevo-mensaje/nuevo-mensaje.module').then( m => m.NuevoMensajePageModule)
  },
  // {
  //   path: 'pcita',
  //   loadChildren: () => import('./Paginas/pcita/pcita.module').then( m => m.PCitaPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
