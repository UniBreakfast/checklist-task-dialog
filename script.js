const [listDialog, endDialog] = document.querySelectorAll('dialog');
const boxes = listDialog.querySelectorAll('[type="checkbox"]');
const button = listDialog.querySelector('button');

listDialog.onchange = updateButton;
listDialog.onsubmit = end;

listDialog.showModal();

updateButton();

function updateButton() {
  button.disabled = !Array.from(boxes).every(box => box.checked);
}

function end() {
  endDialog.showModal();
}
