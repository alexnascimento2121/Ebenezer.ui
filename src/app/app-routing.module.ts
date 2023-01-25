import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembroCreateComponent } from './components/membro/membro-create/membro-create.component';
import { MembroDeleteComponent } from './components/membro/membro-delete/membro-delete.component';
import { MembroUpdateComponent } from './components/membro/membro-update/membro-update.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login/login.component';
import { MembroComponent } from './view/membro/membro.component';
import { UsuarioComponent } from './view/usuario/usuario.component';

const routes: Routes = [{
  path:"",
  component:LoginComponent
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"membro",
  component:MembroComponent
},
{
  path:"membro/create",
  component:MembroCreateComponent
},
{
  path:"membro/update/:id",
  component:MembroUpdateComponent
},
{
  path:"membro/delete/:id",
  component:MembroDeleteComponent
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
