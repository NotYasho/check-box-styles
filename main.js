var checkBox = document.getElementById('checkBox');
let status = document.getElementById('status');

function toggleBtn() {
	if (checkBox.checked == true) {
		status.innerHTML = 'Enabled';
	}
	else {
		status.innerHTML = 'Disabled';
	}
    status.classList.toggle('active')
	console.log(status);
}
function textClick(){
    if (status.innerHTML == 'Disabled') {
        checkBox.checked = true;
        status.innerHTML = 'Enabled';
	}
	else {
        checkBox.checked = false;
		status.innerHTML = 'Disabled';
	}
    status.classList.toggle('active')
}