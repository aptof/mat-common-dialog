import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptofNotifyComponent } from './aptofnotify.component';

describe('NotifyComponent', () => {
  let component: AptofNotifyComponent;
  let fixture: ComponentFixture<AptofNotifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptofNotifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptofNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
