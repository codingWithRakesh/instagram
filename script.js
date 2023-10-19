// home
const home = () =>{
	location.href = '../home/index.html'
}
// search box
const serch = () =>{
	document.getElementById('full').style.display = 'none'
	document.getElementById('hafe').style.display = 'flex'
	document.getElementById('serchBox').classList.remove('xhejeN')
	document.getElementById('borderId').classList.add('border')
}

let serchId

const serchValu = () =>{
	serchId = document.getElementById('serchId').value
	if (serchId === "") {
		document.getElementById('notresult').style.display = 'flex'
		document.getElementById('allResult').style.display = 'none'
		document.getElementById('searchDivId').classList.add('hideBorder')
	} else {
		document.getElementById('notresult').style.display = 'none'
		document.getElementById('allResult').style.display = 'block'
		document.getElementById('searchDivId').classList.remove('hideBorder')
	}
}
// notification
const notification = () =>{
	document.getElementById('notificationsContanerId').classList.remove('xhejeN')
	document.getElementById('full').style.display = 'none'
	document.getElementById('hafe').style.display = 'flex'
	// document.getElementById('serchBox').style.display = 'block'
	document.getElementById('notificationIdS').classList.add('border')
	document.getElementById('notificationIdS').innerHTML = '<svg aria-label="Notifications" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Notifications</title><path d="M17.075 1.987a5.852 5.852 0 0 0-5.07 2.66l-.008.012-.01-.014a5.878 5.878 0 0 0-5.062-2.658A6.719 6.719 0 0 0 .5 8.952c0 3.514 2.581 5.757 5.077 7.927.302.262.607.527.91.797l1.089.973c2.112 1.89 3.149 2.813 3.642 3.133a1.438 1.438 0 0 0 1.564 0c.472-.306 1.334-1.07 3.755-3.234l.978-.874c.314-.28.631-.555.945-.827 2.478-2.15 5.04-4.372 5.04-7.895a6.719 6.719 0 0 0-6.425-6.965Z"></path></svg>'
	isNotificationContainer = false
}


// create box
let t = true
let postDiv = document.getElementById('postDiv')
const create = () =>{
	document.getElementById('uploadId').style.display = 'flex'
}
const closeDiv = () =>{
	
	if (t) {
		document.getElementById('uploadId').style.display = 'none'
	}
	t = true
}

postDiv.onclick = () =>{
	t = false
}

// more div - setting
let moreSetting = document.getElementById('moreSetting')
let xyasb = document.getElementsByClassName('xyasb')[0]
const settingF = () =>{
	moreSetting.classList.toggle('xhejeN')
	xyasb.classList.toggle('xyasW')
}

// Explore
const explore = () =>{
	location.href = '../explore/explore.html'
}

// reels
const reels = () =>{
	location.href = '../reels/reels.html'
}
// messages
let full = document.getElementById('full')
let hafe = document.getElementById('hafe')
const messages = () =>{
	location.href = '../messages/messages.html'
	full.classList.add('xhejeN')
	hafe.classList.add('xhejeF')
}

// profile
const profile = () =>{
	location.href = '../profile/profile.html'
}

// small serch box
let serchBox = document.getElementById('serchBox')
const Sserch = () =>{
	if (screen.width > 900) {
		if (serchBox.classList.contains('xhejeN')) {
			serchBox.classList.toggle('xhejeN')
			document.getElementById('borderId').classList.toggle('border')
			document.getElementById('notificationIdS').classList.remove('border')
			notificationsContanerId.classList.add('xhejeN')
			document.getElementById('notificationIdS').innerHTML = `
			<svg aria-label="Notifications" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)"
				fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
				<title>Notifications</title>
				<path
					d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
				</path>
			</svg>
			`
		}else{
			document.getElementById('full').style.display = 'block'
			document.getElementById('hafe').style.display = 'none'
			serchBox.classList.add('xhejeN')
		}
	}else if (screen.width < 900) {
		document.getElementById('full').style.display = 'none'
		serchBox.classList.toggle('xhejeN')
		document.getElementById('borderId').classList.toggle('border')
		document.getElementById('notificationIdS').classList.remove('border')
		notificationsContanerId.classList.add('xhejeN')
	}
}
let check = setInterval(()=>{
	if (screen.width > 900) {
		if (serchBox.classList.contains('xhejeN') && notificationsContanerId.classList.contains('xhejeN')) {
			document.getElementById('full').style.display = 'block'
			document.getElementById('hafe').style.display = 'none'
		}else{
			document.getElementById('full').style.display = 'none'
			document.getElementById('hafe').style.display = 'flex'
		}
	}else if(screen.width < 900){
		document.getElementById('full').style.display = 'none'
		document.getElementById('hafe').style.display = 'flex'
	}
},200)

// small notifications box
let notificationsContanerId = document.getElementById('notificationsContanerId')
let isNotificationContainer = true
const Snotifications = () =>{
	if (isNotificationContainer) {
		document.getElementById('notificationIdS').innerHTML = '<svg aria-label="Notifications" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Notifications</title><path d="M17.075 1.987a5.852 5.852 0 0 0-5.07 2.66l-.008.012-.01-.014a5.878 5.878 0 0 0-5.062-2.658A6.719 6.719 0 0 0 .5 8.952c0 3.514 2.581 5.757 5.077 7.927.302.262.607.527.91.797l1.089.973c2.112 1.89 3.149 2.813 3.642 3.133a1.438 1.438 0 0 0 1.564 0c.472-.306 1.334-1.07 3.755-3.234l.978-.874c.314-.28.631-.555.945-.827 2.478-2.15 5.04-4.372 5.04-7.895a6.719 6.719 0 0 0-6.425-6.965Z"></path></svg>'
		notificationsContanerId.classList.remove('xhejeN')
		document.getElementById('full').style.display = 'none'
		document.getElementById('notificationIdS').classList.add('border')
		document.getElementById('borderId').classList.remove('border')
		
		serchBox.classList.add('xhejeN')
		console.log('true')
		isNotificationContainer = false
	} else if (!isNotificationContainer) {
		document.getElementById('notificationIdS').innerHTML = `
		<svg aria-label="Notifications" class="x1lliihq x1n2onr6" color="rgb(0, 0, 0)"
			fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24">
			<title>Notifications</title>
			<path
				d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
			</path>
		</svg>
		`
		// document.getElementById('borderId').classList.add('border')
		document.getElementById('notificationIdS').classList.remove('border')
		notificationsContanerId.classList.add('xhejeN')
		console.log('false')
		isNotificationContainer = true
	}
}

const removexhejeN = () =>{
	notificationsContanerId.classList.add('xhejeN')
}

// created by tarapada garai