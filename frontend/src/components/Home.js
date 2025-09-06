import HomeModular from '@/components/home/HomeModular';

// Archivo limpiado: se mantiene solo el wrapper al HomeModular para compatibilidad con imports antiguos.
export default function Home(props) {
  return <HomeModular {...props} />;
}