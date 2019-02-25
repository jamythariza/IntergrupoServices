import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService} from './services/countries.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [CountriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
