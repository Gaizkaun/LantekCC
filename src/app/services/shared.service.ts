import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

constructor() { }
private param = new Subject<string>();

  parameters$ = this.param.asObservable();

  sendParameter(parametro:any) {
    this.param.next(parametro);
  }

}
