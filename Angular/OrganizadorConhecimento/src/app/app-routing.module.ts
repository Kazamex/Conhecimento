import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroTitulosComponent } from './components/cadastro-titulos/cadastro-titulos.component';
import { TitulosComponent } from './components/titulos/titulos.component';

const routes: Routes = [
  {
    path:"cadastro-titulos",
    component:CadastroTitulosComponent
  },
  {
    path: "titulos",
    component: TitulosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
