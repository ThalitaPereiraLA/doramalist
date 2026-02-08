import React, { useState } from 'react';
import { LogOut, Heart, Star, Tv, Search, Filter, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DramaCard from './DramaCard';
import { cn } from '@/lib/utils';

interface DashboardProps {
  userName: string;
  onLogout: () => void;
}

// Função auxiliar para gerar pétalas de confete (fora do componente)
function generateConfettiPetals() {
  return Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    width: 10 + Math.random() * 15,
    height: 10 + Math.random() * 15,
    opacity: 0.6 + Math.random() * 0.4,
  }));
}

// Lista de doramas fictícios para avaliação
const DRAMAS_DATA = [
  {
    id: 1,
    title: 'Queridos X',
    year: 2025,
    episodes: 12,
    genre: 'Suspense, Romance, Crime, Melo Drama',
    image: '/public/Querido X.jpg',
    description: 'Quando Baek A Jin era pequena, ela sofreu violência doméstica. Para sobreviver, ela aprendeu a esconder suas emoções e manipular os outros ao ver seus corações. Ela é normalmente generosa e gentil com as pessoas, mas revela seu lado diabólico se alguém a irrita ou para seus próprios propósitos.',
  },
  {
    id: 2,
    title: 'O amor pode ser traduzido?',
    year: 2026,
    episodes: 12,
    genre: 'Psicológico, Comédia, Romance, Drama',
    image: '/public/O amor pode ser traduzido.jpg',
    description: 'Um intérprete brilhante enfrenta seu maior desafio: decifrar as emoções imprevisíveis de uma celebridade. Será que ele consegue traduzir para a linguagem do amor?',
  },
  {
    id: 3,
    title: 'Beleza Verdadeira',
    year: 2020,
    episodes: 16,
    genre: 'Comédia, Romance, Drama, Juventude',
    image: '/public/Beleza Verdadeira.jpg',
    description: 'Ex-presidiário abre um pequeno bar em Itaewon e luta contra uma poderosa corporação de alimentos enquanto busca vingança.',
  },
  {
    id: 4,
    title: 'Encontro',
    year: 2018,
    episodes: 16,
    genre: 'Romance, Drama, Melo Drama',
    image: '/public/Encontro.jpg',
    description: 'Cha Soo Hyun é a filha de uma poderosa família da política. Ela divorciou-se recentemente do seu rico marido de um casamento arranjado. Cansada de viver a vida guiada pelos outros, ela decide viajar para o exterior. Ela conhece no caminho Kim Jin Hyuk, um jovem espirituoso.',
  },
  {
    id: 5,
    title: 'Pousando no Amor',
    year: 2021,
    episodes: 16,
    genre: 'Militar, Comédia, Romance, Político',
    image: '/public/Pousando no Amor.jpg',
    description: 'O drama é sobre uma herdeira rica chamada Yoon Se Ri, que, enquanto voava de parapente, é forçada a aterrissar na Coreia do Norte por causa dos ventos fortes. Um oficial norte-coreano chamado Ri Jung Hyuk a esconde e protege, assim, começando a amá-la.',
  },
  {
    id: 6,
    title: 'O Que Há de Errado Com a Secretária Kim?',
    year: 2018,
    episodes: 16,
    genre: 'Romance',
    image: '/public/O que Ha de Errado com a Secretária Kim.jpg',
    description: 'È possível ser tão egocêntrico ao ponto de não ter ideia do que está acontecendo em sua volta? Lee Young Joon é vice-presidente da empresa de sua família, o Grupo Yoomyung. Ele é tão narcisista que não presta atenção ao que a sua fiel secretária, Kim Mi So, está tentando lhe dizer quase sempre.',
  },
];

const GENRES = ['Todos', 'Suspense', 'Romance', 'Crime', 'Melo Drama', 'Psicológico', 'Comédia', 'Drama', 'Juventude', 'Militar', 'Político'];

const Dashboard: React.FC<DashboardProps> = ({ userName, onLogout }) => {
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [watchedList, setWatchedList] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPetals] = useState(() => generateConfettiPetals());

  const handleRate = (dramaId: number, rating: number) => {
    setRatings((prev) => ({ ...prev, [dramaId]: rating }));
    
    
    if (rating === 5) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const handleToggleWatched = (dramaId: number) => {
    setWatchedList((prev) =>
      prev.includes(dramaId)
        ? prev.filter((id) => id !== dramaId)
        : [...prev, dramaId]
    );
  };

  const filteredDramas = DRAMAS_DATA.filter((drama) => {
    const matchesSearch = drama.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre =
      selectedGenre === 'Todos' ||
      drama.genre.toLowerCase().includes(selectedGenre.toLowerCase());

    return matchesSearch && matchesGenre;
  });

  const totalRated = Object.keys(ratings).length;
  const totalWatched = watchedList.length;
  const averageRating = totalRated > 0
    ? (Object.values(ratings).reduce((a, b) => a + b, 0) / totalRated).toFixed(1)
    : '0.0';

  return (
    <div className="min-h-screen soft-gradient">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {confettiPetals.map((petal) => (
            <div
              key={petal.id}
              className="absolute animate-petal-fall"
              style={{
                left: `${petal.left}%`,
                top: '-20px',
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
              }}
            >
              <Heart
                className="text-primary fill-primary"
                style={{
                  width: `${petal.width}px`,
                  height: `${petal.height}px`,
                  opacity: petal.opacity,
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full romantic-gradient flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">DoramaList</h1>
                <p className="text-xs text-muted-foreground">Olá, {userName}! 💕</p>
              </div>
            </div>

            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="bg-card border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Tv className="w-4 h-4 text-primary" />
                <span className="font-display text-2xl font-bold text-foreground">{totalWatched}</span>
              </div>
              <p className="text-xs text-muted-foreground">Assistidos</p>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="w-4 h-4 text-gold-accent" />
                <span className="font-display text-2xl font-bold text-foreground">{totalRated}</span>
              </div>
              <p className="text-xs text-muted-foreground">Avaliados</p>
            </div>
            
            <div className="text-center p-3 rounded-lg bg-secondary/50">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="font-display text-2xl font-bold text-foreground">{averageRating}</span>
              </div>
              <p className="text-xs text-muted-foreground">Média</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              variant="romantic"
              placeholder="Buscar dorama..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-12"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
            {GENRES.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? 'romantic' : 'glass'}
                size="sm"
                onClick={() => setSelectedGenre(genre)}
                className="whitespace-nowrap"
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>

        {/* Drama Grid */}
        {filteredDramas.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDramas.map((drama) => (
              <DramaCard
                key={drama.id}
                drama={drama}
                userRating={ratings[drama.id]}
                onRate={handleRate}
                isWatched={watchedList.includes(drama.id)}
                onToggleWatched={handleToggleWatched}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Nenhum dorama encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente buscar por outro termo ou filtro
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            DoramaList © 2026 • Feito com <Heart className="w-4 h-4 inline text-primary fill-primary" /> para amantes de K-Drama
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;