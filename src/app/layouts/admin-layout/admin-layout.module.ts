import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { RepoListComponent } from '../../pages/repo-list/repo-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,

    MatTableModule,
    MatRippleModule,
    MatPaginatorModule,
    NgxSpinnerModule,
  ],
  declarations: [
    RepoListComponent,
  ]
})

export class AdminLayoutModule {}
