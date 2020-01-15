import { async, TestBed } from '@angular/core/testing';
import { BrokersModule } from './brokers.module';

describe('BrokersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrokersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BrokersModule).toBeDefined();
  });
});
