class Pages {
    private root = '/' || 'https://nextgen-frontend-seven.vercel.app'

    HOME = `${this.root}`
    REGISTER = `${this.root}register`
    LOGIN = `${this.root}login`
    PROFILE = `${this.root}dashboard/profile`
    TABLES = `${this.root}dashboard/tables`
    BILLING = `${this.root}dashboard/billing`
	DASHBOARD = `${this.root}dashboard`
    PROJECTS = `${this.root}dashboard/projects`
}

export const PAGES = new Pages()
