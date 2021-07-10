//7.1 como ela eh um modulo, vou criar um decorator do NgModule
//routermodule: oq faz as config das rotas. Vou importa lo no 'app.module.ts'
//forRoot eh o met estatico

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExtratoComponent } from "./extrato/extrato.component";
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";

//vou criar uma const para rota para facilitar e colocar os caminhos já
//se eu acessar minha aplic vazia, dará erro, assim vou redirecionar(redirectTo)
export const routes: Routes=[
  {path:'', redirectTo: 'extrato', pathMatch:'full'},
  {path:'extrato', component: ExtratoComponent},
  {path:'nova-transferencia', component: NovaTransferenciaComponent},
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
}
)
//7.1 vou criar uma . Lembrando que td module eh uma CLASSE!
export class AppRoutingModule{}
