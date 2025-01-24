import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRuleComponent } from './admin-rule.component';

describe('AdminRuleComponent', () => {
  let component: AdminRuleComponent;
  let fixture: ComponentFixture<AdminRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
