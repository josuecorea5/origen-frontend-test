import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootageItemComponent } from './footage-item.component';

describe('FootageItemComponent', () => {
  let component: FootageItemComponent;
  let fixture: ComponentFixture<FootageItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootageItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
