import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAttorneyFormComponent } from './client-attorney-form.component';

describe('ClientAttorneyFormComponent', () => {
  let component: ClientAttorneyFormComponent;
  let fixture: ComponentFixture<ClientAttorneyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientAttorneyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientAttorneyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
