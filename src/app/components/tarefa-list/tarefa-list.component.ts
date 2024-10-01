import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { Tarefa } from '../../models/tarefa.model';

@Component({
  selector: 'app-tarefa-list',
  templateUrl: './tarefa-list.component.html',
  styleUrls: ['./tarefa-list.component.scss']
})
export class TarefaListComponent implements OnInit {
  tarefas: Tarefa[] = [];
  currentPage = 1;
  pageSize = 10;
  totalTarefas = 0;
  filtro = { status: '', prioridade: '' };

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  // Buscar tarefas com paginação e filtros
  getTarefas(): void {
    this.tarefaService.getTarefas(this.currentPage, this.pageSize, this.filtro).subscribe(response => {
      this.tarefas = response.tarefas;
      this.totalTarefas = response.totalTarefas;
    });
  }

  // Alterar página
  changePage(page: number): void {
    this.currentPage = page;
    this.getTarefas();
  }

  // Aplicar filtros e buscar novamente
  applyFilter(): void {
    this.currentPage = 1;  // Reseta para a primeira página ao aplicar filtros
    this.getTarefas();
  }

  // Excluir uma tarefa
  deleteTarefa(id: number): void {
    this.tarefaService.deleteTarefa(id).subscribe(() => {
      this.getTarefas();  // Atualiza a lista após a exclusão
    });
  }
}
