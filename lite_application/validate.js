var body = document.querySelector('body');
body.style.margin = '0';
body.style.minHeight = '900px';

var header = document.querySelector('header');
header.style.height = '80px';
header.style.marginBottom = '50px';
header.style.backgroundColor = '#5f5f5f';
header.style.color = '#FFF';

var headerMenu = document.querySelector('header ul');
headerMenu.style.padding = '0';
headerMenu.style.marginTop = '0';
headerMenu.style.marginLeft = '5%';

var footer = document.querySelector('footer');
footer.style.height = '60px';
footer.style.width = '100%';
footer.style.position = 'fixed';
footer.style.bottom = '0';
footer.style.left = '0';
footer.style.backgroundColor = '#5f5f5f';
footer.style.textAlign = 'center';

var footerText = document.querySelector('footer p');
footerText.style.color = '#FFF';

var content = document.querySelector('body > div');
content.style.width = '400px';
content.style.margin = '0 auto';
content.style.backgroundColor = '#f1f1f1';
content.style.padding = '20px';
content.style.borderRadius = '5px';
content.style.lineHeight = '40px';
content.style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)';

var forms = document.querySelectorAll('body div h3');
for (var h3 = 0; h3 < forms.length; h3++) {
    var item = forms[h3];
    item.style.color = '#5f5f5f';
    item.style.margin = '20px 0';
    item.style.textAlign = 'left';
    item.style.lineHeight = '0';
}

var select = document.querySelector('body > div select');
select.style.width = '46%';
select.style.height = '34px';
select.style.padding = '6px 12px;';
select.style.fontSize = '14px';
select.style.color = '#555';
select.style.backgroundColor = '#fff';
select.style.border = '1px solid #ccc';
select.style.borderRadius = '4px';
select.style.marginBottom = '15px';

var headerMenuItems = document.querySelectorAll('header ul li');
for (var li = 0; li < headerMenuItems.length; li++) {
  var item = headerMenuItems[li];
  item.style.display = 'inline-block';
  item.style.padding = '10px';
  item.style.textDecoration = 'none';
  item.style.cursor = 'pointer';
  item.style.fontWeight = '500';
}

var textInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
for (var i = 0; i < textInputs.length; i++) {
  var input = textInputs[i];
  input.style.display = 'inline-block';
  input.style.height = '34px';
  input.style.width = '44%';
  input.style.marginTop = '15px';
  input.style.borderRadius = '4px';
  input.style.fontSize = '16px';
  input.style.paddingLeft = '5px';
  if (input.placeholder !== 'Last name') {
    input.style.marginRight = '20px';
  }
}

var buttons = document.querySelectorAll('input[type="button"]');
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.style.display = 'inline-block';
  button.style.padding = '6px 12px';
  button.style.marginTop = '-5px';
  button.style.borderRadius = '4px';
  button.style.border = '1px solid transparent';
  button.style.fontSize = '14px';
  button.style.textAlign = 'center';
  button.style.whiteSpace = 'nowrap';
  button.style.verticalAlign = 'middle';
  button.style.backgroundColor = '#fff';
  button.style.borderColor = '#ccc';
}

var submit = document.querySelector('input[value="submit"]');
submit.addEventListener("click", function() {
  var inputs = document.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.type !== 'button') {
      input.style.borderColor = '';

      var child = input.parentNode.lastChild;
      if (child.tagName === 'DIV' && child.style.color === 'red') {
        child.remove();
      }

      var div = document.createElement('div');
      if (input.value === '') {
        var text = input.parentNode.innerText + " field shouldn't be empty";
        var textnode = document.createTextNode(text);

        input.style.borderColor = 'red';
        div.style.color = 'red';
        div.appendChild(textnode);
        input.parentNode.appendChild(div);

      } else if (input.type === 'checkbox' && input.checked === false) {
        text = input.name + " field shouldn't be empty";
        textnode = document.createTextNode(text);

        input.style.borderColor = 'red';
        div.style.color = 'red';
        div.appendChild(textnode);
        input.parentNode.appendChild(div);
      }
    }
  }
});

var clearForm = document.querySelectorAll('input[value="clear"]');
for (var i = 0; i < clearForm.length; i++) {
    var clear = clearForm[i];
    clear.addEventListener("click", function () {
        var inputs = document.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            input.style.borderColor = '';

            var child = input.parentNode.lastChild;
            if (child.tagName === 'DIV' && child.style.color === 'red') {
                child.remove();
            }

            if (input.type === 'text' || input.type === 'email' || input.type === 'password') {
                input.value = '';
            } else if (input.type === 'checkbox') {
                input.checked = false;
            } else if (input.type === 'radio') {
                var male = document.querySelector('input[value="male"]');
                male.checked = true
            }
        }
        var selectTags = document.getElementsByTagName("select");
        for (var i = 0; i < selectTags.length; i++) {
            selectTags[i].selectedIndex = 0;
        }

        var nicknameInput = document.querySelectorAll('input[placeholder="Nickname"]');
        if (nicknameInput.length > 0) {
            nicknameInput[0].parentNode.remove();
            insertNicknameButton();
        }
    });
}

var insertNicknameButton = function() {
  var nicknameAdd = document.createElement('input');
  nicknameAdd.type = 'button';
  nicknameAdd.value = 'Add nickname';

  nicknameAdd.style.display = 'inline-block';
  nicknameAdd.style.padding = '6px 12px';
  nicknameAdd.style.marginTop = '-5px';
  nicknameAdd.style.borderRadius = '4px';
  nicknameAdd.style.border = '1px solid transparent';
  nicknameAdd.style.fontSize = '14px';
  nicknameAdd.style.textAlign = 'center';
  nicknameAdd.style.whiteSpace = 'nowrap';
  nicknameAdd.style.verticalAlign = 'middle';
  nicknameAdd.style.backgroundColor = '#fff';
  nicknameAdd.style.borderColor = '#ccc';

  nicknameAdd.addEventListener('click', addNickname);
  var emailDiv = document.querySelector('input[type="email"]').parentNode;
  if (emailDiv.length === 2) {
    emailDiv.appendChild(nicknameAdd);
  } else {
    emailDiv.insertBefore(nicknameAdd, emailDiv.lastChild)
  }
};

var addNickname = function() {
  var nicknameInputs = document.querySelectorAll('input[id="nickname"]');
  if (nicknameInputs.length > 0) {
    return false;
  }
  var nicknameDiv = document.createElement('div');
  var nicknameInput = document.createElement('input');
  var nicknameDelete = document.createElement('input');

  nicknameInput.type = 'text';
  nicknameInput.placeholder = 'Nickname';
  nicknameInput.style.display = 'inline-block';
  nicknameInput.style.height = '34px';
  nicknameInput.style.width = '45%';
  nicknameInput.style.marginTop = '15px';
  nicknameInput.style.borderRadius = '4px';
  nicknameInput.style.boxShadow = 'none';
  nicknameInput.style.fontSize = '18px';
  nicknameInput.style.marginRight = '20px';

  nicknameDelete.type = 'button';
  nicknameDelete.value = 'Remove nickname';

  nicknameDelete.style.display = 'inline-block';
  nicknameDelete.style.padding = '6px 12px';
  nicknameDelete.style.marginTop = '-5px';
  nicknameDelete.style.borderRadius = '4px';
  nicknameDelete.style.border = '1px solid transparent';
  nicknameDelete.style.fontSize = '14px';
  nicknameDelete.style.textAlign = 'center';
  nicknameDelete.style.whiteSpace = 'nowrap';
  nicknameDelete.style.verticalAlign = 'middle';
  nicknameDelete.style.backgroundColor = '#fff';
  nicknameDelete.style.borderColor = '#ccc';

  nicknameDelete.addEventListener('click', function(){
    nicknameDelete.parentNode.remove();
    insertNicknameButton();
  });

  nicknameDiv.appendChild(nicknameInput);
  nicknameDiv.appendChild(nicknameDelete);

  var passwordDiv = document.querySelector('input[type="password"]').parentNode;

  content.insertBefore(nicknameDiv, passwordDiv);
  document.querySelector('input[value="Add nickname"]').remove();
};

var nickname = document.querySelector('input[value="Add nickname"]');
nickname.addEventListener("click", addNickname);
