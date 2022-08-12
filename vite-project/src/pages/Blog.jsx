import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyToken } from '../auth/verifyToken'

export const Blog = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => await verifyToken()

    fetchData()
      .then((access) => {
        if (!access) {
          navigate('/')
        }
        setLoading(false)
      })
  }, [])

  if (loading) return

  return (
    <div>Blog</div>
  )
}
