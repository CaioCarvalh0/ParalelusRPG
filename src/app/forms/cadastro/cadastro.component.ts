import { Component, inject, OnInit, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDTO } from 'src/app/dto/register-dto';
import { UsuarioDTO } from 'src/app/dto/usuario-dto';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ModalService } from 'src/app/service/modal.service';
import { PasswordModule } from 'primeng/password';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        PasswordModule
    ]
})
export class CadastroComponent implements OnInit {
    formCadastro: FormGroup

    authService = inject(AuthenticationService);
    modalService = inject(ModalService);
    formBuilder = inject(FormBuilder);
    
    constructor(
        private router: Router
    ) {
        this.formCadastro = this.formBuilder.group(
            {
                nome: ['', Validators.required],
                login: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                senha: ['', [Validators.required, Validators.minLength(6)]],
                confirmSenha: ['', Validators.required]
            },
            { validator: this.senhasIguaisValidator }
        );
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

    private bodyUserDTO(): UsuarioDTO {
        return {
            id: 0,
            nome: this.formCadastro.get('nome')!.value,
            login: this.formCadastro.get('login')!.value,
            email: this.formCadastro.get('email')!.value
        }
    }

    cadastrarUsario() {
        let registerBody = this.bodyCadastro();
        this.authService.register(registerBody).subscribe(result => {
            this.usuarioCadastrado();
        })
    }

    checkUserValido() {
        let userBody = this.bodyUserDTO();
        this.authService.verificaUserCadastro(userBody).subscribe(result => {
            if (result.sucesso) return this.cadastrarUsario();
            this.modalService.openModalError(result.mensagem);
        })
    }

    senhasIguaisValidator(form: AbstractControl) {
        const senha = form.get('senha')?.value;
        const confirmSenha = form.get('confirmSenha')?.value;
        return senha === confirmSenha ? null : { senhasDiferentes: true };
    }

    usuarioCadastrado() {
        this.modalService.openModalSuccess('Usuário cadastrado com sucesso');
        this.router.navigate(['/login']);
    }

}
