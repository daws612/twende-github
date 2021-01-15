import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { RepoDetailsDialogComponent, RepoDetailsDialogModel } from 'app/dialogs/repo-details-dialog/repo-details-dialog.component';
import { Repositories } from 'app/models/Repositories';
import { DataService } from 'app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { merge, of as observableOf, Subscription } from 'rxjs';
import { debounceTime, startWith, delay, switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'actions'];
  dataSource = new MatTableDataSource();
  loading: boolean = true;
  firebaseRepos;

  constructor(
    private dataService: DataService,
    public spinner: NgxSpinnerService,
    public dialog: MatDialog,
    public toastr: ToastrService,) { }

  ngOnInit(): void {
    this._fetchGithubRepositories();
  }

  ngOnDestroy() {
  }

  _fetchGithubRepositories() {
    merge()
      .pipe(
        debounceTime(500),
        startWith({}),
        delay(1),
        switchMap(() => {
          this.showSpinner("reposTableSpinner");
          return this.dataService.getRepositories();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.hideSpinner("reposTableSpinner");
          return this._mapData(data);
        }),
        catchError(() => {
          this.hideSpinner("reposTableSpinner");
          return observableOf([]);
        })
      ).subscribe(newData => {
        this._subscribeData(newData);

      });
  }

  _mapData(data) {
    return data.items;
  }

  _subscribeData(newData) {
    this.getReposFirebase(newData);
  }

  showSpinner(name) {
    this.loading = true;
    setTimeout(() => {
      this.spinner.show(name);
    }, 0);
  }

  hideSpinner(name) {
    this.loading = false;
    setTimeout(() => {
      this.spinner.hide(name);
    }, 1);
  }

  showRepoDetailsInDialog(repo: Repositories) {
    const dialogData = new RepoDetailsDialogModel(repo);

    const dialogRef = this.dialog.open(RepoDetailsDialogComponent, {
      data: dialogData
    });
  }

  toggleFavorite(event, repo: Repositories) {
    event.stopPropagation();
    repo.is_favorite = !repo.is_favorite;

    this.dataService.createOrUpdateRepoData(repo).then(res => {
      this.showSuccessMessage(`${repo.name} has been ${repo.is_favorite ? 'added to' : 'removed from'} your favorites`);
    })
      .catch(err => {
        this.showErrorMessage(err);
      });
  }

  public showSuccessMessage(message: string) {
    this.toastr.success(message, 'Success', { progressBar: true, progressAnimation: 'decreasing', timeOut: 5000 });
  }

  public showErrorMessage(error: any) {
    if (!error)
      return;
    this.toastr.error(error, 'Oops!', {
      closeButton: true, disableTimeOut: true
    });
  }

  getReposFirebase = (githubRepos) =>
    this.dataService
      .getRepos()
      .subscribe(res => (this.mergeFirebaseWithGithub(res, githubRepos)));

  mergeFirebaseWithGithub(firebaseRepos, githubRepos) {
    firebaseRepos.forEach(firebaseRepo => {
      //find repo in githubs list and update its favorite status
      let index = githubRepos.findIndex(x => x.id == firebaseRepo.payload.doc.data().id);
      if (index) githubRepos[index].is_favorite = firebaseRepo.payload.doc.data().is_favorite;
    });

    this.dataSource.data = githubRepos;
    this.hideSpinner("reposTableSpinner");
  }

}