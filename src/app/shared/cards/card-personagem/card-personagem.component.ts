import { Component, computed, input } from '@angular/core';
import { Personagem } from 'src/app/core/models/personagem';
import { AvatarModule } from 'primeng/avatar';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-card-personagem',
    templateUrl: './card-personagem.component.html',
    styleUrls: ['./card-personagem.component.scss'],
    standalone: true,
    imports: [AvatarModule],
})
export class CardPersonagemComponent {
    personagem = input.required<Personagem>();
    campanhaNome = input<string>('');

    public readonly vidaPercentual = computed(() => {
        const personagem = this.personagem();
        if (!personagem.maxvida || personagem.maxvida <= 0) {
            return 0;
        }

        const percentual = Math.round((personagem.vidaatual / personagem.maxvida) * 100);
        return Math.max(0, Math.min(100, percentual));
    });

    public readonly nomeCampanha = computed(() => this.campanhaNome()?.trim() || 'Sem campanha');

    constructor() {
    }

    public getImagem(): string {
        return `${environment.apiUrl}${this.personagem()?.imagem}`;
    }
}
