

document.getElementById('chatArea').onkeyup = function(event)
{
    
    if (event.keyCode == '13')
    {
    	var d = new Date(); // for now
		d.getHours(); // => 9
		d.getMinutes(); // =>  30
		d.getSeconds(); // => 51
    	var input = document.getElementById("chatArea").value;
    	var trimInput = input.trim();
    	var inputLength = trimInput.length;
    	var chunks;

    	if (trimInput === "") 
    	{
    		document.getElementById("chatArea").value = '';
    	}

    	else if (/\s/.test(trimInput) == false && inputLength > 50) 
    	{
    		alert("Your message should contain at least one (1) whitespace/space.");
    	}

    	else if (inputLength > 50) 
    	{
	     	var chunks = splitMessage(trimInput, 46);
   			
     			for (var x = 0; x < chunks.length; x++)
     			{
			 		var message = document.createElement("div");
			 		var node = document.createTextNode(x+1 + "/" + chunks.length + " " + chunks[x]);
					message.appendChild(node);
					message.className = "chat"
					var element = document.getElementById("chatDisplay");
					element.appendChild(message);
					document.getElementById("chatArea").value = '';
					var scrollDown = document.getElementById('chatDisplay');
					scrollDown.scrollTop = scrollDown.scrollHeight;
    			}
     	}

    	else
    	{
			var message = document.createElement("div");
			var node = document.createTextNode(trimInput);
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

    

  

document.getElementById('sendBtn').onclick = function(event)
{
    
    var input = document.getElementById("chatArea").value;
    	var trimInput = input.trim();
    	var inputLength = trimInput.length;
    	var chunks;

    	if (trimInput === "") 
    	{
    		document.getElementById("chatArea").value = '';
    	}

    	else if (/\s/.test(trimInput) == false && inputLength > 50) 
    	{
    		alert("Your message should contain at least one (1) whitespace/space.");
    	}

    	else if (inputLength > 50) 
    	{
	     	var chunks = splitMessage(trimInput, 46);
   			
     			for (var x = 0; x < chunks.length; x++)
     			{
			 		var message = document.createElement("div");
			 				var node = document.createTextNode(x+1 + "/" + chunks.length + " " + chunks[x]);
							message.appendChild(node);
							message.className = "chat"
							var element = document.getElementById("chatDisplay");
							element.appendChild(message);
							document.getElementById("chatArea").value = '';
							var scrollDown = document.getElementById('chatDisplay');
							scrollDown.scrollTop = scrollDown.scrollHeight;
    				}
     	}

    	else
    	{
			var message = document.createElement("div");
			var node = document.createTextNode(trimInput);
			message.appendChild(node);
			message.className = "chat"
			var element = document.getElementById("chatDisplay");
			element.appendChild(message);
			document.getElementById("chatArea").value = '';
			var scrollDown = document.getElementById('chatDisplay');
			scrollDown.scrollTop = scrollDown.scrollHeight;
    	}
	
 }



var splitMessage = function(str, size) {
  var chunks = [];
  var spacePieces = str.split(' ');
  return spacePieces.reduce(function(chunks, piece, index) {
    var isFirstPiece = index === 0;
    var isLastPiece = index === spacePieces.length - 1;

    var chunkSeparator = isFirstPiece ? '' : ' ';
    var currentChunk = chunks[chunks.length - 1];

    if (piece.length > size) {
      
      var startingPieceIndex = size - (chunkSeparator + currentChunk).length;
      currentChunk += chunkSeparator + piece.substring(0, startingPieceIndex);
      chunks[chunks.length - 1] = currentChunk;


      var leftover = piece.substr(startingPieceIndex);
      for (var i = 0; i < leftover.length; i += size) {
        chunks.push(leftover.substr(i, i + size));
      }
    }

    else if ((currentChunk + chunkSeparator + piece).length <= size) {
      currentChunk += chunkSeparator + piece;
      chunks[chunks.length - 1] = currentChunk;
    }

    else {
      currentChunk = piece;
      chunks.push('');
      chunks[chunks.length - 1] = currentChunk;
    }

    return chunks;
  }, ['']);
};



var assert = chai.assert;
mocha.setup('bdd');


describe("chunk-string", function() {
  it("Should split message if length is more than 50 characters", function() {
    assert.deepEqual(splitMessage("I can't believe Tweeter now supports chunking my messages, so I don't have to do it myself.", 46), ["I can't believe Tweeter now supports chunking", "my messages, so I don't have to do it myself."]);
  });
  it("Should split at spaces", function() {
    assert.deepEqual(splitMessage("I can't believe Tweeter now supports chunking my messages", 33), ["I can't believe Tweeter now", "supports chunking my messages"]);
  });
});




mocha.run();


