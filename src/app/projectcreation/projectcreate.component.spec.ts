import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcreateComponent } from './projectcreate.component';

describe('ProjectcreateComponent', () => {
  let component: ProjectcreateComponent;
  let fixture: ComponentFixture<ProjectcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectcreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
