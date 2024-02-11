import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserProfileSkeletonLoaderComponent } from './github-user-profile-skeleton-loader.component';

describe('GithubUserProfileSkeletonLoaderComponent', () => {
  let component: GithubUserProfileSkeletonLoaderComponent;
  let fixture: ComponentFixture<GithubUserProfileSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserProfileSkeletonLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUserProfileSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
