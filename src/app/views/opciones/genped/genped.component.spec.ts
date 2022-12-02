import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenpedComponent } from './genped.component';

describe('GenpedComponent', () => {
  let component: GenpedComponent;
  let fixture: ComponentFixture<GenpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenpedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
