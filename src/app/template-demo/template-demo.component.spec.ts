import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDempComponent } from './template-demo.component';

describe('TemplateDempComponent', () => {
  let component: TemplateDempComponent;
  let fixture: ComponentFixture<TemplateDempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
