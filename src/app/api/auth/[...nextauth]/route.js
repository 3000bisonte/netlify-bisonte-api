import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const response = await fetch('https://bisonteapi.netlify.app/.netlify/functions/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          });

          if (response.ok) {
            const user = await response.json();
            return {
              id: user.id,
              email: user.email,
              name: user.name,
              picture: user.picture
            };
          }
          
          return null;
        } catch (error) {
          console.error('Error en autenticación:', error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.picture;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.picture = token.picture;
      return session;
    },
    signIn: async ({ user, account, profile }) => {
      if (account.provider === 'google') {
        try {
          const response = await fetch('https://bisonteapi.netlify.app/.netlify/functions/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              googleId: profile.sub,
              picture: user.image
            })
          });
          
          if (response.ok) {
            const userData = await response.json();
            user.id = userData.id || profile.sub;
            return true;
          }
          
          return true; // Permitir login incluso si falla el registro
        } catch (error) {
          console.error('Error en registro con Google:', error);
          return true; // Permitir login incluso si hay error
        }
      }
      return true;
    }
  },
  pages: {
    signIn: '/login',
    error: '/auth/error'
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 horas
  },
  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
