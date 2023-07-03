import cat3 from "./stubImages/cat3.jpg";

export const getPetDescription = {
	id:7,
	isFound: false,
	petName: 'Мурыся',
	type: 'cat',
	images: [cat3],
	dateLost: '20.06.2023',
	dateFound: '',
	ownerData: {
		ownerName: 'Вася',
		ownerLastName: 'Пупкин',
		ownerAddress: 'ул.Рукожопов 25а, кв. 51',
		ownerTel: '+70000000007'
	},
	founderData:{
		founderName: 'Петя',
		founderTel: '+70000000000',
		founderPreferContacts: 'три раза в колокол'
	},
	addressLost: 'ул. 7ой гаврдейской дивизии, д.23',
	addressFound: 'г.Томск, ул.Малые Задроты'
}