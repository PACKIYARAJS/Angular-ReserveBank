import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRupeeComponent } from './admin-rupee.component';

describe('AdminRupeeComponent', () => {
  let component: AdminRupeeComponent;
  let fixture: ComponentFixture<AdminRupeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRupeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRupeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
