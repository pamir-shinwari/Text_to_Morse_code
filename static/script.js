
    text = document.querySelector("#text-area");
    text.addEventListener("keyup", convert)
    function convert(){
        morse = document.querySelector("#morse-area");

        let complete_morse_code = ''


        letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
           'w', 'x', 'y', 'z', ' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

        morse_code = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---',
              '.--.', '--.-', '.-.', '...', ' -', '..-', '...-', '.--', '-..-', '-.--', '--..', '.......', '.----',
              '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.', '-----'];
        user_input = text.value.toLowerCase();




        for ( let letter in user_input){
            for ( let alphabet in letters){
                if (user_input[letter] === letters[alphabet] ){
                   complete_morse_code += " " + morse_code[alphabet];
                }

            }
        }
morse.innerHTML = complete_morse_code

    }


