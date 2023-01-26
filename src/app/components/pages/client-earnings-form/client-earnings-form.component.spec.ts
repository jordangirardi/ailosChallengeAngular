import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEarningsFormComponent } from './client-earnings-form.component';

describe('ClientEarningsFormComponent', () => {
  let component: ClientEarningsFormComponent;
  let fixture: ComponentFixture<ClientEarningsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientEarningsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientEarningsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
