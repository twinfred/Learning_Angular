import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBrandComponent } from './pro-brand.component';

describe('ProBrandComponent', () => {
  let component: ProBrandComponent;
  let fixture: ComponentFixture<ProBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
