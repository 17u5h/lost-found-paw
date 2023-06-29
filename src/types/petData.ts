export type Pet = {
	id:number
	isFound: boolean
	petName: string
	type?: string
	images?: string[]
	dateLost?: string
	dateFound?: string
	ownerData?: {
		ownerName: string
		ownerLastName: string
		ownerAddress: string
		ownerTel: string
	},
	founderData?:{
		founderName: string
		founderTel: string
		founderPreferContacts: string
	},
	addressLost?: string
	addressFound?: string
}