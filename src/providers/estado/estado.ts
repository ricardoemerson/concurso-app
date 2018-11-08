import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { appUrl } from './../../app/app.config';

import { Estado } from '../../models/estado.model';

@Injectable()
export class EstadoProvider {
  url: string = `${ appUrl }/estados`;

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<{ estados: Estado[] }> {
    return this.http.get<{ estados: Estado[] }>(this.url);
  }

}
