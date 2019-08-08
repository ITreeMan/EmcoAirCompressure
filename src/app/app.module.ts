import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatTabsModule
} from '@angular/material';

import { MatGridListModule } from '@angular/material/grid-list';

import { SideNavComponent } from './side-nav/side-nav.component';
import { BtnLayoutComponent } from './common/btn-layout/btn-layout.component';

import {MatCardModule} from '@angular/material/card';
import { GaugeChartModule } from 'angular-gauge-chart'
import {FormsModule} from '@angular/forms'

import { PerformanceComponent } from './common/performance/performance.component';
import { BtnLayoutMobileComponent } from './common/btn-layout-mobile/btn-layout-mobile.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BtnLayoutComponent,
    PerformanceComponent,
    BtnLayoutMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    GaugeChartModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
