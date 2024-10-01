import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../../services/tarefa.service';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.scss']
})
export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe(data => {
      this.tarefas = data;
    });
  }
}
