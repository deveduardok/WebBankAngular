import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//3.3 vou criar vars de destino e valor
export class AppComponent {
  title = 'ByteBank';
  //destino: number;
  //valor: number;
  ///3.3 deixarei o cod mais simples, tirando as duas vars e colocando só uma!!
  //4.3 vou colocar um 's' no transf e inves de só any, será um array do tipo any.
  //Defino uma propr 'transfs' e ñ inicializei ela, nao da pra add a um array sem estar inicializado
   //5.2 VOU tirar o transfs pq ele nao tem mais responsa com isso, foi pro service
  ///// transferencias: any[]=[];

  constructor(private service: TransferenciaService) {}
//3.2 vou criar o metodo transferir
//3.3 uso o this nas vars para receber o event...
//4.3 vou dar um push para q transfs add os valores do event
//Colocar DATA: vou criar uma propr 'transf' e ela recebera o valor de
// ...(spread op) ele desconstroi o event e pega so as proprieds dele
//e passando pro obj transf e a data será um new date,
//e na linha de baixo, inves de propagar o '..push($event)' eu propago a 'transf'

//6.3 vamos apagar o met transferir, usavamos para comunicar os compon, agora com o service ñ preciso mais gerenciar isso com compon pai
//transferir($event){
//    this.service.adicionar($event);
//  }

}
