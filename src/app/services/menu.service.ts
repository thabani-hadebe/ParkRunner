import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private _httpClient: HttpClient) { }
  get menuItems(){
    return this._httpClient.get('');
  }
}
