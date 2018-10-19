import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessVerifyEmailComponent } from './sucess-verify-email.component';

describe('SucessVerifyEmailComponent', () => {
  let component: SucessVerifyEmailComponent;
  let fixture: ComponentFixture<SucessVerifyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessVerifyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
