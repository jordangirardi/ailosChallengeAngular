import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideInfoBlockComponent } from './side-info-block.component';

describe('SideInfoBlockComponent', () => {
  let component: SideInfoBlockComponent;
  let fixture: ComponentFixture<SideInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideInfoBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
