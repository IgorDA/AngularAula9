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
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClienteService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
