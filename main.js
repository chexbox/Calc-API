// slightly based off https://github.com/joker314/bidmas-solver/
function split(input) {
  var cons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  var oper = ["+", "-", "*", "/", "(", ")", "|", "=", "^", ""];
  var variable = ["x", "y"]
  var out = {};
  var a = 0; //counter for which character you're on
  var index = 0;
  var length;
  var last; //stores what kind of charater was the last
  while (a < input.length) { // loop for picking apart input
    if (cons.indexOf(input[a]) > -1) {
      if (last == "number") {
        length += 1;
      } else {
        out[index] = {"value": input.substring(a - ( length + 1), a - 1), "type": last};
        if (last == "operator") {
          out[index].p = "0"
        };
        index += 1;
        length = 0;
        last = "number";
      };
    };
    if (variable.indexOf(input[a]) > -1) {
      if (last == "variable") {
        length += 1;
      } else {
        out[index] = {"value": input.substring(a - ( length + 1), a - 1)), "type": last};
        if (last == "operator") {
          out[index].p = "0"
        };
        index += 1;
        length = 0;
        last = "variable";
      };
    };
    a += 1;
  };
};
