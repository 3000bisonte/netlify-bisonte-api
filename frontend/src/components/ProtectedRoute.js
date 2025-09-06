'use client';
import styles from './ProtectedRoute.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      console.log('🚫 No autenticado, redirigiendo...');
      router.replace('/');
    }
  }, [status, router]);

  // Mostrar loading mientras verifica
  if (status === 'loading') {
    return (
      <div className={styles.minHScreen + " " + styles.flex + " " + styles.itemsCenter + " " + styles.justifyCenter + " " + styles.bgGradientToBr + " " + styles.fromOrange400 + " " + styles.toRed500}>
        <div className={styles.textCenter}>
          <div className={styles.animateSpin + " " + styles.roundedFull + " " + styles.h12 + " " + styles.w12 + " " + styles.border4 + " " + styles.borderWhite + " " + styles.borderTTransparent + " " + styles.mxAuto + " " + styles.marginBottom4}></div>
          <p className={styles.textWhite + " " + styles.fontMedium}>Verificando autenticación...</p>
        </div>
      </div>
    );
  }

  // Solo mostrar contenido si está autenticado
  if (session) {
    return children;
  }

  // No mostrar nada mientras redirige
  return null;
}
