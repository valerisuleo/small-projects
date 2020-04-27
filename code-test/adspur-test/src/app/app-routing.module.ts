import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/users/index/index.component';
import { ShowComponent } from './views/users/show/show.component';


const routes: Routes = [
    { path: 'users/:id', component:  ShowComponent},
    { path: 'users', component:  IndexComponent},
    { path: '**', redirectTo: 'users' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
