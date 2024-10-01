import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem('token', response.token);  // Armazena o token JWT
      this.router.navigate(['/tarefas']);  // Redireciona para as tarefas
    }, error => {
      alert('Credenciais inválidas');
    });
  }
}
