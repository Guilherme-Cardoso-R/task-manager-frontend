import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaListComponent } from './components/tarefa-list/tarefa-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'tarefas', component: TarefaListComponent, canActivate: [AuthGuard] }, // Rota protegida
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireciona para o login se a rota for vazia
  { path: '**', redirectTo: '/login' } // Rota fallback para redirecionar para login caso a rota não seja encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
