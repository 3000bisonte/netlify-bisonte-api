"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LS_KEYS } from '@/auth/keys';

const IconUser = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="12" cy="8" r="4" />
		<path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
	</svg>
);
const IconChevronDown = () => (
	<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
		<path d="M6 9l6 6 6-6" />
	</svg>
);
const IconHelp = () => (
	<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
		<circle cx="12" cy="12" r="10" />
		<path d="M12 16v-1m0-4a1 1 0 10-1-1 1 1 0 001 1zm0 0v2" />
	</svg>
);
const IconLogout = () => (
	<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
		<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
	</svg>
);

export function HeaderHero({ session, isAdmin, stats = {}, features = {} }) {
	const [showProfileMenu, setShowProfileMenu] = useState(false);
	const [showAdminMenu, setShowAdminMenu] = useState(false);
	const [notifCount, setNotifCount] = useState(0);
	const [showNotif, setShowNotif] = useState(false);
	const router = useRouter();
	const userName = session?.user?.name || (session?.user?.email ? session.user.email.split('@')[0] : 'Usuario');
	const userEmail = session?.user?.email || '';

	useEffect(()=>{
		// Simulación de conteo de notificaciones (futuro: fetch real)
		let mounted = true;
		(async ()=>{
			try { /* placeholder */ if(mounted) setNotifCount(0); } catch {}
		})();
		return ()=>{mounted=false};
	},[]);

	useEffect(()=>{
		const close = (e) => {
			if(!e.target.closest) return;
			if(!e.target.closest('[data-menu-root]')) { setShowProfileMenu(false); setShowAdminMenu(false);} }
		document.addEventListener('click', close);
		return () => document.removeEventListener('click', close);
	}, []);

	const handleLogout = () => {
		try {
			localStorage.removeItem(LS_KEYS.AUTH_TOKEN);
			localStorage.removeItem(LS_KEYS.REFRESH_TOKEN);
			localStorage.removeItem(LS_KEYS.MOBILE_SESSION);
			localStorage.removeItem(LS_KEYS.USER);
			localStorage.removeItem(LS_KEYS.GOOGLE_AUTH_DATA);
			localStorage.removeItem(LS_KEYS.GOOGLE_AUTH_CODE);
			localStorage.removeItem(LS_KEYS.GOOGLE_AUTH_SUCCESS);
			localStorage.removeItem('google_id_token');
		} catch {}
		window.location.href='/';
	};

	return (
		<>
			{/* Fondo decorativo mejorado */}
			<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
				<div className="absolute w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-[#41e0b3]/15 to-[#2bbd8c]/10 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse" />
				<div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-[#41e0b3]/5 rounded-full blur-2xl bottom-[-100px] right-[-100px] animate-pulse" style={{ animationDelay: '1s' }} />
			</div>
			
			{/* Header mejorado - Ancho completo adaptativo */}
			<header className="sticky top-0 z-30 bg-gradient-to-r from-[#18191A]/95 to-[#1a1b1d]/95 backdrop-blur-xl border-b border-[#41e0b3]/30 shadow-2xl w-full" style={{ paddingTop: 'max(env(safe-area-inset-top), 6px)' }} role="banner">
				<div className="w-full flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 min-h-[60px] sm:min-h-[64px] gap-2 sm:gap-3" aria-label="Barra principal">
					{/* Brand mejorado */}
					<div className="flex items-center gap-3 min-w-0">
						<Link href="/home/" className="shrink-0 group">
							<div className="relative">
								<img src="/LogoNew.jpg" alt="Logo" className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl shadow-lg group-hover:shadow-[#41e0b3]/20 transition-all duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#41e0b3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
						</Link>
						<div className="flex flex-col">
							<span className="text-[#41e0b3] font-black text-xl sm:text-2xl tracking-wide drop-shadow-lg truncate bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] bg-clip-text text-transparent">Bisonte</span>
							<span className="text-[#41e0b3]/60 text-[10px] sm:text-xs font-medium tracking-widest uppercase hidden sm:block">Logística</span>
						</div>
					</div>
					{/* Actions mejoradas */}
					<div className="flex items-center gap-2 sm:gap-3" data-menu-root>
						{/* Notificaciones mejoradas */}
						<div className="relative" data-menu-root>
							<button onClick={()=>setShowNotif(v=>!v)} className="relative p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#23272b] to-[#1a1e22] text-[#41e0b3] hover:from-[#41e0b3]/20 hover:to-[#2bbd8c]/20 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#41e0b3]/20 group" aria-haspopup="true" aria-expanded={showNotif} aria-label="Notificaciones">
								<svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9a6 6 0 1112 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10 21h4" /></svg>
								{notifCount>0 && <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse shadow-lg">{notifCount}</span>}
							</button>
							{showNotif && (
								<div className="absolute right-0 mt-3 w-72 bg-gradient-to-br from-[#18191A]/98 to-[#1a1b1d]/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#41e0b3]/40 py-4 z-40 text-sm animate-fade-in-down">
									<div className="px-5 pb-3 font-bold text-[#41e0b3] border-b border-[#41e0b3]/20">Notificaciones</div>
									<ul className="max-h-64 overflow-y-auto divide-y divide-[#41e0b3]/10">
										{notifCount === 0 && <li className="px-5 py-4 text-gray-400 text-xs text-center">Sin notificaciones</li>}
									</ul>
									<div className="pt-3 px-5 flex justify-end border-t border-[#41e0b3]/20">
										<button onClick={()=>router.push('/notificaciones')} className="text-[#41e0b3] hover:text-[#2bbd8c] hover:underline text-xs font-medium transition-colors">Ver todas</button>
									</div>
								</div>
							)}
						</div>
						{/* Admin mejorado */}
						{isAdmin && (
							<div className="relative" data-menu-root>
								<button onClick={()=>setShowAdminMenu(v=>!v)} className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-[#23272b] to-[#1a1e22] text-[#41e0b3] hover:from-[#41e0b3]/20 hover:to-[#2bbd8c]/20 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#41e0b3]/20 flex items-center gap-2 group" aria-haspopup="true" aria-expanded={showAdminMenu} aria-label="Menú admin">
									<span className="text-xs font-bold hidden sm:inline bg-gradient-to-r from-[#41e0b3] to-[#2bbd8c] bg-clip-text text-transparent">Admin</span>
									<span className="text-xs font-bold sm:hidden">A</span>
									<IconChevronDown className={`w-3 h-3 transition-all duration-300 group-hover:scale-110 ${showAdminMenu?'rotate-180':''}`} />
								</button>
								{showAdminMenu && (
									<div className="absolute right-0 top-full mt-2 bg-[#18191A]/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#41e0b3]/30 py-3 min-w-[200px] z-40 space-y-2">
										<div className="px-4 text-xs uppercase tracking-wide text-[#41e0b3]/70">Resumen</div>
										<div className="grid grid-cols-3 gap-2 px-4">
											<div className="text-center">
												<div className="text-[#41e0b3] font-bold text-sm">{stats.usuarios||0}</div>
												<div className="text-[10px] text-gray-400">Usuarios</div>
											</div>
											<div className="text-center">
												<div className="text-[#41e0b3] font-bold text-sm">{stats.envios||0}</div>
												<div className="text-[10px] text-gray-400">Envíos</div>
											</div>
											<div className="text-center">
												<div className="text-[#41e0b3] font-bold text-sm">{stats.mensajes||0}</div>
												<div className="text-[10px] text-gray-400">Msgs</div>
											</div>
										</div>
										<div className="h-px bg-[#41e0b3]/20 mx-2" />
										<Link href="/admin" className="block px-4 py-2 text-[#41e0b3] hover:bg-[#23272b] rounded-lg text-sm" onClick={()=>setShowAdminMenu(false)}>Panel completo</Link>
									</div>
								)}
							</div>
						)}
						{/* Profile mejorado */}
						<div className="relative" data-menu-root>
							<button onClick={(e)=>{e.stopPropagation(); setShowProfileMenu(v=>!v);}} className="flex items-center gap-2 sm:gap-3 text-[#41e0b3] hover:text-white pl-2 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl transition-all duration-300 bg-gradient-to-br from-[#23272b] to-[#1a1e22] hover:from-[#41e0b3]/20 hover:to-[#2bbd8c]/20 shadow-lg hover:shadow-[#41e0b3]/20 group" aria-haspopup="true" aria-expanded={showProfileMenu} aria-label="Menú perfil">
								{/* Avatar mejorado */}
								<div className="relative">
									<div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#41e0b3] to-[#2bbd8c] flex items-center justify-center text-[#18191A] font-bold text-xs shadow-lg ring-2 ring-[#41e0b3]/30 group-hover:ring-[#41e0b3]/50 transition-all duration-300">
										{(session?.user?.name || session?.user?.email || 'U').substring(0,1).toUpperCase()}
									</div>
									<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#18191A] animate-pulse"></div>
								</div>
								<div className="hidden sm:flex flex-col items-start leading-none">
									<span className="text-xs font-semibold max-w-[80px] lg:max-w-[120px] truncate bg-gradient-to-r from-white to-[#41e0b3] bg-clip-text text-transparent">{userEmail || userName}</span>
									{isAdmin && <span className="text-[9px] uppercase tracking-wide text-[#41e0b3]/70 font-bold">Admin</span>}
								</div>
								<IconChevronDown className={`transition-all duration-300 group-hover:scale-110 ${showProfileMenu? 'rotate-180':''}`} />
							</button>
							{showProfileMenu && (
								<div className="absolute right-0 top-full mt-2 bg-[#18191A]/95 backdrop-blur-xl rounded-2xl shadow-xl border border-[#41e0b3]/30 py-2 min-w-[220px] z-40 animate-fade-in-down">
									<div className="px-4 py-3 text-[#41e0b3] text-sm max-w-[240px] flex items-center justify-between gap-2">
										<div className="truncate">
											<div className="text-[12px] font-semibold truncate">{userName}</div>
											<div className="text-[11px] text-[#9ee7d0] truncate">{userEmail}</div>
										</div>
										<Link href="/perfilCard" className="p-2 rounded-lg bg-[#23272b] hover:bg-[#41e0b3]/20 text-[#41e0b3]" onClick={()=>setShowProfileMenu(false)} aria-label="Ir a Mi perfil">
											<IconUser />
										</Link>
									</div>
									<div className="h-px bg-[#41e0b3]/20 mx-2 mb-1" />
									<Link href="/perfilCard" className="flex items-center gap-3 px-4 py-2 text-[#41e0b3] hover:bg-[#23272b] transition-colors rounded-xl mx-2 text-sm" onClick={()=>setShowProfileMenu(false)}>
										<span className="w-5 h-5 inline-flex items-center justify-center">👤</span>
										<span>Mi perfil</span>
									</Link>
									<Link href="/terminos" className="flex items-center gap-3 px-4 py-2 text-[#41e0b3] hover:bg-[#23272b] transition-colors rounded-xl mx-2 text-sm" onClick={()=>setShowProfileMenu(false)}>
										<span className="w-5 h-5 inline-flex items-center justify-center">📄</span>
										<span>Términos y condiciones</span>
									</Link>
									<div className="h-px bg-[#41e0b3]/20 mx-2 my-1" />
									<button className="flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-100/10 transition-colors w-full text-left rounded-xl mx-2 text-sm" onClick={handleLogout}>
										<IconLogout /> <span>Cerrar sesión</span>
									</button>
								</div>) }
						</div>
						<Link href="/contacto" className="hidden lg:inline-block text-[#41e0b3] hover:text-white p-2.5 sm:p-3 rounded-xl transition-all duration-300 bg-gradient-to-br from-[#23272b] to-[#1a1e22] hover:from-[#41e0b3]/20 hover:to-[#2bbd8c]/20 shadow-lg hover:shadow-[#41e0b3]/20 group">
							<IconHelp className="group-hover:scale-110 transition-transform duration-300" />
						</Link>
					</div>
				</div>
			</header>
			{/* Mensaje de bienvenida que ocupa todo el ancho como el nav inferior */}
			<section className="w-full z-20 relative">
				<div className="w-full px-3 sm:px-4 md:px-6">
					<div className="mt-4 sm:mt-6 mb-3 sm:mb-4 relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
						{/* Fondo animado */}
						<div className="absolute inset-0 bg-gradient-to-r from-[#41e0b3] via-[#2bbd8c] to-[#41e0b3] bg-[length:200%_100%] animate-gradient-x"></div>
						<div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
						
						{/* Contenido */}
						<div className="relative px-5 sm:px-6 py-4 sm:py-5 flex items-center gap-4">
							<div className="flex-shrink-0">
								<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30 shadow-lg">
									<span className="text-xl sm:text-2xl animate-bounce">👋</span>
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
									<p className="text-white/90 text-sm sm:text-base font-medium leading-tight">
										Bienvenido a <span className="font-bold text-white">Bisonte App</span>
									</p>
									<div className="flex items-center gap-2">
										<div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
										<span className="font-bold text-white text-sm sm:text-base truncate max-w-[120px] sm:max-w-[140px] bg-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">{userName}</span>
									</div>
								</div>
							</div>
							<div className="flex-shrink-0 hidden sm:block">
								<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg ring-2 ring-green-400/30"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default HeaderHero;

