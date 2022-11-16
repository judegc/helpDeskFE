import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FavoriteQueueComponent } from './favorite-queue.component';

describe('FavoriteQueueComponent', () => {
  let component: FavoriteQueueComponent;
  let fixture: ComponentFixture<FavoriteQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
