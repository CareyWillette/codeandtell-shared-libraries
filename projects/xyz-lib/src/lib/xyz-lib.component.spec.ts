import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyzLibComponent } from './xyz-lib.component';

describe('XyzLibComponent', () => {
  let component: XyzLibComponent;
  let fixture: ComponentFixture<XyzLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyzLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyzLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
