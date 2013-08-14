describe("Calculator", function() {
             describe("calculateResult function", function() {
                          it("should return sum of two numbers when '+' is passed as operator", function() {
                                 expect(calculateResult(3, 2, '+')).toEqual(5);
                             }
                          );
                          it("should return difference of two numbers when '-' is passed as operator", function() {
                                 expect(calculateResult(3, 2, '-')).toEqual(1);
                             }
                          );
                          it("should return product of two numbers when '*' is passed as operator", function() {
                                 expect(calculateResult(2, 3, '*')).toEqual(6);
                             }
                          );
                          it("should return quotient of two numbers when '/' is passed as operator", function() {
                                 expect(calculateResult(6, 2, '/')).toEqual(3);
                             }
                          );
                      }
                     );
             describe("returnFloat function", function() {
                          it("should return float value when string is passed", function() {
                                 expect(returnFloat("5")).toEqual(5);
                             }
                          );
                          it("should throw error when an invalid input is given", function() {
                                 test = function() {
                                     returnFloat("abc");
                                 }
                                 expect(test).toThrow();
                             }
                            );
                          it("should throw error when no input is given", function() {
                                 test = function() {
                                     returnFloat();
                                 }
                                 expect(test).toThrow();
                             }
                            );
                      }
                     );
             describe("returnOperator function", function() {
                          it("should return operator value when string is passed", function() {
                                 expect(returnOperator("+")).toEqual("+");
                             }
                            );
                          it("should throw error when an invalid input is given", function() {
                                 test = function() {
                                     returnOperator("/a");
                                 }
                                 expect(test).toThrow();
                             }
                            );
                          it("should throw error when no input is given", function() {
                                 test = function() {
                                     returnOperator();
                                 }
                                 expect(test).toThrow();
                             }
                            );
                      }
                     );
             
         }
);
