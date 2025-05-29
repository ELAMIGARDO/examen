import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesComponent } from './components/dashboard/clientes/clientes.component';
import { EmpleadosComponent } from './components/dashboard/empleados/empleados.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';

export const routes: Routes = [
    {path: '',component: DashboardComponent}, 
    {path: '',redirectTo: '/home',pathMatch: 'full'} ,
    {path: 'dashboard',component: DashboardComponent,children:[
        {path: 'dashboard', component:DashboardComponent},
        {path: 'clientes', component: ClientesComponent},
        {path: 'empleados', component: EmpleadosComponent},
        {path: 'reportes', component: ReportesComponent},  
        ]}
];
