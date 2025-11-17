import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasCompras } from './listas-compras';

describe('ListasCompras', () => {
  let component: ListasCompras;
  let fixture: ComponentFixture<ListasCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListasCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListasCompras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
