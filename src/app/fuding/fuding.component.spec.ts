import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FudingComponent } from './fuding.component';

describe('FudingComponent', () => {
  let component: FudingComponent;
  let fixture: ComponentFixture<FudingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FudingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FudingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
