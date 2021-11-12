import { AlunoModel } from './alunos/aluno.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor(private http: HttpClient) { }

  listarAlunos(): Observable<any>{
    return this.http.get(environment.apiUrl);
  }

  cadastrarAluno(aluno: AlunoModel): Observable<any>{
    return this.http.post(environment.apiUrl, aluno);
  }

  atualizarAluno(id: any, aluno: AlunoModel): Observable<any>{
    return this.http.put(environment.apiUrl.concat(id), aluno);
  }


  removerAluno(id:any){
    return this.http.delete(environment.apiUrl.concat(id));
  }


}
