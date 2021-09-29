import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroproductoComponent } from './registroproducto.component';

describe('RegistroproductoComponent', () => {
  let component: RegistroproductoComponent;
  let fixture: ComponentFixture<RegistroproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
