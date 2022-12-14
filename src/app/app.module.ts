import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { InicioComponent } from './views/inicio/inicio.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { ProductoComponent } from './views/opciones/producto/producto.component';
import { ClientesComponent } from './views/opciones/clientes/clientes.component';
import { UsuariosComponent } from './views/opciones/usuarios/usuarios.component';
import { RepotventComponent } from './views/opciones/repotvent/repotvent.component';
import { GenpedComponent } from './views/opciones/genped/genped.component';
import {MatTableModule} from '@angular/material/table';
import { FormModule } from '@coreui/angular';


const routes: Routes = [
  {
    path: '',
    redirectTo: '#',
    pathMatch: 'full',
  },

  {
    path: 'index',
    component: IndexComponent,
  },

  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'productos',
    component: ProductoComponent,
  },
  {
    path: 'cliente',
    component: ClientesComponent,
  },

  {
    path: 'usuarios',
    component: UsuariosComponent,
  },

  {
    path: 'ventas',
    component: RepotventComponent,
  },

  {
    path: 'pedido',
    component: GenpedComponent,
  },

  {
    path: '**',
    component: IndexComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    InicioComponent,
    ProductoComponent,
    ClientesComponent,
    UsuariosComponent,
    RepotventComponent,
    GenpedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    FormModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
