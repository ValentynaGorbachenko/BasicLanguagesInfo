/*
1.  Arithmetic operators
2.  Assignment operators
3.  String operators
4.  Comparasion operators 
5.  Logical operators
6.  Type operators
7.  Bitwise operators
*/

/****** Arithmetic operators ******/
/*
	Operator	Description
	+			Addition
	-			Subtraction
	*			Multiplication
	/			Division
	%			Modulus
	++			Increment
	--			Decrement
*/

/****** Assignment operators ******/
/*
	Operator	Example		Same As
	=			x = y		x = y
	+=			x += y		x = x + y
	-=			x -= y		x = x - y
	*=			x *= y		x = x * y
	/=			x /= y		x = x / y
	%=			x %= y		x = x % y
	<<=			x <<= y		x = x << y
	>>=			x >>= y		x = x >> y
	>>>=		x >>>= y	x = x >>> y
	&=			x &= y		x = x & y
	^=			x ^= y		x = x ^ y
	|=			x |= y		x = x | y
	**=			x **= y		x = x ** y
*/

/****** String operators ******/

/*
	txt1 = "John";
	txt2 = "Doe";
	txt3 = txt1 + " " + txt2; => "John Doe"

	txt1 = "What a very ";
	txt1 += "nice day"; => "What a very nice day"

	x = 5 + 5; => "10"
	y = "5" + 5; => "55"
	z = "Hello" + 5; => "Hello5"
	'Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.'
	`Fifteen is ${a + b} and\nnot ${2 * a + b}.`
*/

/****** Comparasion operators ******/

/*
	Operator	Description
	==			equal to
	===			equal value and equal type
	!=			not equal
	!==			not equal value or not equal type
	>			greater than
	<			less than
	>=			greater than or equal to
	<=			less than or equal to
	?			ternary operator
*/

/****** Logical operators ******/

/*
	Operator	Description
	&&			logical and
	||			logical or
	!			logical not
*/

/****** Type operators ******/

/*
	Operator	Description
	typeof		Returns the type of a variable
	instanceof	Returns true if an object is an instance of an object type
*/

/****** Bitwise operators ******/

/*
	Operator	Description				Example		Same as			Result	Decimal
	&			AND						5 & 1		0101 & 0001		0001	 1
	|			OR						5 | 1		0101 | 0001		0101	 5
	~			NOT						~ 5	 		~0101			1010	 10
	^			XOR						5 ^ 1		0101 ^ 0001		0100	 4
	<<			Zero fill left shift	5 << 1		0101 << 1		1010	 10
	>>			Signed right shift		5 >> 1		0101 >> 1		0010	  2
	>>>			Zero fill right shift	5 >>> 1		0101 >>> 1		0010	  2
*/
