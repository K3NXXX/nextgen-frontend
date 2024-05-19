class Pages {
	private root = "/" || "https://nextgen-frontend-seven.vercel.app"

	HOME = `${this.root}`
	REGISTER = `${this.root}register`
	LOGIN = `${this.root}login`
	PROFILE = `${this.root}profile`
}

export const PAGES = new Pages()