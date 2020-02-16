import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAngularComponent } from './image-angular.component';

describe('ImageAngularComponent', () => {
  let component: ImageAngularComponent;
  let fixture: ComponentFixture<ImageAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
