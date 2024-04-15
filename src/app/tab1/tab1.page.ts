import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';
import { Prioridades } from '../models/prioridades';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Prioridades = Prioridades;

  constructor(private senhasService: SenhasService) {}

  gerarSenha(prioridade: Prioridades) {
    this.senhasService.gerarSenha(prioridade);
  }
}
