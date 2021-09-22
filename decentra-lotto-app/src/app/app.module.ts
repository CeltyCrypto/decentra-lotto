import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './pages/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './pages/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './pages/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  

import { StatsService } from './services/stats.service';
import { MiniCardComponent } from './shared/mini-card/mini-card.component';
import { EnterDrawCardComponent } from './shared/enter-draw-card/enter-draw-card.component';
import { DrawStatsCardComponent } from './shared/draw-stats-card/draw-stats-card.component';
import { PlatformCheckerService } from 'src/app/services/platform.service';
import { InfoCardComponent } from './shared/info/info-card.component';
import { WinnerModalComponent } from './shared/winner-modal/winner-modal/winner-modal.component';
import { LoserModalComponent } from './shared/winner-modal/loser-modal/loser-modal.component';
import { StakingComponent } from './pages/staking/staking.component';
import { StakeCardComponent } from './shared/stake-card/stake-card.component';
import { HarvestCardComponent } from './shared/harvest-card/harvest-card.component';
import { TicketsBoughtModalComponent } from './shared/tickets-bought-modal/tickets-bought-modal.component';
import { StakingInfoComponent } from './shared/staking-info/staking-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    MiniCardComponent,
    EnterDrawCardComponent,
    DrawStatsCardComponent,
    InfoCardComponent,
    WinnerModalComponent,
    LoserModalComponent,
    StakingComponent,
    StakeCardComponent,
    HarvestCardComponent,
    TicketsBoughtModalComponent,
    StakingInfoComponent
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
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [
    StatsService,
    PlatformCheckerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }