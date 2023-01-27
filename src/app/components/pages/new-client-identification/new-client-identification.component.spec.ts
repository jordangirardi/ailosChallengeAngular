import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientIdentificationComponent } from './new-client-identification.component';

describe('NewClientIdentificationComponent', () => {
  let component: NewClientIdentificationComponent;
  let fixture: ComponentFixture<NewClientIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewClientIdentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewClientIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
