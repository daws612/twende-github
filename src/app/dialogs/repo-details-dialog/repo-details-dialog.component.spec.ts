import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailsDialogComponent } from './repo-details-dialog.component';

describe('RepoDetailsDialogComponent', () => {
  let component: RepoDetailsDialogComponent;
  let fixture: ComponentFixture<RepoDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
