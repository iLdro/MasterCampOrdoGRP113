class User {
    constructor(email, username, password = null) {
        this.email = email
        this.username = username
        this.password = password
        this.role = null
    }

    setRole(role) {
        this.role = role
    }
}

class AuthProvider {

    static async getAllUsers() {
        const res = await fetch('http://localhost:5000/auth/users').catch(err => {
            console.group("Error Data")
            console.log("error: " + err)
            console.log("message: There has been an error when getting all users")
            console.groupEnd()
        })

        const data = await res.json()
        let arr = []

        data.forEach(el => {

            console.log(el)

            const user = new User(
                el.email,
                el.username,
                null
            )

            if (el.role === 'admin') return

            user.setRole(el.role)

            arr.push(user)
        })

        return arr
    }

    static async getUser(id) {
        const res = await fetch(`http://localhost:5000/auth/users/${id}`)
        return res.json()
    }

    static async register(user) {

        const res = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                "username": user.username,
                "email": user.email,
                "password": user.password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).catch(err => {
            console.group("Error data")
            console.log(err)
            console.log("There has been an error when registering user: " + user)
            console.groupEnd()
        })

        return await res.json()
    }

    static async update(user, role) {
        const res = await fetch('http://localhost:5000/auth/users', {
            method: 'PUT',
            body: JSON.stringify({
                "username": user.username,
                "email": user.email,
                "role": role,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        return res.json()
    }

    static async BanUser(id) {
        const res = await fetch(`http://localhost:5000/auth/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "role": "banned",
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        return res.json()
    }

    static async UnbanUser(id) {
        const res = await fetch(`http://localhost:5000/auth/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                "role": "user",
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        return res.json()
    }

    static async signIn(user) {

        //if (!jsonData.auth) return false // using auth has failed

        const res = await fetch('http://localhost:5000/auth/sign_in', {
            method: 'POST',
            body: JSON.stringify({
                'email': user.email,
                'password': user.password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await res.json()

        if (!data.token) return false

        return data.token
    }

    static async disconnect(user) {
        return user
    }
}

export default {
    User,
    AuthProvider
}