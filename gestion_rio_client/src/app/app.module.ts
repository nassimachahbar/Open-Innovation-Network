import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PointsfocauxComponent } from './pointsfocaux/pointsfocaux.component';
import { PointfocalComponent } from './pointfocal/pointfocal.component';
import {PointFocalMockService} from './pointfocal/pointfocal.mock.service';
import {Pointfocal} from '/shared/pointfocal';

@NgModule({
  declarations: [
    AppComponent,
    PointfocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PointFocalMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
