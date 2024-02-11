import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserReposSkeletonLoaderComponent } from './github-user-repos-skeleton-loader.component';

describe('GithubUserReposSkeletonLoaderComponent', () => {
  let component: GithubUserReposSkeletonLoaderComponent;
  let fixture: ComponentFixture<GithubUserReposSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserReposSkeletonLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUserReposSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
