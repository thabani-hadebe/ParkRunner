import { Component, OnInit, Inject } from '@angular/core';
import { KeyValue } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-load-user-dialog-content',
  templateUrl: './load-user-dialog-content.component.html'
})
export class LoadUserDialogContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public userTypes: KeyValue<number, string>[], private _dialogRef: MatDialogRef<LoadUserDialogContentComponent>) { }

  ngOnInit() {
  }

  closeDialog(userType: KeyValue<number, string>) {
    this._dialogRef.close(userType)

  }

}
