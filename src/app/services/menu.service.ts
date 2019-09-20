import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObserversModule } from '@angular/cdk/observers';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private _httpClient: HttpClient) { }
  getMenuItems(roleId: number) {

    return this._httpClient.get<Menu>( `${environment.apiUrl}GetMenuStructure?role=${roleId}`);

  }
}
