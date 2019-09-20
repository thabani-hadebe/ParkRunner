import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html'
})
export class MenuItemsComponent implements OnInit {
  private _menu: Observable<Menu>;
  @Input() public get menu() {
    return this._menu;
  }

  public set menu(val: Observable<Menu>) {
    this._menu = val;
  }
  constructor() { }

  ngOnInit() {

  }

}
