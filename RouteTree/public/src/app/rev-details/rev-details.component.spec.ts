import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevDetailsComponent } from './rev-details.component';

describe('RevDetailsComponent', () => {
  let component: RevDetailsComponent;
  let fixture: ComponentFixture<RevDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
