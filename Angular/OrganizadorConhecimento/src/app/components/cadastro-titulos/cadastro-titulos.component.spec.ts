import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTitulosComponent } from './cadastro-titulos.component';

describe('CadastroTitulosComponent', () => {
  let component: CadastroTitulosComponent;
  let fixture: ComponentFixture<CadastroTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroTitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
