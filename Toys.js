function clearName() {
      if (document.getElementById('nameField').value == 'John Smith') {
        document.getElementById('nameField').value = '';
      }
    }

    function resetName() {
      if (document.getElementById('nameField').value == '') {
        document.getElementById('nameField').value = 'John Smith';
      }
    }

    function clearPhone() {
      if (document.getElementById('phoneField').value == 'XXX-XXX-XXXX') {
        document.getElementById('phoneField').value = '';
      }
    }

    function resetPhone() {
      if (document.getElementById('phoneField').value == '') {
        document.getElementById('phoneField').value = 'XXX-XXX-XXXX';
      }
    }

    function clearEmail() {
      if (document.getElementById('emailField').value == 'johnsmith@email.com') {
        document.getElementById('emailField').value = '';
      }
    }

    function resetEmail() {
      if (document.getElementById('emailField').value == '') {
        document.getElementById('emailField').value = 'johnsmith@email.com';
      }
    }

$(function () {
  $("#tabs").tabs();
});
