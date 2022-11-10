import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materia } from '../../modelos/modelo';
import { MateriaService } from '../../services/materia.service';

@Component({
  selector: 'app-cadastro-titulos',
  templateUrl: './cadastro-titulos.component.html',
  styleUrls: ['./cadastro-titulos.component.css']
})
export class CadastroTitulosComponent implements OnInit {
  public textoNovaMateria: string = '';
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

  voltar() {
    this.router.navigate(['titulos']);
  }

  cadastrar() {
    let novaMateria: Materia;
    let idUltimaMateria = this.materias[this.materias.length - 1].id_materia;
    novaMateria = {
      id_materia: idUltimaMateria + 1,
      nome_materia: this.textoNovaMateria,
      ids_conteudo: []
    }
    this.materiaService.cadastrarMateria(novaMateria);
  }
}
