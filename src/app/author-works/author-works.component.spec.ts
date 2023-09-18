import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorWorksComponent } from './author-works.component';

describe('AuthorWorksComponent', () => {
  let component: AuthorWorksComponent;
  let fixture: ComponentFixture<AuthorWorksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorWorksComponent]
    });
    fixture = TestBed.createComponent(AuthorWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
