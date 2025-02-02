import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/dto/register-dto';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule
    ]
})
export class CadastroComponent implements OnInit {
    formCadastro: FormGroup
    isPasswodValid: boolean = false
    hide = signal(true);
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private modalService: ModalService,
        private router: Router
    ) {
        this.formCadastro = this.formBuilder.group({
            nome: ['', Validators.required],
            login: ['', Validators.required],
            email: ['', Validators.required],
            senha: ['', Validators.required],
            confirmSenha: ['']
        })
     }

    ngOnInit(): void {
        
    }

    private bodyCadastro(): RegisterDTO {
        return {
            nome: this.formCadastro.get('nome')!.value,
            login: this.formCadastro.get('login')!.value,
            email: this.formCadastro.get('email')!.value,
            senha: this.formCadastro.get('senha')!.value
        }
    }


    cadastrarUsario() {
        this.checkPassword();
        const body = this.bodyCadastro();
        if(this.isPasswodValid) {
            this.authService.register(body).subscribe(result => {
                this.usuarioCadastrado();
            })
        }
    }

    checkPassword() {
        const senha = this.formCadastro.get('senha')!.value;
        const confirmSenha = this.formCadastro.get('confirmSenha')!.value;
        if (senha === confirmSenha) {
            this.isPasswodValid = true;
        } else {
            this.isPasswodValid = false;
            this.modalService.openModalError('As senhas não são iguais!');
        }
    }

    usuarioCadastrado(){
        this.modalService.openModalSuccess('Usuário cadastrado com sucesso');
        this.router.navigate(['/login']);
    }

}
