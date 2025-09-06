"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LS_KEYS } from '@/auth/keys';
import { useMobileSession } from '@/hooks/useMobileSession';
import { apiClient } from '@/libs/api-client';
import { HeaderHero } from './sections/HeaderHero';
import SimpleHero from './sections/SimpleHero';
import Slider from './sections/Slider';
import Benefits from './sections/Benefits';
import ProcessSimple from './sections/ProcessSimple';
import AdminPanel from './sections/AdminPanel';
import WelcomeModal from './sections/WelcomeModal';
import BottomNav from '@/components/BottomNav';
import SectionBoundary from '@/components/SectionBoundary';

// Reutilizar mismos datos del componente monolítico para que visual se mantenga
const sliderData = [
	{ img: '/slider/slider1.jpg' },
	{ img: '/slider/slider2.jpg' },
	{ img: '/slider/slider3.jpg' },
];

// Marcar versión para depurar si el usuario sigue viendo una versión vieja en cache.
const BUILD_TAG = 'cc9dabe'; // actualizar manualmente si hace falta identificar commits nuevos

export default function HomeModular() {
	const router = useRouter();
	const { data: session, loading, signOut: mobileSignOut } = useMobileSession();
	const [isClient, setIsClient] = useState(false);
	const [invisibleBoot, setInvisibleBoot] = useState(false);
	const [visible, setVisible] = useState(false);
	const [slide, setSlide] = useState(0);
	const sliderTrackRef = useRef(null);
	const [showWelcome, setShowWelcome] = useState(false);
	const [features, setFeatures] = useState({ adminPanel: false, advancedQuotes: false });
	const [stats, setStats] = useState({ usuarios: 0, envios: 0, mensajes: 0 });

	// Diagnóstico: validar que los componentes importados son funciones válidas
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const types = {
				HeaderHero: typeof HeaderHero,
				SimpleHero: typeof SimpleHero,
				Slider: typeof Slider,
				Benefits: typeof Benefits,
				ProcessSimple: typeof ProcessSimple,
				AdminPanel: typeof AdminPanel,
				WelcomeModal: typeof WelcomeModal
			};
			console.log('[HomeModular][Diagnostics] Component types:', types);
			Object.entries(types).forEach(([name, t]) => {
				if (t !== 'function') console.warn('[HomeModular][Diagnostics] ⚠️ Componente inválido:', name, 'type =', t);
			});
		}
	}, []);

	// client ready + invisible boot flag
	useEffect(() => {
		setIsClient(true);
		if (typeof window !== 'undefined') {
			if (localStorage.getItem(LS_KEYS.POST_AUTH_INVISIBLE)) setInvisibleBoot(true);
		}
	}, []);

	// session gating similar to original Home.js (simplified logs)
	useEffect(() => {
		if (!loading && !session) {
			const googleAuth = typeof window !== 'undefined' ? localStorage.getItem(LS_KEYS.GOOGLE_AUTH_SUCCESS) : null;
			const authToken = typeof window !== 'undefined' ? localStorage.getItem(LS_KEYS.AUTH_TOKEN) : null;
			const user = typeof window !== 'undefined' ? localStorage.getItem(LS_KEYS.USER) : null;
			if (!(googleAuth || (authToken && user))) {
				const t = setTimeout(() => { if (!session) router.replace('/'); }, 4000);
				return () => clearTimeout(t);
			}
		} else if (session) {
			if (typeof window !== 'undefined') {
				if (localStorage.getItem(LS_KEYS.POST_AUTH_INVISIBLE)) {
					localStorage.removeItem(LS_KEYS.POST_AUTH_INVISIBLE);
					setTimeout(() => setVisible(true), 60);
				} else setVisible(true);
			} else setVisible(true);
		}
	}, [loading, session, router]);

	// role features
	const ADMIN_EMAILS = ['3000bisonte@gmail.com','bisonteangela@gmail.com','bisonteoskar@gmail.com'];
	const isAdmin = !!session?.user?.isAdmin || (session?.user?.email && ADMIN_EMAILS.includes(session.user.email));
	useEffect(() => {
		if (!session?.user) return;
		const role = session.user.role || (isAdmin ? 'admin' : 'user');
		setFeatures({
			adminPanel: role === 'admin',
			advancedQuotes: role === 'admin'
		});
	}, [session, isAdmin]);

	// stats: solo si usuario admin y token backend presente
	useEffect(() => {
		if (!session?.user) return; // esperar sesión
		const hasBackend = typeof window !== 'undefined' ? !!localStorage.getItem('auth_backend') : false;
		if (!hasBackend) return; // esperar intercambio backend
		if (!isAdmin) return; // no solicitar si no admin para evitar 403
		let cancelled = false;
		(async () => {
			try {
				const data = await apiClient.get('/api/admin/stats');
				if (!cancelled && data) setStats({ usuarios: data.usuarios || 0, envios: data.envios || 0, mensajes: data.mensajes || 0 });
			} catch (e) {
				if (!cancelled) console.warn('[HomeModular] No se pudieron obtener stats admin:', e.message);
			}
		})();
		return () => { cancelled = true; };
	}, [session?.user?.email, isAdmin]);

	// Re-fetch stats cuando se habilita backend token posteriormente
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const handler = (e) => {
			if (e.key === 'auth_backend' && e.newValue === 'true') {
				// intentar refetch
				if (session?.user && isAdmin) {
					apiClient.get('/api/admin/stats').then(data => {
						if (data) setStats({ usuarios: data.usuarios || 0, envios: data.envios || 0, mensajes: data.mensajes || 0 });
					}).catch(()=>{});
				}
			}
		};
		window.addEventListener('storage', handler);
		return () => window.removeEventListener('storage', handler);
	}, [session?.user?.email, isAdmin]);

	// welcome modal
	useEffect(() => {
		if (typeof window === 'undefined') return;
		if (!localStorage.getItem(LS_KEYS.WELCOME_SHOWN)) setShowWelcome(true);
	}, []);
	const userName = session?.user?.name || (session?.user?.email ? session.user.email.split('@')[0] : 'Usuario');
	const closeWelcome = () => { setShowWelcome(false); if (typeof window !== 'undefined') localStorage.setItem(LS_KEYS.WELCOME_SHOWN,'true'); };

	// slider auto
	useEffect(() => { const id = setInterval(()=>setSlide(s=> (s===sliderData.length-1?0:s+1)),5000); return ()=>clearInterval(id); }, []);

	// interaction handlers for slider
	const touchStart = e => sliderTrackRef.current && (sliderTrackRef.current.touchStartX = e.touches[0].clientX);
	const touchEnd = e => {
		if(!sliderTrackRef.current) return; const start = sliderTrackRef.current.touchStartX; if(start==null) return; const dist = start - e.changedTouches[0].clientX; if(Math.abs(dist)>50) dist>0? setSlide(s=> (s===sliderData.length-1?0:s+1)) : setSlide(s=> (s===0? sliderData.length-1: s-1));
	};

	// Sanear llaves sensibles de registro una vez hay sesión backend estable
	useEffect(() => {
		if (!session?.user) return;
		try {
			['passwordRegistro','nombreRegistro','emailRegistro'].forEach(k => localStorage.removeItem(k));
		} catch {}
	}, [session?.user?.email]);

	// Log de build y estado (antes de los returns condicionales para no romper orden de hooks)
	useEffect(()=>{ console.log('[HomeModular] Loaded build tag', BUILD_TAG, { session, features, stats }); }, [session, features, stats]);

	// guard states
	if (!isClient || loading) return <div className="min-h-screen flex items-center justify-center"><div className="text-center"><div className="w-10 h-10 border-2 border-gray-200 border-t-[#41e0b3] rounded-full animate-spin mx-auto mb-4" /><p className="text-gray-400 text-sm">Cargando...</p></div></div>;
	if (!session) return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6"><div className="w-12 h-12 border-2 border-gray-300 border-t-[#41e0b3] rounded-full animate-spin mb-4" /><p className="text-gray-600 text-sm mb-4">Verificando autenticación...</p><button onClick={()=>router.replace('/login/')} className="px-4 py-2 rounded-lg bg-[#41e0b3] text-white text-sm font-semibold shadow">Ir a Login</button></div>;

	const rootClasses = `min-h-screen bg-gradient-to-br from-[#e3dfde] via-[#f8fafc] to-[#41e0b3]/10 flex flex-col w-full relative overflow-hidden transition-opacity duration-500 ${invisibleBoot ? (visible? 'opacity-100':'opacity-0') : 'opacity-100'}`;

	return (
		<div className={rootClasses} data-build={BUILD_TAG}>
			<SectionBoundary name="HeaderHero"><HeaderHero session={session} isAdmin={isAdmin} stats={stats} features={features} /></SectionBoundary>
			
			{/* Hero Section - Full width */}
			<SectionBoundary name="SimpleHero"><SimpleHero /></SectionBoundary>
			
			{/* Main content - Full width como el nav inferior */}
			<main className="w-full flex-1 flex flex-col gap-8 pb-32 relative z-10">
				<SectionBoundary name="Slider"><Slider slide={slide} setSlide={setSlide} /></SectionBoundary>
				<SectionBoundary name="Benefits"><Benefits /></SectionBoundary>
				<SectionBoundary name="ProcessSimple"><ProcessSimple /></SectionBoundary>
				{features.adminPanel && <SectionBoundary name="AdminPanel"><AdminPanel enabled stats={stats} /></SectionBoundary>}
				<SectionBoundary name="BottomNav"><BottomNav /></SectionBoundary>
				<div className="mt-4 text-center text-[10px] tracking-wide text-gray-400/70 select-none">HomeModular build {BUILD_TAG}</div>
			</main>
			<SectionBoundary name="WelcomeModal"><WelcomeModal show={showWelcome} onClose={closeWelcome} userName={userName} /></SectionBoundary>
		</div>
	);
}

