import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { ProductoComponent } from './views/opciones/producto/producto.component';
import { ClientesComponent } from './views/opciones/clientes/clientes.component';
import { UsuariosComponent } from './views/opciones/usuarios/usuarios.component';
import { RepotventComponent } from './views/opciones/repotvent/repotvent.component';
import { GenpedComponent } from './views/opciones/genped/genped.component';

const routes: Routes = [

  { path: 'index', redirectTo: '#', pathMatch: 'full' },
  { path: 'index', component: IndexComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'cliente', component: ClientesComponent},
  { path: 'usuario', component: UsuariosComponent},
  { path: 'venta', component: RepotventComponent},
  { path: 'pedido', component: GenpedComponent},
  { path: '**', component: IndexComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
