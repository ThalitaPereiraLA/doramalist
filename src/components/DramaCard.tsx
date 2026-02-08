import React, { useState } from 'react';
import { Heart, Calendar, Tv, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StarRating from './StarRating';
import { cn } from '@/lib/utils';

interface Drama {
  id: number;
  title: string;
  year: number;
  episodes: number;
  genre: string;
  image: string;
  description: string;
}

interface DramaCardProps {
  drama: Drama;
  userRating?: number;
  onRate: (dramaId: number, rating: number) => void;
  isWatched?: boolean;
  onToggleWatched: (dramaId: number) => void;
}

const DramaCard: React.FC<DramaCardProps> = ({
  drama,
  userRating = 0,
  onRate,
  isWatched = false,
  onToggleWatched,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showRating, setShowRating] = useState(false);

  return (
    <div
      className={cn(
        'group relative rounded-xl overflow-hidden bg-card border border-border/50 transition-all duration-500',
        'hover:romantic-shadow hover:scale-[1.02] hover:border-primary/30',
        isWatched && 'ring-2 ring-success/50'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!userRating) setShowRating(false);
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={drama.image}
          alt={drama.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent',
            'transition-opacity duration-300',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Watched Badge */}
        {isWatched && (
          <div className="absolute top-3 left-3 bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 animate-scale-in">
            <Check className="w-3 h-3" />
            Assistido
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => onToggleWatched(drama.id)}
          className={cn(
            'absolute top-3 right-3 p-2 rounded-full transition-all duration-300',
            isWatched
              ? 'bg-primary text-primary-foreground'
              : 'bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground'
          )}
        >
          <Heart className={cn('w-4 h-4', isWatched && 'fill-current animate-heart-beat')} />
        </button>

        {/* Hover Content */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-4 transition-all duration-300',
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
        >
          <p className="text-primary-foreground text-sm line-clamp-3 mb-3">
            {drama.description}
          </p>
          
          <Button
            variant="romantic"
            size="sm"
            className="w-full"
            onClick={() => setShowRating(true)}
          >
            {userRating ? 'Alterar Avaliação' : 'Avaliar Dorama'}
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1 mb-1">
          {drama.title}
        </h3>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {drama.year}
          </span>
          <span className="flex items-center gap-1">
            <Tv className="w-3 h-3" />
            {drama.episodes} eps
          </span>
          <span className="px-2 py-0.5 bg-secondary rounded-full">
            {drama.genre}
          </span>
        </div>

        {/* Rating Section */}
        <div className="flex items-center justify-between">
          {showRating || userRating ? (
            <StarRating
              rating={userRating}
              onRatingChange={(rating) => onRate(drama.id, rating)}
              size="sm"
              useHearts
            />
          ) : (
            <span className="text-xs text-muted-foreground">
              Clique para avaliar
            </span>
          )}
          
          {userRating > 0 && (
            <span className="text-sm font-medium text-primary">
              {userRating}/5
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DramaCard;