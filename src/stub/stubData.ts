import dog1 from './stubImages/dog1.jpg'
import dog2 from './stubImages/dog2.jpg'
import dog3 from './stubImages/dog3.jpg'
import cat1 from './stubImages/cat1.jpg'
import cat2 from './stubImages/cat2.jpg'
import cat3 from './stubImages/cat3.jpg'
import koala from './stubImages/koala.jpg'
import parrot1 from './stubImages/parrot1.jpg'


export const stubData = [
	{
		id:1,
		isFound: false,
		petName: 'Жужа',
		type: 'dog',
		images: [dog1],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
		id:2,
		isFound: false,
		petName: 'Жувака',
		type: 'Koala',
		images: [koala],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
		id:3,
		isFound: false,
		petName: 'Заяц-попрыгаец',
		type: 'dog',
		images: [dog2],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
		id:4,
		isFound: true,
		petName: 'Пес-барбос',
		type: 'dog',
		images: [dog3],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
		id:5,
		isFound: false,
		petName: 'Валерьянка',
		type: 'cat',
		images: [cat1],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
		id:6,
		isFound: true,
		petName: 'Кися',
		type: 'cat',
		images: [cat2],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
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
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},{
		id:8,
		isFound: false,
		petName: 'Гога',
		type: 'parrot',
		images: [parrot1],
		dateLost: '20.06.2023',
		dateFound: '',
		ownerData: {
			ownerName: 'Вася',
			ownerLastName: 'Пупкин',
			ownerAddress: 'ул.Рукожопов 25а, кв. 51',
			ownerTel: '+70000000000'
		},
		founderData:{
			founderName: 'Петя',
			founderTel: '+70000000000',
			founderPreferContacts: 'три раза в колокол'
		},
		addressLost: 'ул. 197659ой гаврдейской дивизии, д.23',
		addressFound: 'г.Томск, ул.Малые Задроты'
	},
]