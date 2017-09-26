'use strict';

(function () {

var personalCabinetBtn = document.querySelector('.header_personal-cabinet-login');
var personalCabinetBox = document.querySelector('.personal-cabinet_box');
var personalCabinetExit = document.querySelector('.personal-cabinet_exit');
var personalCabinetPhone = document.querySelector('.header_personal-cabinet-phone');

var giveBank = document.querySelector('.currency_give-bank');
var getBank = document.querySelector('.currency_get-bank');
var bankListbox = document.querySelector('.exchange_bank-choise-box');
var bankList = document.querySelector('.exchange_bank-choise-box-list');
var bankListDeeper = document.querySelector('.exchange_bank-choise-box-show-deeper');

var giveCurrensy = document.querySelector('.currency_give-name');
var getCurrensy = document.querySelector('.currency_get-name'); 
var currensyListbox = document.querySelector('.exchange_currensy-choise-box');

giveCurrensy.addEventListener('click', function(event){
	giveCurrensy.value = '';
	event.preventDefault();
	if (!currensyListbox.classList.contains('exchange_currensy-choise-box-show')) {
		currensyListbox.classList.add('exchange_currensy-choise-box-show');
	}
	currensyListbox.addEventListener('click', currensyGiveChoise);
});


function currensyGiveChoise(event) {
	event.preventDefault();
	currensyListbox.classList.remove('exchange_currensy-choise-box-show');

	giveCurrensy.value = event.target.id;
	giveCurrensy.setAttribute('value', event.target.id);
	currensyListbox.removeEventListener('click', currensyGiveChoise);
}

getCurrensy.addEventListener('click', function(event){
	getCurrensy.value = '';
	event.preventDefault();
	if (!currensyListbox.classList.contains('exchange_currensy-choise-box-show-deeper')) {
		currensyListbox.classList.add('exchange_currensy-choise-box-show-deeper');
	}
	currensyListbox.addEventListener('click', currensyGetChoise);
});


function currensyGetChoise(event) {
	event.preventDefault();
	currensyListbox.classList.remove('exchange_currensy-choise-box-show-deeper');

	getCurrensy.value = event.target.id;
	getCurrensy.setAttribute('value', event.target.id);
	currensyListbox.removeEventListener('click', currensyGetChoise);
}






personalCabinetBtn.addEventListener('click', function(event){
	event.preventDefault();
	if (!personalCabinetBox.classList.contains('personal-cabinet_box-show')) {
		personalCabinetBox.classList.add('personal-cabinet_box-show');
	}
});

personalCabinetExit.addEventListener('click', function(event){
	event.preventDefault();
	if (personalCabinetBox.classList.contains('personal-cabinet_box-show')) {
		personalCabinetBox.classList.remove('personal-cabinet_box-show');
	}
});

personalCabinetPhone.addEventListener('click', function(event){
	event.preventDefault();
	if (!personalCabinetBox.classList.contains('personal-cabinet_box-show')) {
		personalCabinetBox.classList.add('personal-cabinet_box-show');
	}
});


giveBank.addEventListener('click', function(event){
	event.preventDefault();
	if (!bankListbox.classList.contains('exchange_bank-choise-box-show')) {
		bankListbox.classList.add('exchange_bank-choise-box-show');
	}
	bankList.addEventListener('click', bankGiveChoise);
});

getBank.addEventListener('click', function(event){
	event.preventDefault();
	if (!bankListbox.classList.contains('exchange_bank-choise-box-show-deeper')) {
		bankListbox.classList.add('exchange_bank-choise-box-show-deeper');
	}
	bankList.addEventListener('click', bankGetChoise);
});


function bankGiveChoise(event) {
	event.preventDefault();
	bankListbox.classList.remove('exchange_bank-choise-box-show');
	giveBank.classList.forEach(function(bankClass){
		if(bankClass.indexOf('sprite2-bank') !== -1) {
			giveBank.classList.remove(bankClass);
		}
	});
	giveBank.classList.add('sprite2-' + event.target.id + '-input');
	giveBank.value = event.target.id;
	giveBank.setAttribute('value', event.target.id);
	bankList.removeEventListener('click', bankGiveChoise);
}

function bankGetChoise(event) {
	event.preventDefault();
	bankListbox.classList.remove('exchange_bank-choise-box-show-deeper');
	getBank.classList.forEach(function(bankClass){
		if(bankClass.indexOf('sprite2-bank') !== -1) {
			getBank.classList.remove(bankClass);
		}
	});
	getBank.classList.add('sprite2-' + event.target.id + '-input');
	getBank.value = event.target.id;
	getBank.setAttribute('value', event.target.id);
	bankList.removeEventListener('click', bankGetChoise);
}


}());