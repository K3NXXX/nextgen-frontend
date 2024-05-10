export interface IRegisterForm {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface ILoginForm {
    email: string
    password: string
}

export interface IVerifyEmailForm {
    digitOne: number
    digitTwo: number
    digitThree: number
    digitFour: number
    digitFive: number
    digitSix: number
}

export interface IForgotPasswordForm {
    email: string
}

export interface IResetPasswordForm {
    newPassword: string
}
