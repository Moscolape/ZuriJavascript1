const first = prompt('Enter your first number');

    if (isNaN(first) || first == "") {
        alert('You did not input a number 🤦‍♂️');
    }

    else if (first == null) {
        alert('See you next time ✌');
    }

    else {

        let second = prompt('What arithmetic operation do you want to perform? (+ or - or / or *)');

        if (second !== '+' && second !== '-' && second !== '/' && second !== '*') {
            alert('You did not input any of the recommended arithmetic operations!');
        }

        else if (second == "") {
            alert('You did not input an arithmetic operation 🤦‍♂️');
        }

        else if (second == null) {
            alert('Incomplete arithmetic operation! See you next time ✌');
        }
        
        else {

            const third = prompt('Enter your second number');
    
    
            if (isNaN(third)) {
                alert('Sorry! You did not input a number. Try doing it right next time 👍');
            }

            else if (third == "") {
                alert('You did not input a second number 🤦‍♂️');
            }
    
            else if (third == null) {
                alert('Incomplete arithmetic operation! See you next time ✌');
            }

            else {
                
                let value = first + second + third;
                
                let result = eval(value);
        
                alert(` ${value} = ${result}`);
            }
     
        }

    }
