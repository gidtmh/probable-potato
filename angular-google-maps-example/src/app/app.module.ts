import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MyAgmExampleComponent } from './my-agm-example.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAgmExampleComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT93RYIhxmsuhORTnq3p7IS-cjwwxeZAA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
