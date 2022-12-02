import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotventComponent } from './repotvent.component';

describe('RepotventComponent', () => {
  let component: RepotventComponent;
  let fixture: ComponentFixture<RepotventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepotventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepotventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
