import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';  // Importa o model User
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user: User = new User();  // Usa o model User

  constructor(private userService: UserService, private router: Router) { }

  register(): void {
    this.userService.register(this.user).subscribe(() => {
      alert('Usuário registrado com sucesso!');
      this.router.navigate(['/login']);
    }, error => {
      alert('Erro ao registrar usuário');
    });
  }
}
