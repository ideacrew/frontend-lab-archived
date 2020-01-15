import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdminShellModule } from '@idc/admin/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminShellModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
