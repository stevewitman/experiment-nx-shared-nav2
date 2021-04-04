import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApponeShellModule } from '@reusable-nav2/appone/shell';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ApponeShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
