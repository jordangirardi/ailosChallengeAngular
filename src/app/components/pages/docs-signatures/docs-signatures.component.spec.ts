import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsAssignaturesComponent } from './docs-signatures.component';

describe('DocsAssignaturesComponent', () => {
  let component: DocsAssignaturesComponent;
  let fixture: ComponentFixture<DocsAssignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsAssignaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsAssignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
