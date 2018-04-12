import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastrocliente',
  templateUrl: './cadastrocliente.component.html',
  styleUrls: ['./cadastrocliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  // depois de todo o processo, importar o ReactiveFormsModule no app.module.ts
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService: ClienteService) {

    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(120)]],
      endereco: ['', [Validators.required]],
      telefone: ['',[Validators.required, Validators.minLength(8)]],
      nascimento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
    })
  }

  ngOnInit() {
  }

  cadastrar() {
    this.clienteService.insert(this.formGroup.value)
      .subscribe(response => {
        console.log("Cadastrado com sucesso");
      }, error => {
        console.log("Error ao cadastrar");
      })

      console.log(this.formGroup.value);
  }

}