function sendMessage() {
  const input = document.getElementById("user-input");
  const userMessage = input.value.trim();
  if (userMessage === "") return;

  displayMessage(userMessage, "user");
  input.value = "";

  // chatBot's response
  const botReply = generateResponse(userMessage);
  setTimeout(() => {
    displayMessage(botReply, "bot");
  }, 600);
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi") ||msg.includes("yo man")) {
    return "Hey there! How can I assist you today?";
  } else if (msg.includes("how are you")) {
    return "yoo ma gee 😉,I'm doing great! Thanks for asking.";
  } else if (msg.includes("your name")) {
    return "I'm your Smart ChatBot😊,nice meeting you ma gee";
  } else if(msg.includes("thats cool ") || msg.includes("ok")){
        return "Yeah bro thats very okay and cool👌. So whats popping ma gee?"
    
  } else if (msg.includes("bye")) {
    return "Goodbye! Talk to you soon.";
  } else {
    return "Hmm... I didn't quite get that. Try asking me something else!";
  }
}
