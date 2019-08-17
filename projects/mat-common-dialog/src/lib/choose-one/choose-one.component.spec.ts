import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseOneComponent } from './choose-one.component';

describe('ChooseOneComponent', () => {
  let component: ChooseOneComponent;
  let fixture: ComponentFixture<ChooseOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
