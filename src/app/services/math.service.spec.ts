import { MathService } from "./math.service";
let mathService!: MathService;
fdescribe("MathService", () => {
  beforeEach(() => {
    const loggerSpy = jasmine.createSpyObj("LoggerService", ["logger"]);
    mathService = new MathService(loggerSpy);
  });
  it("Should work", () => {
    expect(1).toBe(1);
  });
  it("Should add two numbers", () => {
    expect(mathService.additioner(1, 2)).toBe(3);
  });
  it("Should substract two numbers", () => {
    expect(mathService.soustraire(1, 2)).toBe(-1);
  });
});
