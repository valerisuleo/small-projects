import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { OpzioniComponent } from './opzioni/opzioni.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IntermediarioComponent } from './intermediario/intermediario.component';
import { CapogruppoComponent } from './capogruppo/capogruppo.component';
import { TeamembersComponent } from './teamembers/teamembers.component';
import { CdispezioneComponent } from './cdispezione/cdispezione.component';
import { StampaDatiComponent } from './stampa-dati/stampa-dati.component';

const appRoutes: Routes = [
  { path: 'stampa', component: StampaDatiComponent },
  { path: 'cdispezione', component: CdispezioneComponent },
  { path: 'team', component: TeamembersComponent },
  { path: 'capogruppo', component: CapogruppoComponent },
  { path: 'intermediario', component: IntermediarioComponent },
  { path: 'progress', component: ProgressTrackerComponent },
  { path: 'opzioni', component: OpzioniComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
