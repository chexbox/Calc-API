// Based off https://github.com/joker314/bidmas-solver/
function spl(input) {
  let cons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  let oper = ["+", "-", "*", "/", "^"];
  let operp = {"+": 2, "-": 2, "*": 1, "/": 1, "^": 0}; // order of opeations
  let oper2 = ["sin", "cos", "tan", "floor", "ceiling"];
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
          out[index].p = "0";
        };
        index += 1;
        length = 0;
        last = "number";
      };
    };
    if (variable.indexOf(input[a]) > -1) {
      out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
      if (last == "operator") {
        out[index].p = "0";
      };
      index += 1;
      length = 0;
      last = "variable";
    };
    if (oper.indexOf(input[a]) > -1) {
      if (last !== ""){
        out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
      };
      if (last == "operator") {
        out[index].p = "0";
      };
      index += 1;
      length = 0;
      last = "operator";
      };
    };
    a += 1;
  };
  out[index] = {"value": input.substring(a - (length + 1), a), "type": last};
  if (last == "operator") {
    out[index].p = "0";
  };
  out.l = index;
  return (out);
};

function step(inp) {
  let it = inp; 
  let oprs = {
    "+": function(a, b) {return a+b},
    "-": function(a, b) {return a-b},
    "*": function(a, b) {return a*b},
    "/": function(a, b) {return a/b},
    "^": function(a, b) {return Math.pow(a, b)}
  };
  let index = 1;
  let found = false;
  let p;
  let pindex;
  while (found !== true) {
    if (it[index].type == "operator" && it[index - 1].type !== "variable" && it[index + 1].type !== "variable") {
      if (it[index].p > p) {
        p = it[index].p;
        pindex = index;
      };
    };
    if (index == it.l) {
      found = true;
    };
    index += 1;
  };
  it[index].value == oprs[it[index].value](it[index-1]);
  it[index-1].type = "dead";
  it[index+1].type = "dead";
};
