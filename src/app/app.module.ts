import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { PlaceholderPageComponent } from './components/placeholder-page/placeholder-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadUserDialogContentComponent } from './components/load-user-dialog-content/load-user-dialog-content.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemsComponent,
    PlaceholderPageComponent,
    LoadUserDialogContentComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatDividerModule,
    MatDialogModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatExpansionModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [LoadUserDialogContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
