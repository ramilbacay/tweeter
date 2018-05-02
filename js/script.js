document.getElementById('chatArea').onkeyup = function(event){
    
    if (event.keyCode == '13'){
    	var text = document.getElementById("chatArea").value;
    	var cleanText = text.trim();
    	if (cleanText === "") {
    		document.getElementById("chatArea").value = '';
    	}

    	else if (/\s/.test(cleanText) == false) {
    		alert("Your message should contain at least one (1) whitespace/space.");
    	}

    	else if (cleanText.length <= 46)

    	// else 
    	{
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
  }

document.getElementById('sendBtn').onclick = function(event){
    
    var text = document.getElementById("chatArea").value;
    if (text.trim() === "") {
    		document.getElementById("chatArea").value = '';
    	}

    	else {
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
