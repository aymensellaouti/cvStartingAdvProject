import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';
import { LoggerService } from './logger.service';

let service: MathService;
let loggerSpyOn: jasmine.Spy;
let logger: LoggerService;
fdescribe('MathService', () => {
  beforeEach(async () => {
    /* const logger = new LoggerService(); */
    await TestBed.configureTestingModule({
      providers: [LoggerService, MathService],
    });
    const loggerSpy = jasmine.createSpyObj<LoggerService>('LoggerService', [
      'logger',
    ]);
    /*
      const loggerSpy = jasmine.createSpyObj<LoggerService>('LoggerService', [
          'logger',
      ]);
      service = new MathService(loggerSpy);
      */
    logger = TestBed.inject(LoggerService);
    service = TestBed.inject(MathService);
    loggerSpyOn = spyOn(logger, 'logger');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 2 numbers', () => {
    expect(service.add(2, 3)).toBe(5);
    expect(loggerSpyOn.calls.count()).toBe(1);
    console.log(loggerSpyOn.calls.argsFor(0));

    expect(loggerSpyOn.calls.argsFor(0)).toEqual(['2 + 3 = 5']);
  });
  it('should substract 2 numbers', () => {
    expect(service.substract(2, 3)).toBe(-1);
    expect(loggerSpyOn.calls.count()).toBe(1);
  });
});
