export const getHeaderTitle = (pathname: string): string => {
    const TITLE_MAP: Record<string, string> = {
        "/": "Inicio",
        "/login": "Iniciar sesión",
        "/sign-up": "Crear cuenta",
        "/forgot-password": "Recuperar contraseña",
        "/reset-password": "Cambiar contraseña",
        "/profile": "Perfil",
        "/settings": "Configuraciones",
    };

    if (TITLE_MAP[pathname]) return TITLE_MAP[pathname];

    const dynamicMatch = Object.keys(TITLE_MAP).find((route) => {
        if (!route.includes("/:")) return false;

        const base = route.split("/:")[0];
        return pathname.startsWith(base);
    });

    if (dynamicMatch) return TITLE_MAP[dynamicMatch];

    return "Página";
};
