import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';

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
		},
	});

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};