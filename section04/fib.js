function fib(n) {
  if (n === 0 || n === 1 ) return n ;
  return fib( n - 1 ) + + fib( n - 2 );
}
for ( var i = 0 ; i <= 10 ; i++) console.log(fib(i));
