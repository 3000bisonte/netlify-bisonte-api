import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error('Missing credentials');
          return null;
        }

        try {
          // URL de la API de Netlify Functions
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://bisontebackend.netlify.app/.netlify/functions';
          
          const response = await fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          });

          if (!response.ok) {
            console.error('Login failed:', response.status);
            return null;
          }

          const data = await response.json();

          if (data.token && data.user) {
            // Retornar el usuario con todos los datos necesarios
            return {
              id: data.user._id || data.user.id,
              email: data.user.email,
              name: data.user.name || data.user.nombre,
              role: data.user.role || data.user.rol,
              token: data.token,
              esAdministrador: data.user.esAdministrador || false,
              esRecolector: data.user.esRecolector || false,
              ...data.user
            };
          }

          // Fallback para admin local si la API no está disponible
          if (credentials.email === "admin@bisonteapp.com" && credentials.password === "admin123") {
            return {
              id: "admin",
              email: credentials.email,
              name: "Admin User",
              role: "admin",
              esAdministrador: true,
              esRecolector: false
            };
          }

          return null;
        } catch (error) {
          console.error('Auth error:', error);
          
          // Fallback para admin local en caso de error
          if (credentials.email === "admin@bisonteapp.com" && credentials.password === "admin123") {
            return {
              id: "admin",
              email: credentials.email,
              name: "Admin User",
              role: "admin",
              esAdministrador: true,
              esRecolector: false
            };
          }
          
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      // Agregar datos del usuario al token
      if (user) {
        token.accessToken = user.token;
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
        token.esAdministrador = user.esAdministrador;
        token.esRecolector = user.esRecolector;
      }
      
      // Preservar token de Google OAuth
      if (account?.provider === "google") {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      
      return token;
    },
    async session({ session, token }) {
      // Enviar propiedades al cliente
      if (token) {
        session.accessToken = token.accessToken;
        session.user = {
          id: token.id,
          email: token.email,
          name: token.name,
          role: token.role,
          esAdministrador: token.esAdministrador,
          esRecolector: token.esRecolector
        };
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // Permitir sign in para todas las cuentas válidas
      return true;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 días
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
