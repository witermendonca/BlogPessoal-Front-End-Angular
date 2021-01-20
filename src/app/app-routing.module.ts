import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  //referenciando a rota padrão, quando for vazio
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  //rota entrar
  {path: 'entrar', component: EntrarComponent},
  //rota cadastrar
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
