// slightly based off https://github.com/joker314/bidmas-solver/
function spl(input) {
  let cons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  let oper = ["+", "-", "*", "/", "(", ")", "|", "=", "^"];
  let oper2 = ["sin", "cos", "tan", "floor", "ceiling", ""];
  let variable = ["x", "y"]
  let out = {};
  let a = 0; //counter for which character you're on
  let index = 0;
  let length;
  let last; //stores what kind of charater was the last
  while (a < input.length) { // loop for picking apart input
    if (cons.indexOf(input[a]) > -1) {
      if (last == "number") {
        length += 1;
      } else {
        if (last !== ""){
          out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
        };
        if (last == "operator") {
          out[index].p = "0"
        };
        index += 1;
        length = 0;
        last = "number";
      };
    };
    if (variable.indexOf(input[a]) > -1) {
      out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
      if (last == "operator") {
        out[index].p = "0"
      };
      index += 1;
      length = 0;
      last = "variable";
    };
    a += 1;
  };
  out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
  if (last == "operator") {
    out[index].p = "0"
  };
  return (out);
};
};
function step(it) {
  let oprs = {
    "+": function(a, b) {return a+b},
    "-": function(a, b) {return a-b},
    "*": function(a, b) {return a*b},
    "/": function(a, b) {return a/b},
    "^": function(a, b) {return Math.pow(a+b)}
  };
  let index = 1;
};
