import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptofConfirmComponent } from './aptofconfirm.component';

describe('ConfirmComponent', () => {
  let component: AptofConfirmComponent;
  let fixture: ComponentFixture<AptofConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptofConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptofConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
