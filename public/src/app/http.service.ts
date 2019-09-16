import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOneTask();
  }

  getTasks() {
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got our tasks!", data));
}

  getOneTask() {
    let tempObservable = this._http.get('/tasks/5d7fe124fd76593f8c3ba2dc');
    tempObservable.subscribe(data => console.log("Got one task!", data));
  }

}

