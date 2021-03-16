import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/usuarioLogin';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin : UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id
      environment.tipo = this.usuarioLogin.tipo

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    })
  }

}