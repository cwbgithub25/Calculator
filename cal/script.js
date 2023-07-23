 let input = document.getElementById('inputBox');
 let button = document.querySelectorAll('buttons');
 let string = "";
 let arr = Array.from(buttons);
 arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerrHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerrHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if (e.target.innerrHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerrHTML;
            input.value = string;
        }

    });
 });