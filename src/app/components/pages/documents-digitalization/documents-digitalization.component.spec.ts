import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsDigitalizationComponent } from './documents-digitalization.component';

describe('DocumentsDigitalizationComponent', () => {
  let component: DocumentsDigitalizationComponent;
  let fixture: ComponentFixture<DocumentsDigitalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsDigitalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsDigitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
