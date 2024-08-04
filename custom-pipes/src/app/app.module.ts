import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplierPipe } from './multiplier.pipe';
import { SquarerootPipe } from './squareroot.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiplierPipe,
    SquarerootPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
