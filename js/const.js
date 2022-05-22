const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const tphone = document.querySelectorAll('input[name="tphone"]');
const reason = document.getElementById('reason');
const message = document.getElementById('message');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('form-modal');

const expresions = {
	fname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    lname: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,    
    subject: /^.{1,100}$/,
    message: /^.{1,350}$/
}

const fields = {
	fname: false,
	lname: false,
	email: false,
	tphone: false,
	phone: false,
    reason: false,
    subject: false,
    message: false
}