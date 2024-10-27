import { Routes } from '@angular/router';
import { ConsHomeComponent } from '../components/cons-home/cons-home.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ViewClientsComponent } from '../components/view-clients/view-clients.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: ConsHomeComponent, pathMatch:'full'},
    { path: 'profile', component: ProfileComponent },
    { path: 'viewClients', component: ViewClientsComponent },
    { path: '**', component: NotFoundComponent }
];
