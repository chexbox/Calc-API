function calc(in) {
  var cons = []; //stores constants
  var oper = []; //stores operators
  var vari = []; //stores variables
  var order = []; //stores order of consts, opers, and vars
  var a = 0; //counter for which character you're on
  var length;
  var last; //stores what kind of charater was the last
  while (a < in.length) { // loop for picking apart input
    if (in[a] == "0" || in[a] == "1" || in[a] == "2" || in[a] == "3" || in[a] == "4" || in[a] == "5" || in[a] == "6" || in[a] == "7" || in[a] == "8" || in[a] == "9") {
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
    a += 1;
  };
};
