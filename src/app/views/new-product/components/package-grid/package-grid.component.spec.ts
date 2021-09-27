import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageGridComponent } from './package-grid.component';

describe('PackageGridComponent', () => {
  let component: PackageGridComponent;
  let fixture: ComponentFixture<PackageGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
