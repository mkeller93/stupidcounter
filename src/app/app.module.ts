import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { DetailComponent } from './detail/detail.component';

import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoadingIndicatorComponent } from './shared/loading-indicator/loading-indicator.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ChartComponent } from './chart/chart.component';
import { VoteComponent } from './shared/vote/vote.component';
import { TrollComponent } from './shared/troll/troll.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    LoadingIndicatorComponent,
    QuotesComponent,
    ChartComponent,
    VoteComponent,
    TrollComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ChartsModule,
    routing
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
