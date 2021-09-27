import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostGridComponent } from './cost-grid.component';

describe('CostGridComponent', () => {
  let component: CostGridComponent;
  let fixture: ComponentFixture<CostGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
