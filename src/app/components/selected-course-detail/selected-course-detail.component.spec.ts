import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCourseDetailComponent } from './selected-course-detail.component';

describe('SelectedCourseDetailComponent', () => {
  let component: SelectedCourseDetailComponent;
  let fixture: ComponentFixture<SelectedCourseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCourseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
