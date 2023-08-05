var itmlist = document.getElementById("ADDItems");
var form = document.getElementById("addForm");
form.addEventListener('submit', function(e){
    e.preventDefault();

    var name = document.getElementById("itm1").value;
    var des = document.getElementById("itm2").value;
    var price = document.getElementById("itm3").value;
    var quan = document.getElementById("itm4").value;

    var li = document.createElement('li');
    var items = name+' '+des+' '+price+' '+quan+' ';

    li.appendChild(document.createTextNode(items));

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode('BUY 1'));
    li.appendChild(btn);

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode('BUY 2'));
    li.appendChild(btn);

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode('BUY 3'));
    li.appendChild(btn);

    itmlist.appendChild(li);
});
//only change this function
itmlist.addEventListener('click', function(e){
    if(e.target.textContent === 'BUY 1' || e.target.textContent === 'BUY 2' || e.target.textContent === 'BUY 3'){
        var li = e.target.parentElement;
        var buttonsToRemove = li.querySelectorAll("button");
        buttonsToRemove.forEach(function (button) {
            if (button.textContent === 'BUY 1' || button.textContent === 'BUY 2' || button.textContent === 'BUY 3') {
                button.remove();
            }
        });
        var itmText = li.textContent.trim();
        var parts = itmText.split(' ');

        var quan = parseInt(parts[3]);
        if (e.target.textContent === 'BUY 1') {
            quan = quan - 1;
          } else if (e.target.textContent === 'BUY 2') {
            quan = quan - 2;
          } else if (e.target.textContent === 'BUY 3') {
            quan = quan - 3;
          }
        

        if (quan >= 0) {
          parts[3] = quan.toString();
          li.textContent = ''; // Remove the old content of the li element

          var newItemText = parts.join(' ');
          li.appendChild(document.createTextNode(newItemText));

          var btn1 = document.createElement('button');
          btn1.appendChild(document.createTextNode('BUY 1'));
          li.appendChild(btn1);

          var btn2 = document.createElement('button');
          btn2.appendChild(document.createTextNode('BUY 2'));
          li.appendChild(btn2);

          var btn3 = document.createElement('button');
          btn3.appendChild(document.createTextNode('BUY 3'));
          li.appendChild(btn3);
        } else {
            li.remove();
        }   
    }
})