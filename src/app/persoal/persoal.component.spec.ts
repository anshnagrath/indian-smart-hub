import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoalComponent } from './persoal.component';

describe('PersoalComponent', () => {
  let component: PersoalComponent;
  let fixture: ComponentFixture<PersoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
