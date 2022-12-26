
{
	// Temporary stack
	var temp = [];

	// Iterate until S becomes empty
	while (S.length!=0) {

		// Push the top element of S
		// into the stack temp
		temp.push(S[S.length-1]);

		// Pop the top element of S
		S.pop();
	}

	// Push N into the stack S
	S.push(N);

	// Iterate until temp becomes empty
	while (temp.length!=0) {

		// Push the top element of
		// temp into the stack S
		S.push(temp[temp.length-1]);

		// Pop the top element of temp
		temp.pop();
	}

	// Print the elements of S
	while (S.length!=0) {
		document.write( S[S.length-1] + " ");
		S.pop();
	}
}

// Driver Code

// Input
var S = [];
S.push(5);
S.push(4);
S.push(3);
S.push(2);
S.push(1);
var N = 7;
insertToBottom(S, N);


