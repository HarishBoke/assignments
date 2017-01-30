"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var appComponent_1 = require('./appComponent');
var headerComponent_1 = require('./components/header/headerComponent');
var sidebarComponent_1 = require('./components/sidebar/sidebarComponent');
//import {AreaChartComponent} from './components/shared/charts/area-chart/AreaChartComponent';
var httpBasicsComponent_1 = require('./components/http_basics/httpBasicsComponent');
var httpBasicMasterComponent_1 = require('./components/http_basics/httpBasicMasterComponent');
var HttpBasicsService_1 = require("./services/HttpBasicsService");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { 'path': '', redirectTo: 'http-basics', pathMatch: 'full' },
                    { 'path': 'http-basics', component: httpBasicMasterComponent_1.HttpBasicMasterComponent }
                ])
            ],
            declarations: [appComponent_1.AppComponent, headerComponent_1.HeaderComponent, sidebarComponent_1.SidebarComponent, httpBasicsComponent_1.HttpBasicComponent, httpBasicMasterComponent_1.HttpBasicMasterComponent],
            bootstrap: [appComponent_1.AppComponent],
            providers: [HttpBasicsService_1.HttpBasicsService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map