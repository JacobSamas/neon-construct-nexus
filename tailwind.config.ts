
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk theme colors
				cyber: {
					blue: '#1EAEDB',
					magenta: '#D946EF',
					purple: '#8B5CF6',
					darkerPurple: '#6E59A5',
					darkPurple: '#1A1F2C',
					black: '#000000e6',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'digital-rain': {
					'0%': { 
						transform: 'translateY(-100%)',
						opacity: '0'
					},
					'5%': { 
						opacity: '0.5'
					},
					'100%': { 
						transform: 'translateY(100vh)',
						opacity: '0'
					}
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)'
					},
					'20%': {
						transform: 'translate(-3px, 3px)'
					},
					'40%': {
						transform: 'translate(-3px, -3px)'
					},
					'60%': {
						transform: 'translate(3px, 3px)'
					},
					'80%': {
						transform: 'translate(3px, -3px)'
					},
					'100%': {
						transform: 'translate(0)'
					}
				},
				'neon-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 5px #1EAEDB, 0 0 10px #1EAEDB, 0 0 15px #1EAEDB, 0 0 20px #1EAEDB'
					},
					'50%': {
						boxShadow: '0 0 10px #1EAEDB, 0 0 20px #1EAEDB, 0 0 30px #1EAEDB, 0 0 40px #1EAEDB'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'rotate-slow': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				'slide-in-left': {
					'0%': {
						transform: 'translateX(-100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)',
						opacity: '0'
					},
					'100%': {
						transform: 'translateX(0)',
						opacity: '1'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'digital-rain': 'digital-rain 5s linear infinite',
				'glitch': 'glitch 0.5s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
			},
			fontFamily: {
				cyber: ['Orbitron', 'sans-serif'],
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(30, 174, 219, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 174, 219, 0.1) 1px, transparent 1px)',
				'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
				'neon-glow': 'linear-gradient(to right, #D946EF, #8B5CF6, #1EAEDB)',
			},
			boxShadow: {
				'neon-blue': '0 0 5px rgba(30, 174, 219, 0.5), 0 0 20px rgba(30, 174, 219, 0.3)',
				'neon-magenta': '0 0 5px rgba(217, 70, 239, 0.5), 0 0 20px rgba(217, 70, 239, 0.3)',
				'neon-purple': '0 0 5px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
