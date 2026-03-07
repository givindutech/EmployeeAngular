import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectemployeesComponent } from './projectemployees.component';

describe('ProjectemployeesComponent', () => {
  let component: ProjectemployeesComponent;
  let fixture: ComponentFixture<ProjectemployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectemployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
