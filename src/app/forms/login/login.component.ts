import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/dto/login-dto';
import { ModalService } from 'src/app/service/modal.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthenticationService);
  private modalService = inject(ModalService);
  private router = inject(Router);

  constructor() {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  bodyLogin(): LoginDTO {
    return {
      login: this.formLogin.get('login')!.value,
      senha: this.formLogin.get('senha')!.value
    }
  }

  Login() {
    this.authService.login(this.bodyLogin()).subscribe(result => {
      if (result.sucesso) {
        this.checkTokenLocalStorage();
      } else {
        this.modalService.openModalError(result.mensagem);
      }
    })
  }

  checkTokenLocalStorage() {
    const token = localStorage.getItem('token');
    if (token) {
      this.modalService.openModalSuccess('Login efetuado com sucesso');
      this.router.navigate(['/home']);
    } else {
      this.modalService.openModalError('Token não encontrado no LocalStorage');
    }
  }

  goToCadastro(){
    this.router.navigate(['/cadastro']);
  }
}
