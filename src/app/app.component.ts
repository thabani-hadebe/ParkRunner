import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { KeyValue } from '@angular/common';
import { Menu } from './models/menu';
import { Observable } from 'rxjs';
import { LoadUserDialogContentComponent } from './components/load-user-dialog-content/load-user-dialog-content.component';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ParkRunner';
  userMenu: Observable<Menu>;
  userType: Observable<KeyValue<number, string>>;
  userTypes: KeyValue<number, string>[] = [{ key: 1, value: 'Coordinator' }, { key: 2, value: 'Participant' }];

  constructor(private _menu: MenuService, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.userType = this._dialog.open(LoadUserDialogContentComponent, {
      data: this.userTypes,
      disableClose: true,
      width: '500px'
    }).afterClosed().pipe(tap((userType) => {
      this.userMenu = this._menu.getMenuItems(userType.key);
    }));
  }
}
