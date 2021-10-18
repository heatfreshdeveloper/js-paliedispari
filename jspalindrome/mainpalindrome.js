// creo una funzione per eseguire il reverse della stringa
function reverse( str )
{
	// con una variabile "salvo" il valore della stringa reverse
	let rev_str = "";
    // utilizzo un ciclo for che tramite un indice percorre la stringa dalla fine all'inizio
	for( let i = str.length-1 ;i >= 0 ;i--)
	{
	rev_str+= str[i];
	}
	// restituisco il valore della stringa reverse
	return rev_str;
}

// creo una funzione per verificare se la stringa è un palindromo 
function is_palindrome( str )
{
	reverse_str = reverse(str);
	/* creo una condizione che verifichi se la stringa che inserisco è uguale alla stringa reverse */
	if( reverse_str === str) {
	    alert("La stringa che hai inserito è un palindromo!");
	} else {
	    alert("La stringa che hai inserito non è un palindromo!")
	}
}

let test = prompt("Inserisci una parola");
is_palindrome(test);