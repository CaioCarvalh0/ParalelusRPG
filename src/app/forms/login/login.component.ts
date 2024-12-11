import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from 'src/app/dto/login-dto';
import { SistemaService } from 'src/app/service/sistema.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sistemaService: SistemaService
  ) {
    this.formLogin = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
   }

  ngOnInit(){

  }

  Login(){
    const login: LoginDTO = {
      login: this.formLogin.get('login')!.value,
      senha: this.formLogin.get('senha')!.value
    }
    console.log('form',login);
    this.sistemaService.login(login).subscribe(res => {
      console.log(res);
    })
  }
}
