export const verifyToken = async () => {
    
    const token = sessionStorage.getItem('token')

    if (!token) return false
    
    const res = await fetch('http://localhost:3000/api/verify-token', {
        method: 'POST',
        body: JSON.stringify({token}),
        headers: {'Content-type': 'application/json'}
    })
    const { success } = await res.json()

    if (success) return true

    sessionStorage.removeItem('token')

    return false
}