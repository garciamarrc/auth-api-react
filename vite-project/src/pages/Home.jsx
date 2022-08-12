import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyToken } from '../auth/verifyToken'

export const Home = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => await verifyToken()

    fetchData()
      .then((access) => {
        if (access) {
          navigate('/blog')
        }
        setLoading(false)
      })
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    const newUser = {...user, [name]: value}
    setUser(newUser)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'Content-type': 'application/json'}
    })
    const data = await res.json()

    if (!data.success) {
      alert('Usuario no existe')
      return
    }

    sessionStorage.setItem('token', data.token)

    navigate('/blog')
  }

  if (loading) return

  return (
    <>
      <h1>Ingresa</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='username' onChange={handleChange} name='username' required />
        <input type='password' placeholder='password' onChange={handleChange} name='password' required />
        <input type='submit' value='send' />
      </form>
    </>
  )
}
