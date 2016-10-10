import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class MenuService {

  constructor(private http: Http) { }

  getItems () {
    return this.http
      .get('/assets/data.json')
      .toPromise()
      .then((r: Response) => r.json());
  }

}
