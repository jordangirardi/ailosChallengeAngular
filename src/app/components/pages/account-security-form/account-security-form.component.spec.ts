import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSecurityFormComponent } from './account-security-form.component';

describe('AccountSecurityFormComponent', () => {
  let component: AccountSecurityFormComponent;
  let fixture: ComponentFixture<AccountSecurityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSecurityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountSecurityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
