import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private apiUrl = 'http://localhost:5000/api/tarefas';  // URL da API do back-end

  constructor(private http: HttpClient) { }

  // Obter todas as tarefas com filtros e paginação
  getTarefas(page: number, pageSize: number, filterParams?: any): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    // Adiciona filtros aos parâmetros
    if (filterParams) {
      if (filterParams.status) {
        params = params.set('status', filterParams.status);
      }
      if (filterParams.prioridade) {
        params = params.set('prioridade', filterParams.prioridade);
      }
    }

    return this.http.get<any>(this.apiUrl, { params });
  }

  // Obter uma tarefa por ID
  getTarefa(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.apiUrl}/${id}`);
  }

  // Criar uma nova tarefa
  createTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.apiUrl, tarefa);
  }

  // Atualizar uma tarefa existente
  updateTarefa(tarefa: Tarefa): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  // Excluir uma tarefa
  deleteTarefa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
