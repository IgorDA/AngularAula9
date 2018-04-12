
import { Component, OnInit, Input } from '@angular/core';
import { Servico } from '../domain/servico';
import { SERVICOS } from '../domain/mock-service';
import { ServicoService } from '../services/servicos.service';

@Component({
  selector: 'app-amigo-detail',
  templateUrl: './amigo-detail.component.html',
  styleUrls: ['./amigo-detail.component.css']
})
export class AmigoDetailComponent implements OnInit {

  servicos: Servico[] = SERVICOS;
  servico: Servico = new Servico();

  constructor() {}

  ngOnInit() {
  }

  addAmigo() {
    //console.log(this.amigo.nome);
    let novoServico = new Servico();
    novoServico.id = this.servico.id;
    novoServico.nome = this.servico.nome;
    novoServico.id = this.servico.id;
    this.servicos.push(novoServico);
  }
}