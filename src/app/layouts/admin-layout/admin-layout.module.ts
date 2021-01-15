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
import { RepoDetailsDialogComponent } from 'app/dialogs/repo-details-dialog/repo-details-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';

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
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    RepoListComponent,
    RepoDetailsDialogComponent
  ],
  entryComponents: [
    RepoDetailsDialogComponent
  ]
})

export class AdminLayoutModule {}
