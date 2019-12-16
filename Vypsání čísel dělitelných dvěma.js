// největší společný dělitel
function f(a,b){
	var x = a
	var y = 1
	var z = 1
	while (y > 0 || z > 0){
		x = x - 1
		y = a%x
		z = b%x
	}
	return x
}

// nejmenší společný násobek
function lcm_two_numbers(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));
