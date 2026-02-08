import React, { useState } from 'react';
import { Heart, Sparkles, Star, Film } from 'lucide-react';
import LoginForm from '@/components/LoginForm';
import Dashboard from '@/components/Dashboard';
import FloatingPetals from '@/components/FloatingPetals';

const Index: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name: string) => {
    setUserName(name);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  if (isLoggedIn) {
    return <Dashboard userName={userName} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen soft-gradient relative overflow-hidden">
      <FloatingPetals />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Logo & Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full romantic-gradient romantic-shadow mb-6 animate-float">
            <Heart className="w-10 h-10 text-primary-foreground fill-current" />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            DoramaList
          </h1>
          
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Avalie seus doramas favoritos e acompanhe sua jornada pelo universo K-Drama ✨
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md glass-card rounded-2xl p-8 animate-slide-up">
          <div className="text-center mb-6">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
              Bem-vindo de volta!
            </h2>
            <p className="text-sm text-muted-foreground">
              Entre para continuar sua maratona
            </p>
          </div>

          <LoginForm onLogin={handleLogin} />
        </div>

        {/* Features */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-md w-full animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Avalie com<br />estrelas</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
              <Film className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Organize sua<br />watchlist</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Descubra<br />novos doramas</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 DoramaList • Sistema para avaliação de doramas
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;