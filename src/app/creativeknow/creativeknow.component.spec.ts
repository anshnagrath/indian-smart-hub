import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeknowComponent } from './creativeknow.component';

describe('CreativeknowComponent', () => {
  let component: CreativeknowComponent;
  let fixture: ComponentFixture<CreativeknowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeknowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeknowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
