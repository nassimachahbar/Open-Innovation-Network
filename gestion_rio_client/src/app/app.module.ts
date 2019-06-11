import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routine.module';
import { AppComponent } from './app.component';
import { PointfocalComponent } from './pointfocal/pointfocal.component';
import {PointfocalService} from './pointfocal/pointfocal.service';
import {Pointfocal} from './shared/pointfocal';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import {HttpClientModule} from '@angular/common/http' ;
import { HttpModule } from '@angular/http';
import {VisualisationComponent} from './visualisation/visualisation.component';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PointfocalComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    VisualisationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [PointfocalService,PointfocalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
