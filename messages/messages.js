// chat input
let naviga_2 = document.getElementById('naviga_2')
let naviga_1 = document.getElementById('naviga_1')
let chatIdS
const chatIdSFun = () =>{
	chatIdS = document.getElementById('chatIdS').value
	if (chatIdS === "") {
		naviga_1.classList.add('displayFlex')
		naviga_2.classList.remove('displayFlex')
	} else {
		naviga_1.classList.remove('displayFlex')
		naviga_2.classList.add('displayFlex')
	}
}

// chat show
let firMessage = document.getElementById('firMessage')
let secMessage = document.getElementById('secMessage')

let message1 = document.getElementsByClassName('message1')[0]
const showMess = (i) =>{
	let messcon2_1 = document.getElementsByClassName('messcon2_1')
	if (screen.width <= 500) {
		for(let j = 0; j < messcon2_1.length; j++){
			message1.classList.remove('displayFlex')
			secMessage.classList.add('displayFlex')
		}
	}else if(screen.width > 500){
		for(let j = 0; j < messcon2_1.length; j++){
			messcon2_1[j].classList.remove('messcon2_back')
		}
		secMessage.classList.add('displayFlex')
		firMessage.classList.remove('displayFlex')
		messcon2_1[i].classList.add('messcon2_back')
	}
}

setInterval(()=>{
	document.getElementById('full').style.display = 'none'
	document.getElementById('hafe').style.display = 'flex'
},100)


clearInterval(check)


let message2 = document.getElementsByClassName('message2')[0]
setInterval(()=>{
	if (screen.width <= 500) {
		if (secMessage.classList.contains('displayFlex')) {
			message2.classList.add('displayFlex')
		}else if (!secMessage.classList.contains('displayFlex')) {
			message2.classList.remove('displayFlex')
		}
	}else if (screen.width > 500) {
		message2.classList.add('displayFlex')
	}
},200)

const hideUnhide = () =>{
	message1.classList.add('displayFlex')
	message2.classList.remove('displayFlex')
	secMessage.classList.remove('displayFlex')
}

// created by tarapada garai