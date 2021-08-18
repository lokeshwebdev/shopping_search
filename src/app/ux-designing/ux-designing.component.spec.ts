import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UXDesigningComponent } from './ux-designing.component';

describe('UXDesigningComponent', () => {
  let component: UXDesigningComponent;
  let fixture: ComponentFixture<UXDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UXDesigningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UXDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
