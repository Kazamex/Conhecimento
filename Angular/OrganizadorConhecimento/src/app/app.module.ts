import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { CadastroTitulosComponent } from './components/cadastro-titulos/cadastro-titulos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    CadastroTitulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
