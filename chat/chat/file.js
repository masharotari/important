alert("Hello! I am an alert box!");
function showChat() {
  const chatFooter = document.getElementById('chat-footer');
  const chatBody = document.getElementById('chat-body');

  chatBody.className = "card-body";
  chatFooter.className = "card-footer";

  const btn = document.getElementById('btn-chat');
  btn.setAttribute('onclick', 'hideChat()');

  const card = document.getElementById("card");
  card.setAttribute('class', 'card border-blue');

}
function hideChat() {
  const chatFooter = document.getElementById('chat-footer');
  const chatBody = document.getElementById('chat-body');

  chatBody.className = chatBody.className + '  d-none';
  chatFooter.className = chatFooter.className + '  d-none';

  const btn = document.getElementById('btn-chat');
  btn.setAttribute('onclick', 'showChat()');

  const card = document.getElementById("card");
  card.setAttribute('class', 'card border-red');

}

hideChat();
function sum() {
  const a = document.getElementById('leta').value;
  const b = document.getElementById('letb').value;
  let result = Number(a) + Number(b);
  alert(result);
}
if (result >= 100) {
  alert("100+");
}
else if (result >= 70) {
  alert("70+");
}
else if (result >= 50) {
  alert("50+");
}
else if (result >= 10) {
  alert("10+");
}
else if (result >= 0) {
  alert("0+")
}

