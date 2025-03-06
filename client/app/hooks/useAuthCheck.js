import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import getToken from '../utils/cookie' // Assuming getToken retrieves token from cookies or session storage

const useAuthCheck = () => {
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken() // Retrieve token
            if (token) {
                setIsAuthenticated(true) // Token exists, so user is authenticated
            } else {
                setIsAuthenticated(false) // No token found, user is not authenticated
                router.push('/auth/login') // Redirect to login page
            }
            setLoading(false) // Set loading to false once the check is complete
        }

        checkAuth()
    }, [router])

    return { isAuthenticated, loading }
}

export default useAuthCheck