import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoginComponent } from './login.component';


const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  //{path:'product', loadChildren:()=> import('./products/products.module').then(m=>m.IssuesModule)},
  {path:'products', loadChildren: './products/products.module#ProductsModule'},
  {path:'**', component:PageNotFoundComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
