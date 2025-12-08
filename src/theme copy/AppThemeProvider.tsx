import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import type { } from '@mui/x-date-pickers/themeAugmentation';

interface Props {
	children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: Props) => {
	const theme = createTheme({
		palette: {
			mode: "dark",
		},
		typography: {
			fontFamily: 'var(--font-Play)',
			fontSize: 14,
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						fontFamily: 'var(--font-Play)',
					},
				},
			},
			MuiPickersDay: {
				styleOverrides: {
					root: {
						"&.Mui-selected": {
							backgroundColor: "var(--color-primary-500) !important",
							color: "white",
							"&:hover": {
								backgroundColor: "var(--color-primary-500) !important",
							},
						},
						"&.MuiPickersDay-today:not(.Mui-selected)": {
							border: "none",
							backgroundColor: "transparent",
						},
						"&:hover": {
							backgroundColor: "var(--color-primary-900) !important",
						},
					},
				},
			},
			MuiMonthCalendar: {
				styleOverrides: {
					button: {
						"&.Mui-selected": {
							backgroundColor: "var(--color-primary-500) !important",
							color: "#fff",
							"&:hover": {
								backgroundColor: "var(--color-primary-500) !important",
							},
						},
						"&:hover": {
							backgroundColor: "var(--color-primary-900) !important",
						},
					},
				},
			},
			MuiYearCalendar: {
				styleOverrides: {
					button: {
						"&.Mui-selected": {
							backgroundColor: "var(--color-primary-500) !important",
							color: "#fff",
							"&:hover": {
								backgroundColor: "var(--color-primary-500) !important",
							},
						},
						"&:hover": {
							backgroundColor: "var(--color-primary-900) !important",
						},
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};