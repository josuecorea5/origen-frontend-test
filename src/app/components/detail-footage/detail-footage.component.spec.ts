import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFootageComponent } from './detail-footage.component';

describe('DetailFootageComponent', () => {
  let component: DetailFootageComponent;
  let fixture: ComponentFixture<DetailFootageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFootageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
