import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './views/pages/dashboard/dashboard.component';
import {CardViewComponent} from "./views/commons/card-view/card-view.component";
import {PostComponent} from "./views/pages/post/post.component";
import {TagComponent} from "./views/commons/tag/tag.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpMiddleware} from "./middlewares/http.middleware";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CardViewComponent,
        PostComponent,
        TagComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpMiddleware, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
