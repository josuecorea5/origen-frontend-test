import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFootageComponent } from './list-footage.component';

describe('ListFootageComponent', () => {
  let component: ListFootageComponent;
  let fixture: ComponentFixture<ListFootageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFootageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFootageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
