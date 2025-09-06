"use client"

import { useState, useEffect } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

export default function GoogleSignInButton() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isWebView, setIsWebView] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Detect WebView environment
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const isWebViewDetected = 
      /wv|WebView/i.test(userAgent) ||
      /Android.*Version\/[\d.]+.*Chrome\/[\d.]+ Mobile/i.test(userAgent) ||
      (/Android.*Mobile/i.test(userAgent) && !/Chrome/i.test(userAgent)) ||
      /iPhone|iPad.*AppleWebKit.*Mobile/i.test(userAgent) && !/Safari/i.test(userAgent)
    
    setIsWebView(isWebViewDetected)
    
    console.log('🔍 WebView Detection:', {
      detected: isWebViewDetected,
      userAgent: userAgent.substring(0, 100) + '...'
    })
  }, [])

  const handleSignIn = async () => {
    setIsLoading(true)
    setError('')

    try {
      console.log('🚀 Starting Google Sign-In, WebView:', isWebView)
      
      if (isWebView) {
        // For WebView: Direct redirect to avoid popup issues
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
        const callbackUrl = `${baseUrl}/home`
        
        console.log('📱 WebView: Redirecting to NextAuth Google provider')
        
        // Use window.location for WebView to avoid popup blocking
        window.location.href = `/api/auth/signin/google?callbackUrl=${encodeURIComponent(callbackUrl)}`
        
      } else {
        // For regular browsers: Use NextAuth with popup/redirect
        console.log('🌐 Browser: Using NextAuth signIn')
        
        const result = await signIn('google', {
          callbackUrl: '/home',
          redirect: false
        })

        if (result?.error) {
          console.error('❌ NextAuth signIn error:', result.error)
          setError('Error al iniciar sesión con Google. Inténtalo de nuevo.')
          setIsLoading(false)
        } else if (result?.ok) {
          // Check session after successful sign-in
          const session = await getSession()
          if (session) {
            console.log('✅ Session established, redirecting to home')
            router.push('/home')
          } else {
            setError('No se pudo establecer la sesión')
            setIsLoading(false)
          }
        } else if (result?.url) {
          // If there's a redirect URL, use it
          console.log('🔄 Redirecting to:', result.url)
          window.location.href = result.url
        } else {
          setIsLoading(false)
        }
      }
    } catch (err) {
      console.error('❌ Google Sign-In error:', err)
      setError('Error al iniciar sesión con Google. Inténtalo de nuevo.')
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={handleSignIn}
        disabled={isLoading}
        className="flex items-center justify-center w-full py-3 px-4 bg-white text-gray-800 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        {isLoading ? (
          <>
            <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full mr-3"></div>
            {isWebView ? 'Redirigiendo a Google...' : 'Iniciando sesión...'}
          </>
        ) : (
          <>
            <GoogleIcon />
            <span className="ml-3">Continuar con Google</span>
          </>
        )}
      </button>
      
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
      )}
      
      {isWebView && !isLoading && (
        <p className="mt-2 text-xs text-gray-500 text-center">
          Modo WebView - Se redirigirá a Google directamente
        </p>
      )}
    </div>
  )
}
