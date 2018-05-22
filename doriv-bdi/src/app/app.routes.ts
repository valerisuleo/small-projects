import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { OpzioniComponent } from './opzioni/opzioni.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IntermediarioComponent } from './intermediario/intermediario.component';

const appRoutes: Routes = [
  { path: 'intermediario', component: IntermediarioComponent },
  { path: 'progress', component: ProgressTrackerComponent },
  { path: 'opzioni', component: OpzioniComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '**', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
