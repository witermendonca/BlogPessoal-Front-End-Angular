import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';
import { UsuarioLogin } from '../model/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('http://localhost:8080/usuarios/logar', usuarioLogin)

  }
  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', usuario)

  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
  }

  deleteUsuario(id: number){
    return this.http.delete(`http://localhost:8080/usuarios/deletar/${id}`, this.token)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  adm(){
    let ok: boolean = false

    if(environment.tipo == 'adm'){
      ok = true
    }

    return ok
  } 

}
