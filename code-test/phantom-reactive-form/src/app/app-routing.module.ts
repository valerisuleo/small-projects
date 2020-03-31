import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './views/overview/overview.component';
import { ResultsComponent } from './views/results/results.component';


const routes: Routes = [
    {path: 'results', component: ResultsComponent},
    {path: 'overview', component: OverviewComponent},
    {path: '**', redirectTo: 'overview'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
