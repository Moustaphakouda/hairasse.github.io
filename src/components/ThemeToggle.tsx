import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 hover:scale-110 active:scale-95 ${className}`}
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
      title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      <div className="absolute inset-0 rounded-full bg-gold-100 dark:bg-gold-900/40" />
      {theme === 'dark' ? (
        <Sun className="relative w-5 h-5 text-gold-300" />
      ) : (
        <Moon className="relative w-5 h-5 text-gold-700" />
      )}
    </button>
  );
}
