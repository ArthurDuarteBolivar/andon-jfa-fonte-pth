import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nodemcu } from '../module/nodemcu';
import { Observable } from 'rxjs';
import { Realizado } from '../module/realizado';

@Injectable({
  providedIn: 'root',
})
export class NodemcuService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {

    return this.http.get<Nodemcu>(
      'http://172.16.34.147:9000/api/v1/nodemcu',
    );
  }

  getAllRealizado(): Observable<Realizado[]>{
    return this.http.get<Realizado[]>("http://172.16.34.147:9000/api/v1/realizadoHoraria")
  }

  pausa(pausa: boolean){
    return this.http.get("http://172.16.34.147:9000/api/v1/operation/pausa/" + pausa)
  }
}
