import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Heart, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface LoginFormProps {
  onLogin: (username: string) => void;
}

// Usuários cadastrados localmente (simulação)
const REGISTERED_USERS = [
  { username: 'drama_lover', password: 'dorama123', name: 'Drama Lover' },
  { username: 'kdrama_fan', password: 'korea2024', name: 'K-Drama Fan' },
  { username: 'admin', password: 'admin', name: 'Administrador' },
];

type FeedbackType = 'error' | 'success' | 'info' | null;

interface Feedback {
  type: FeedbackType;
  message: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>({ type: null, message: '' });
  const [shake, setShake] = useState(false);

  const validateInputs = (): boolean => {
    if (!username.trim()) {
      setFeedback({ type: 'error', message: 'Por favor, digite seu nome de usuário' });
      triggerShake();
      return false;
    }
    if (username.trim().length < 3) {
      setFeedback({ type: 'error', message: 'Usuário deve ter pelo menos 3 caracteres' });
      triggerShake();
      return false;
    }
    if (!password) {
      setFeedback({ type: 'error', message: 'Por favor, digite sua senha' });
      triggerShake();
      return false;
    }
    if (password.length < 4) {
      setFeedback({ type: 'error', message: 'Senha deve ter pelo menos 4 caracteres' });
      triggerShake();
      return false;
    }
    return true;
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback({ type: null, message: '' });

    if (!validateInputs()) return;

    setIsLoading(true);
    setFeedback({ type: 'info', message: 'Verificando credenciais...' });

    // Simula delay de autenticação para UX
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const user = REGISTERED_USERS.find(
      (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (user) {
      setFeedback({ type: 'success', message: `Bem-vindo(a), ${user.name}! ❤️` });
      
      // Aguarda animação de sucesso
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onLogin(user.name);
    } else {
      setFeedback({ type: 'error', message: 'Usuário ou senha incorretos. Tente novamente!' });
      triggerShake();
      setIsLoading(false);
    }
  };

  const getFeedbackIcon = () => {
    switch (feedback.type) {
      case 'error':
        return <AlertCircle className="w-4 h-4" />;
      case 'success':
        return <CheckCircle className="w-4 h-4" />;
      case 'info':
        return <Sparkles className="w-4 h-4 animate-spin" />;
      default:
        return null;
    }
  };

  const getFeedbackStyles = () => {
    switch (feedback.type) {
      case 'error':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'info':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return '';
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username Field */}
        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium text-foreground">
            Nome de Usuário
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="username"
              type="text"
              variant="romantic"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
              className={cn(
                'pl-12',
                shake && 'animate-[shake_0.5s_ease-in-out]',
                feedback.type === 'error' && 'border-destructive focus-visible:ring-destructive/30'
              )}
              disabled={isLoading}
              autoComplete="username"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-foreground">
            Senha
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              variant="romantic"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              className={cn(
                'pl-12 pr-12',
                shake && 'animate-[shake_0.5s_ease-in-out]',
                feedback.type === 'error' && 'border-destructive focus-visible:ring-destructive/30'
              )}
              disabled={isLoading}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Feedback Message */}
        {feedback.type && (
          <div
            className={cn(
              'flex items-center gap-2 p-3 rounded-lg border animate-slide-up text-sm',
              getFeedbackStyles()
            )}
          >
            {getFeedbackIcon()}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="romantic"
          size="xl"
          className="w-full font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Sparkles className="w-5 h-5 animate-spin" />
              Entrando...
            </>
          ) : (
            <>
              <Heart className="w-5 h-5" />
              Entrar no DoramaList
            </>
          )}
        </Button>

        {/* Help Text */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground opacity-75">
            Seus dados são processados localmente 🔒
          </p>
        </div>
      </form>

      {/* Shake animation keyframes */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
};

export default LoginForm;