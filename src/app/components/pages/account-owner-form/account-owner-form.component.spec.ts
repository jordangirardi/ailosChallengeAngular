import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOwnerFormComponent } from './account-owner-form.component';

describe('AccountOwnerFormComponent', () => {
  let component: AccountOwnerFormComponent;
  let fixture: ComponentFixture<AccountOwnerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountOwnerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountOwnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
