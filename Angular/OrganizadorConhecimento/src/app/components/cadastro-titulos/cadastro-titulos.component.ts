import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-titulos',
  templateUrl: './cadastro-titulos.component.html',
  styleUrls: ['./cadastro-titulos.component.css']
})
export class CadastroTitulosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  voltar() {
    this.router.navigate(['titulos']);
  }
}
