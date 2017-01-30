import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';



import { AppComponent } from './appComponent';
import {HeaderComponent} from './components/header/headerComponent';
import {SidebarComponent} from './components/sidebar/sidebarComponent';

//import {AreaChartComponent} from './components/shared/charts/area-chart/AreaChartComponent';
import {HttpBasicComponent} from './components/http_basics/httpBasicsComponent';
import {HttpBasicMasterComponent} from './components/http_basics/httpBasicMasterComponent';

import {HttpBasicsService} from "./services/HttpBasicsService"

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {'path':'', redirectTo:'http-basics', pathMatch:'full'},
      {'path': 'http-basics', component:HttpBasicMasterComponent }
    ])
 ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent,  HttpBasicComponent, HttpBasicMasterComponent],
  bootstrap:    [ AppComponent ],
  providers: [ HttpBasicsService ]
})
export class AppModule { }
