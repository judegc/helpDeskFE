import { ComponentFixture, TestBed } from '@angular/core/testing';


import { BookmarkedQueueComponent } from './bookmarked-queue.component';

describe('BookmarkedQueueComponent', () => {
  let component: BookmarkedQueueComponent;
  let fixture: ComponentFixture<BookmarkedQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkedQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkedQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
