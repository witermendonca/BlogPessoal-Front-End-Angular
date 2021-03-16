import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/postagem';
import { Tema } from '../model/tema';
import { Usuario } from '../model/usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  tituloPostagem: string
  

  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number
  nomeTema: string

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.alertas.showAlertInfo('Sua sessão expirou, faça o login navamente.')
      this.router.navigate(['/entrar'])

    }

    this.getAllTemas()
    this.getAllPostagens()

  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTema = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagem = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPosagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  findByTituloPostagem(){
    if(this.tituloPostagem == ''){
      this.getAllPostagens()
    }else{
      this.postagemService.getByTituloPostagens(this.tituloPostagem).subscribe((resp: Postagem[])=>{
        this.listaPostagem = resp
      })
    }
  }

  findByNomeTema(){
   if (this.nomeTema == ''){
     this.getAllTemas()
   } else{
     this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
       this.listaTema = resp
     })
   }
  } 
  

}
