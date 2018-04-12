
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servico } from '../domain/servico';

@Injectable()
export class ServicosService {

  constructor(public http:HttpClient) { }

  insert(obj : Servico){
    return this.http.get(`https://7345ae0f-6b5f-435e-b200-ce66acca7085.mock.pstmn.io/clientes`);
  }