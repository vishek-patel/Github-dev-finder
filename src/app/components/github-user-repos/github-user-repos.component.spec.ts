import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserReposComponent } from './github-user-repos.component';

describe('GithubUserReposComponent', () => {
  let component: GithubUserReposComponent;
  let fixture: ComponentFixture<GithubUserReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserReposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubUserReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
