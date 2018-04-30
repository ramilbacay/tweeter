document.getElementById('chatArea').onkeyup = function(event){
    

    if (event.keyCode == '13'){
    var text = document.getElementById("chatArea").value;
    var message = document.createElement("div");
    var node = document.createTextNode(text);
    message.appendChild(node);
    message.className = "chat"
	var element = document.getElementById("chatDisplay");
	element.appendChild(message);
    document.getElementById("chatArea").value = '';
    var scrollDown = document.getElementById('chatDisplay');
  	scrollDown.scrollTop = scrollDown.scrollHeight;
    
    }
  }
  // document.getElementById('send').onclick = function(e){
    
  //   var text = document.getElementById("add_child").value;
  //   var div = document.getElementById('child');
  //   var childHtml = "<div class='child'>" + text + "</div>"; 
  //   div.innerHTML += childHtml;
  //   var message = document.getElementById('add_child');
  //   document.getElementById("add_child").value = '';
  // }
