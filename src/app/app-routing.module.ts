import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroproductoComponent } from './general/registroproducto/registroproducto.component'; 
import { RegistroComponent } from './general/registro/registro.component';


const routes: Routes = [
  {path: 'registroproducto', component: RegistroproductoComponent },
  {path:'registro',component: RegistroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
