import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //4.2 vou criar um decorator/notacao @Input = vai permitir q seja criado
  //uma propried pra esse compon 'app-extrato' com esse nome 'transferencia'
  //4.3 colocarei um array de any e um 's'
  //5.2 Vou tirar o @Input pq nao preciso mais trazer dados para cá

  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  //6.2 vou invocar o metodo 'todas' que retona o observable, logo vou inscrever na resposta do metodo
  //qd resp desse metodo retornar sucesso, vai vim como parametro a lista de transf
  //transf eh do tipo array de transf, qd chegar posso printar no console e atribuir na minha propr transferencias
  //transf da classe vai receber o valor de transf q chegou como parametro
  ngOnInit(){
    //this.transferencias=this.service.transferencias;
    this.service.todas().subscribe((transferencias: Transferencia[])=>{
    console.table(transferencias);
    this.transferencias= transferencias;
    });
  }

}
