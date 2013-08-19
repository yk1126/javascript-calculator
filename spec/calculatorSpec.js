
describe("Javascript expression", function() {
             describe("expression object", function() {
                          it("should have member variables number1, number2 and operator", function() {
                                 expect(expression.number1).toBeDefined();
                                 expect(expression.number2).toBeDefined();
                                 expect(expression.operator).toBeDefined();
                             }
                          );
                          it("should have member functions allFilled() and getResult()", function() {
                                 expect(expression.allFilled).toBeDefined();
                                 expect(expression.getResult).toBeDefined();
                             }
                            );
                          describe("expression.allFilled function", function() {
                                       beforeEach(function() {
                                                      expression.number1 = 6;
                                                      expression.number2 = 3;
                                                  }
                                                 );
                                       it("should return false if some member value is missing", function() {
                                              expect(expression.allFilled()).toBeFalsy;
                                          }
                                         );
                                       it("should return true if all member values are present", function() {
                                              expression.operator = "+";
                                              expect(expression.allFilled()).toBeTruthy;
                                          }
                                         );
                                   }
                                  );
                          describe("expression.getResult function", function() {
                                       beforeEach(function() {
                                                      expression.number1 = 6;
                                                      expression.number2 = 3;
                                                  }
                                                 );
                                       it("should give sum of two numbers when '+' is passed as operator", function() {
                                              expression.operator = "+";
                                              expect(expression.getResult()).toEqual(9);
                                          }
                                         );
                                       it("should give difference of two numbers when '-' is passed as operator", function() {
                                              expression.operator = "-";
                                              expect(expression.getResult()).toEqual(3);
                                          }
                                         );
                                       it("should give product of two numbers when '*' is passed as operator", function() {
                                              expression.operator = "*";
                                              expect(expression.getResult()).toEqual(18);
                                          }
                                         );
                                       it("should give quotient of two numbers when '/' is passed as operator", function() {
                                              expression.operator = "/";
                                              expect(expression.getResult()).toEqual(2);
                                          }
                                         );
                                   }
                                  );
                      }
                     );
             describe("getNumber function", function() {
                          it("should return valid number (argument) when string is passed", function() {
                                 expect(getNumber("5")).toEqual(5);
                             }
                          );
                          it("should throw error when an invalid number is given as argument", function() {
                                 test = function() {
                                     getNumber("abc");
                                 }
                                 expect(test).toThrow();
                             }
                            );
                          it("should throw error when no input is given", function() {
                                 test = function() {
                                     getNumber();
                                 }
                                 expect(test).toThrow();
                             }
                            );
                      }
                     );
             describe("getOperator function", function() {
                          it("should give back the operator when string is passed as an argument", function() {
                                 expect(getOperator("+")).toEqual("+");
                             }
                            );
                          it("should throw error when an invalid operator is given as an argument", function() {
                                 test = function() {
                                     getOperator("/a");
                                 }
                                 expect(test).toThrow();
                             }
                            );
                          it("should throw error when no input is given", function() {
                                 test = function() {
                                     getOperator();
                                 }
                                 expect(test).toThrow();
                             }
                            );
                      }
                     );
         }
);
