import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from '../../modelos/modelo';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.css']
})
export class TitulosComponent implements OnInit {

  public materias: Array<Materia> = [];

  constructor(
    private router: Router,
    private materiaService: MateriaService
  ) { }

  ngOnInit(): void {
    this.materiaService.getMateria().subscribe((res: Array<Materia>) => {
       this.materias = res;
    });
  }

  teste(texto:string) {
    console.log(texto);
  }

  public cadastrarMateria() {
    this.router.navigate(['cadastro-titulos']);
  }
}
