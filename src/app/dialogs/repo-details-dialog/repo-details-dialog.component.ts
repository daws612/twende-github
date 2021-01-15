import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repositories } from 'app/models/Repositories';

@Component({
  selector: 'app-repo-details-dialog',
  templateUrl: './repo-details-dialog.component.html',
  styleUrls: ['./repo-details-dialog.component.css']
})
export class RepoDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RepoDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RepoDetailsDialogComponent) { }

    repo: Repositories;

  ngOnInit(): void {
    this.repo = this.data.repo;
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close();
  }

}

export class RepoDetailsDialogModel {
 
  constructor(public repo: Repositories) {
  }
}
