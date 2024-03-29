import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemThumbnailComponent } from './item-thumbnail.component';

describe('ItemThumbnailComponent', () => {
  let component: ItemThumbnailComponent;
  let fixture: ComponentFixture<ItemThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
