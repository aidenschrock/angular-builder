import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuilderModule } from '@builder.io/angular'; // <-- import here
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BuilderModule.forRoot(environment.BUILDER_API_KEY),
    RouterModule.forRoot([
      {
        path: 'test-page',
        component: LandingPageComponent, // <-- add LandingPageComponent here
      },
      { path: '',   redirectTo: '/test-page', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
