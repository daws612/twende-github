import { Routes } from '@angular/router';
import { RepoListComponent } from 'app/pages/repo-list/repo-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',                 component: RepoListComponent },
    { path: 'repo-list',        component: RepoListComponent },
];
