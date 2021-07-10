import {Component, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

//vou chamar o msm decorator = component. Esse style vc coloca um array de string
@Component({
    selector: 'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent{

//3.1 @Output = vc esta num component e ele extrai os dados para quem chegou
//criar um obj output, evento dar o nome de 'aoTransferir'
//atraves da classe ***eventemitter consigo propagar o dado
//esse **any é do typescript, quer dizer que pode ser qlqr valor ou destino,..
@Output() aoTransferir = new EventEmitter<any>();

//2.3 vou criar um atrib/propriedade p/ pegar valor do input
  valor: number;
  destino: number;

//6.2 criar um construtor
//7.2 vou vou injetar uma propr router do tipo Router
constructor(private service: TransferenciaService, private router: Router){
}

//2.3 vou colocar o this pq eh uma var desta classe
//3.1 vou invocar o event aoTransferir
//3.3 após emitir, vou limpar o campo, chamo o metodo por ultimo
//6.3 apagaremos o passado e invocaremos o met add com o service
//coloquei o limpar dentro do subscribe pq como o met add retorna um observable
//implementaremos tb se der erro, qd der errado e nao chegar nenhum resultado
//7.2 vou colocar o navigateByUrl assim passo a astring e o path(caminho)
  transferir(){
    console.log('nova transfer..');
    const valorEmitir: Transferencia ={valor:this.valor, destino: this.destino}
   // this.aoTransferir.emit(valorEmitir);
    this.service.adicionar(valorEmitir).subscribe(resultado=>{
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error));

  }

//3.3 vou limpar os campos depois do submit botao, garantir que estarao limpos.
  limparCampos(){
    this.valor = 0;
    this.destino=0;
  }
}
