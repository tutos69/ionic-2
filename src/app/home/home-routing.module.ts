import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-mensaje',
    pathMatch: 'full'
  }, {
    path: '',
    component: HomePage,
    children: [
      // {
      //   path: 'crear-cita',
      //   loadChildren: () => import('../Paginas/crear-cita/crear-cita.module').then(m => m.CrearCitaPageModule)
      // },
      // {
      //   path: 'editar-cita',
      //   loadChildren: () => import('../Paginas/editar-cita/editar-cita.module').then( m => m.EditarCitaPageModule)
      // },
      // {
      //   path: 'pcita',
      //   loadChildren: () => import('../Paginas/pcita/pcita.module').then( m => m.PCitaPageModule)
      // },
      {
        path: 'inicio-mensaje',
        loadChildren: () => import('../Paginas/inicio-mensaje/inicio-mensaje.module').then( m => m.InicioMensajePageModule)
      },


    ]
    }
];



// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'cliente',
//     pathMatch: 'full'
//   },

//   {
//     path: '',
//     component: TabsPage,
//     children: [
//       {
//         path: 'servicios',
//         loadChildren: () => import('./servicios/servicios.module').then(m => m.ServiciosPageModule)
//       },
//       {
//         path: 'cliente',
//         loadChildren: () => import('./cliente/cliente.module').then(m => m.ClientePageModule)
//       },

//       {
//         path: 'usuario',
//         loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioPageModule)
//       },
//       {
//         path: 'new-cliente',
//         loadChildren: () => import('./new-cliente/new-cliente.module').then(m => m.NewClientePageModule)
//       },
//       {
//         path: 'new-service',
//         loadChildren: () => import('./new-service/new-service.module').then(m => m.NewServicePageModule)
//       }, {
//         path: 'update-cliente',
//         loadChildren: () => import('./update-cliente/update-cliente.module').then(m => m.UpdateClientePageModule)
//       },
//       {
//         path: 'update-servicios',
//         loadChildren: () => import('./update-servicios/update-servicios.module').then(m => m.UpdateServiciosPageModule)
//       },

//       {
//         path: 'factura',
//         loadChildren: () => import('./factura/factura.module').then(m => m.FacturaPageModule)
//       },
//       {
//         path: 'new-factura',
//         loadChildren: () => import('./new-factura/new-factura.module').then( m => m.NewFacturaPageModule)
//       },

//       {
//         path: 'carrito',
//         loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule)
//       },


//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
