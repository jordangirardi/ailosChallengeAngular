import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLegallyResponsibleFormComponent } from './client-legally-responsible-form.component';

describe('ClientLegallyResponsibleFormComponent', () => {
  let component: ClientLegallyResponsibleFormComponent;
  let fixture: ComponentFixture<ClientLegallyResponsibleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientLegallyResponsibleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLegallyResponsibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
