import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefauldButtonComponent } from './defauld-button.component';

describe('DefauldButtonComponent', () => {
  let component: DefauldButtonComponent;
  let fixture: ComponentFixture<DefauldButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefauldButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefauldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
