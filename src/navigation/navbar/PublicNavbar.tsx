import FantasyButton from "../../global/components/buttons/FantasyButton"

const PublicNavbar = () => {
	return (
		// className="w-full flex justify-between items-center px-8 py-4 bg-linear-to-r from-brand-primary-500 to-brand-secondary-500"
		<nav className="w-full flex justify-between items-center py-4 px-4 md:h-[72px]">
			<div className="flex items-center">
				<img
					src="/Desktop/palabra.png"
					alt="FFANTASY Logo"
					className="h-8"
				/>
			</div>
			<FantasyButton variant="primary" size="sm">
				Iniciar Sesión
			</FantasyButton>
		</nav>
	)
}

export default PublicNavbar