import { AlunoModel } from './aluno.model';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  aluno: AlunoModel = new AlunoModel();
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }


  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos;
    }, err => {
      console.log('Erro ao listar alunos', err);
    })
  }


  cadastrar(){
    console.log(this.aluno);
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno => { 
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err => { 
      console.log('Erro ao cadastrar', err)
    })
  }

  atualizar(id: number){
    this.alunosService.atualizarAluno(id, this.aluno).subscribe(aluno => { 
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err => { 
      console.log('Erro ao Atualizar', err)
    })
  }

  remover(id:number){
    this.alunosService.removerAluno(id).subscribe(aluno => { 
      alert("Tem certeza que quer apagar?");
      this.aluno = new AlunoModel();
      this.listarAlunos();
    }, err => { 
      console.log('Erro ao Apagar', err)
    })
  }

}
