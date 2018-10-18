// Based off https://github.com/joker314/bidmas-solver/
function spl(input) {
  let cons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  let oper = ["+", "-", "*", "/", "^"];
  let operp = {"+": 2, "-": 2, "*": 1, "/": 1, "^": 0}; // order of opeations
  let oper2 = ["sin", "cos", "tan", "floor", "ceiling"];
  let equal = ["="]
  let variable = ["x", "y"]
  let out = [];
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
          out[index].p = oper2[out[index].value];
        };
        index += 1;
        length = 0;
        last = "number";
      };
    };
    if (variable.indexOf(input[a]) > -1) {
      out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
      if (last !== "operator"){
        index += 1;
        out[index] = {"value": "*", "type": "operator", "p": 1};
      }
      else {
        out[index].p = "0";
      };
      index += 1;
      length = 0;
      last = "variable";
    };
    if (equal.indexOf(input[a]) > -1) {
      out[index] = {"value": input.substring(a - ( length + 1), a), "type": last};
      if (last == "operator") {
        out[index].p = "0";
      };
      index += 1;
      length = 0;
      last = "equal";
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
    a += 1;
  };
  out[index] = {"value": input.substring(a - (length + 1), a), "type": last};
  if (last == "operator") {
    out[index].p = "0";
  };
  return out;
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
  for (index=1; index < it.length; index++) {
    if (it[index].type == "operator" && it[index - 1].type !== "variable" && it[index + 1].type !== "variable") {
      if (it[index].p > p) {
        p = it[index].p;
        pindex = index;
      };
    };
    if (index >= it.length) {
      found = true;
    };
  };
  it[pindex].value == oprs[it[pindex].value](it[pindex-1].value, it[pindex+1].value);
  delete it[pindex-1];
  delete it[pindex+1];
  return oprs;
};
