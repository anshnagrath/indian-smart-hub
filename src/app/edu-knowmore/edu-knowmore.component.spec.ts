import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EduKnowmoreComponent } from './edu-knowmore.component';

describe('EduKnowmoreComponent', () => {
  let component: EduKnowmoreComponent;
  let fixture: ComponentFixture<EduKnowmoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EduKnowmoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EduKnowmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
