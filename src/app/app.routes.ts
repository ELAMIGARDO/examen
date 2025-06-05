import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/dashboard/clientes/clientes.component';
import { EmpleadosComponent } from './components/dashboard/empleados/empleados.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
import { ProductosComponent } from './components/dashboard/productos/productos.component';
import { LoginComponent } from './components/dashboard/login/login.component';
import { UsuariosComponent } from './components/dashboard/usuarios/usuarios.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },  // Página inicial: login
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'clientes', pathMatch: 'full' }, // ruta por defecto dentro del dashboard
      { path: 'clientes', component: ClientesComponent },
      { path: 'empleados', component: EmpleadosComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'usuarios', component: UsuariosComponent},
    ]
  },
  { path: '**', redirectTo: '' }  // Cualquier ruta desconocida redirige al login
];

