import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routine.module';
import { AppComponent } from './app.component';
import { PointfocalComponent } from './pointfocal/pointfocal.component';
import {PointFocalMockService} from './pointfocal/pointfocal.mock.service';
import {Pointfocal} from './shared/pointfocal';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ContentComponent} from './content/content.component';
import { VisualisationComponent} from './visualisation/visualisation.component';


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
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PointFocalMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
