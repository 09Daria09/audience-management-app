import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiencesListComponent } from './audiences-list.component';

describe('AudiencesListComponent', () => {
  let component: AudiencesListComponent;
  let fixture: ComponentFixture<AudiencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiencesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudiencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
