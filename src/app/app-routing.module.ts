import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UsuarioDeleteComponent } from './delete/usuario-delete/usuario-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  //referenciando a rota padrão, quando for vazio
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  //rota entrar
  {path: 'entrar', component: EntrarComponent},
  //rota cadastrar
  {path: 'cadastrar', component: CadastrarComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'tema', component: TemaComponent},

  {path: 'tema-edit/:id', component: TemaEditComponent},

  {path: 'tema-delete/:id', component: TemaDeleteComponent},

  {path: 'postagem-edit/:id', component: PostagemEditComponent},

  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},

  {path: 'usuario-edit/:id', component: UsuarioEditComponent},

  {path: 'usuario-delete/:id', component: UsuarioDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
