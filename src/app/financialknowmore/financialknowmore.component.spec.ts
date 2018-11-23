import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialknowmoreComponent } from './financialknowmore.component';

describe('FinancialknowmoreComponent', () => {
  let component: FinancialknowmoreComponent;
  let fixture: ComponentFixture<FinancialknowmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialknowmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialknowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
