import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Cep } from "./cep";

@Injectable()
export class CepService{
  protected urlService: string = "https://brasilapi.com.br/api/cep/v2/";
  constructor(private httpClient: HttpClient){}
  private getCep(cep:string): Observable<Cep>{
    return this.httpClient.get<Cep>(this.urlService + cep);
  }
}