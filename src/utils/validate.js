export const validateData = (email , password, name) => {
    
    const isItValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isItValidPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    const isItValidName = /^[a-zA-Z ]{2,30}$/.test(name)

    if(!isItValidEmail) {
        return "Email is invalid"
    }
    if(!isItValidPassword) {
        return "Email is invalid"
    }

    if(!isItValidName) {
        return "Name is invalid"
    }

    return null


}