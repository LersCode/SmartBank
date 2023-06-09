import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilentCallbackComponent } from './silent-callback.component';

describe('SilentCallbackComponent', () => {
  let component: SilentCallbackComponent;
  let fixture: ComponentFixture<SilentCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilentCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilentCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
