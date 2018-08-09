import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppErrorHandler } from './common/app-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';

import { ClanService } from './services/clan.service';
import { ClanComponent } from './clan/clan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { ClanPlayerInfoComponent } from './clan-player-info/clan-player-info.component';
import { PlayerChestsComponent } from './player-chests/player-chests.component';

library.add(faArrowDown, faArrowUp, faPlus, faMinus);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    PlayerComponent,
    ClanComponent,
    PlayerSearchComponent,
    ClanPlayerInfoComponent,
    PlayerChestsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'player',
        component: PlayerSearchComponent
      },
      {
        path: 'player/:id',
        component: PlayerComponent
      },
      {
        path: 'clan/:id',
        component: ClanComponent
      },
      {
        path: 'clan',
        component: ClanComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
    ])
  ],
  providers: [
    ClanService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
