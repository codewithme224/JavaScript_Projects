(function() {
  let screen = document.querySelector('.screen');
  let buttons = document.querySelectorAll('.btn');
  let clear = document.querySelector('.btn-clear');
  let equal = document.querySelector('.btn-equal');

  // Function that checks the button clicked and adds the value to the screen
  buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
      let value = e.target.dataset.num;
      screen.value += value;
    })
  });

  // Function that evaluates the expression and displays the result
  equal.addEventListener('click', function(e) {
    if (screen.value === '') {
      screen.value = '';
    } else {
      let answer = eval(screen.value); // eval() evaluates the expression
      console.log(answer);
      screen.value = answer;
    }
  });
  
  // Function that clears the screen
  clear.addEventListener('click', function(e) {
    screen.value = '';
  });



})();