import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routine.module';
import { AppComponent } from './app.component';
import { PointfocalComponent } from './pointfocal/pointfocal.component';
import {PointfocalService} from './pointfocal/pointfocal.service';
import {Pointfocal} from './shared/pointfocal';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import { VisualisationComponent} from './visualisation/visualisation.component';
import {PointfocalService} from './pointfocal/pointfocal.service';
import {HttpClientModule} from '@angular/common/http' ;
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PointfocalComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    VisualisationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [PointfocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
