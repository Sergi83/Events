// +1. Створити сторінку на якій будемо відображати базовий текст в span("Очікую на ввід даних"). 

// При натисканні alt + A, замість спана з'явиться інпут з аналогічним текстом, на який тепер ви зможете відредагувати. 

// Далі коли ви натисните shift + S дані збережуться і знов будуть відображатись як span. 



// let oldElem = document.querySelector('.keyPushEvents');
// let newElem = null;

// window.addEventListener('keydown', (evt) => {
// 	 // get the key combination 
// 	if (evt.code === 'KeyA' && evt.altKey) {
		
// 		// create input form, add atributes
//         let inpForm = document.createElement('input');
// 		inpForm.classList.add('inp');
// 		inpForm.setAttribute('placeholder', 'Очікую на ввід даних');
		
// 		// replace the span to the input
// 		oldElem.replaceWith(inpForm);
		
// 		// make the element focused: will receive keyboark events by default
// 		inpForm.focus();
		
// 		// make variable that search new element by class
// 		newElem = document.querySelector('.inp');

// 	}

// 	if (evt.code === 'KeyS' && evt.shiftKey && newElem) {
		
// 		// save value from input form to new variable
// 		let getInpValue = newElem.value;
		
// 		// create new span tag, save it into new variable
// 		let comeBackSpan = document.createElement('span');

// 		// add class to new span tag and replace the input form
// 		comeBackSpan.classList.add('keyPushEvents');
// 		newElem.replaceWith(comeBackSpan);

// 		// rebuild old span element with new value from input form
// 		comeBackSpan.textContent = getInpValue;
// 		oldElem = document.querySelector('.keyPushEvents');

// 		// if the input form was empty - add  old string to the span element
// 		if (!oldElem.textContent.length) {
// 			comeBackSpan.textContent = 'Очікую на ввід даних';
// 		}

// 	}
// 	});
	


// +2. Повісити івент лісенер на ресайз сторінки, коли розмір сторінки буде менше 600px , виводити лог ми векористовуємо мобільну версію,
//  при більшому розмірі сторінки - що ми використовуємо десктоп версію.


// window.addEventListener("resize", pageSizeLimits = () => {
// 	//let sizeLimit = window.resizeBy(600, 500) - do not work
// 	// show the message depends on window width less or more than "600px";
// 	if (window.innerWidth < 600) {
//         console.log('Ми використовуємо мобільну версію');
//     } else {
//         console.log('Ми використовуємо десктоп версію');
//     }
// } );


// +3. Повісити івент на інпут, при зміні стану інпута - виводити повідомленням зі значенням яке зараз є введено.

// // create and insert input tag before specific element
// let getInput = document.getElementById('changeTag');
// getInput.insertAdjacentHTML('beforeBegin', '<input type="text" id="showInpValue" name="text" placeholder="Очікую на ввід данних" oninput="showValue()">');

// // add arrow function that show message on input event (when write value into input form)
// window.addEventListener("oninput", showValue = () => {
// 	let inpValue = document.getElementById("showInpValue").value;
// 	alert(`Your input: ${inpValue}`);
//   });


// 4. При натисканні на кнопку альт+ о виводити модальне вікно на екран, альт + с - закривати.


// let showModalWindow = document.createElement('div');
// showModalWindow.classList = 'modalWindow';
// showModalWindow.textContent = 'Modal window: open - Alt_O; close - Alt_C';
// document.body.append(showModalWindow);


// window.addEventListener('keydown', (event) => {
	
// 	// get the key combination 
// 	if (event.code === 'KeyO' && event.altKey) {
// 		// add class with css style (display property)
// 		showModalWindow.classList = 'modalWindow modalWindowOpen';
//         };

// 	});
	

// window.addEventListener('keydown', (event) => {

// 	// get the key combination 
// 	if (event.code === 'KeyC' && event.altKey) {
// 		// css: display: none
// 		showModalWindow.classList = 'modalWindow';
// 		};

// 	});




// 5. Створити модальне відкно аналог Алерта але з гарним дизайном. 


// по кліку на кнопку зявляється модальне вікно по центрі екрану(центрування елемента). 

// В модальному вікні має бути текст та кнопка закрити.



