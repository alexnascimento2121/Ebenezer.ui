import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MembroComponent } from './view/membro/membro.component';
import { UsuarioComponent } from './view/usuario/usuario.component';

const routes: Routes = [{
  path:"",
  component:HomeComponent
},
{
  path:"membro",
  component:MembroComponent
},
{
  path:"usuario",
  component:UsuarioComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
