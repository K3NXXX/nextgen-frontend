class Pages {
    private root = '/' || 'https://nextgen-frontend-seven.vercel.app'

    HOME = `${this.root}`
    REGISTER = `${this.root}register`
    LOGIN = `${this.root}login`
    PROFILE = `${this.root}profile`
    TABLES = `${this.root}dashboard/tables`
    BILLING = `${this.root}dashboard/billing`
	DASHBOARD = `${this.root}dashboard`
}

export const PAGES = new Pages()
