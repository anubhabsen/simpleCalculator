      console.log("Discovering the functionalities of javascript");
      var op1, op2, op, opdone = 0;
      function operation(theOperation){
        document.getElementById('display').innerHTML += theOperation;
        opdone = 0;
      }
      function calculate(){
        if(eval(isNaN(eval(document.getElementById('display').innerHTML))))
        {
          document.getElementById('display').innerHTML = "NaN value";
        }
        else
          document.getElementById('display').innerHTML = eval(document.getElementById('display').innerHTML);
        opdone = 1;
      }
      function clearer(){
        document.getElementById('display').innerHTML = 00000000000000000;
      }
      function operand(theButton){
        if(parseFloat(document.getElementById('display').innerHTML) == 0 || opdone == 1)
          document.getElementById('display').innerHTML = theButton;
        else 
          document.getElementById('display').innerHTML += theButton;
        opdone = 0;
      }
