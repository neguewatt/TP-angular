import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {Tp2Component} from "./components/tp2/tp2.component";
import { MypipePipe } from './pipe/mypipe.pipe';
import { MydirectiveDirective } from './directive/mydirective.directive';
import { ColordirectiveDirective } from './directive/colordirective.directive';

@NgModule({
    imports: [BrowserModule, FormsModule, NgbModule],
    declarations: [AppComponent, Tp2Component, MypipePipe, MydirectiveDirective, ColordirectiveDirective],
    bootstrap: [AppComponent]
})
export class AppModule {
}
