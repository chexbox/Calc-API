function calc(in) {
  var usablecons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  var usableoper = ["+", "-", "*", "/", "(", ")", "|", "=", "^", ""];
  var cons = []; //stores constants
  var oper = []; //stores operators
  var vari = []; //stores variables
  var order = []; //stores order of consts, opers, and vars
  var a = 0; //counter for which character you're on
  var length;
  var last; //stores what kind of charater was the last
  while (a < in.length) { // loop for picking apart input
    if (usablecons.indexOf(in[a]) > -1) {
      if (last == "number") {
        length += 1;
      } else {
        if (last == "operator") {
          oper.push(a.substring(a - ( length + 1), a - 1));
          order.push("oper")
        };
        if (last == "variable") {
          oper.push(a.substring(a - ( length + 1), a - 1));
          order.push("var")
        };
        length = 0;
        last = "number";
      };
    };
    if () {
        
    };
    a += 1;
  };
};
