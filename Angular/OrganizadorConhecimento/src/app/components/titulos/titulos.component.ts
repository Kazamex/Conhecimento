import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  teste() {
    this.router.navigate(['cadastro-titulos']);
  }
}
