import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevAuthorComponent } from './rev-author.component';

describe('RevAuthorComponent', () => {
  let component: RevAuthorComponent;
  let fixture: ComponentFixture<RevAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
