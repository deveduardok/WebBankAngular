import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
//5.2 vou criar o meu array de transf
  private listaTransferencia: any[];
  ///6.2 declaro uma proprid privada 'url' e lá vou passar a url
  private url = 'http://localhost:3000/transferencias';

  //dentro do contructor vou inicializar o array listaTransf
  //6.2 vou add a classe httpclient
constructor(private httpClient: HttpClient) {
  this.listaTransferencia=[];
}

get transferencias(){
  return this.listaTransferencia;
}
///6.2 nao vou pegar as trasnf mais do array, vou criar um metodo 'todas', que retorna uma req GET para este endereço
//atraves da minha propried httpclient, faço uma req GET passado essa url. Vou tipar o GET para q ele retorne uma lista de transfer
//oBservable na vrdd implementa o padrao de observador, o met get pode retornar resp em algum futuro
todas(): Observable<Transferencia[]>{
return this.httpClient.get<Transferencia[]>(this.url);
}

//vou criar tb um metodo 'adicionar' , vou copiar uma parte do app.compon.ts
//vou receber uma transf como parametro
//6.3 o met add nao vai add mais no array, ele vai invocar o obj httpClient e chamarei uma req POST
//la dentro preciso apssar 2 param, a 1 é 'url' q vou enviar a req, e o 2 é o body
//posso dizer que o retorno do post eh um obj <Transf>, assim irá retornar um observable
adicionar(transferencia:Transferencia): Observable<Transferencia>{
  this.hidratar(transferencia);
  //this.listaTransferencia.push(transferencia);
  return this.httpClient.post<Transferencia>(this.url, transferencia);
}

private hidratar(transferencia: any){
  transferencia.data=new Date();
}

}
