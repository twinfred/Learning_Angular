import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevAllComponent } from './rev-all.component';

describe('RevAllComponent', () => {
  let component: RevAllComponent;
  let fixture: ComponentFixture<RevAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
