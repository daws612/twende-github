import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns: string[] = ['title', 'author'];
  dataSource = new MatTableDataSource();
  loading: boolean = true;

  constructor(
    private dataService: DataService,
    public spinner: NgxSpinnerService) { }

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
    this.hideSpinner("reposTableSpinner");
    this.dataSource.data = newData;
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
}