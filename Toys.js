function clearName() {
      if (document.getElementById('nameField').value == 'First and Last Name') {
        document.getElementById('nameField').value = '';
      }
    }

    function resetName() {
      if (document.getElementById('nameField').value == '') {
        document.getElementById('nameField').value = 'First and Last Name';
      }
    }

    function clearPhone() {
      if (document.getElementById('phoneField').value == 'example: 212-123-1234') {
        document.getElementById('phoneField').value = '';
      }
    }

    function resetPhone() {
      if (document.getElementById('phoneField').value == '') {
        document.getElementById('phoneField').value = 'example: 212-123-1234';
      }
    }

    function clearEmail() {
      if (document.getElementById('emailField').value == 'example: johnsmith@email.com') {
        document.getElementById('emailField').value = '';
      }
    }

    function resetEmail() {
      if (document.getElementById('emailField').value == '') {
        document.getElementById('emailField').value = 'example: johnsmith@email.com';
      }
    }

$(function () {
  $("#tabs").tabs();
});
