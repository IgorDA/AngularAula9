import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroClienteComponent } from './cadastrocliente/cadastrocliente.component';
import { Cliente } from './domain/cliente';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { ServicosService } from './services/servicos.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroClienteComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ClienteService, LoginService, ServicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
