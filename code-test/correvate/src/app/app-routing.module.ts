import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: 'pet', 
        loadChildren: () => import('./components/pet/pet.module').then(m => m.PetModule)
    },
    {
        path: 'login', 
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
    },
    { path: '**', redirectTo: 'pet/find' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
