import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/enhanced-button';
import { Progress } from './ui/progress';
import { Trophy, Gift, Zap, Target, Star, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  reward: string;
}

interface UserStats {
  totalVisits: number;
  dealsViewed: number;
  wishlistItems: number;
  level: number;
  points: number;
  streak: number;
}

const GamificationSystem: React.FC = () => {
  const [userStats, setUserStats] = useState<UserStats>({
    totalVisits: 1,
    dealsViewed: 0,
    wishlistItems: 0,
    level: 1,
    points: 50,
    streak: 1
  });

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 'first-visit',
      title: 'Welkom Explorer!',
      description: 'Je eerste bezoek aan Algarve voor Bijna Niks',
      icon: '🌊',
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      reward: '50 punten + welkomstkorting'
    },
    {
      id: 'deal-hunter',
      title: 'Deal Jager',
      description: 'Bekijk 10 verschillende deals',
      icon: '🎯',
      unlocked: false,
      progress: 0,
      maxProgress: 10,
      reward: '€5 extra korting'
    },
    {
      id: 'wishlist-master',
      title: 'Verlanglijst Meester',
      description: 'Voeg 5 items toe aan je verlanglijst',
      icon: '💙',
      unlocked: false,
      progress: 0,
      maxProgress: 5,
      reward: 'Exclusieve last-minute alerts'
    },
    {
      id: 'loyal-visitor',
      title: 'Trouwe Bezoeker',
      description: 'Bezoek de site 7 dagen achter elkaar',
      icon: '🔥',
      unlocked: false,
      progress: 1,
      maxProgress: 7,
      reward: '10% loyaliteitskorting'
    }
  ]);

  const [showLevelUp, setShowLevelUp] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load user stats from localStorage
    const savedStats = localStorage.getItem('algarve-user-stats');
    if (savedStats) {
      const stats = JSON.parse(savedStats);
      setUserStats(stats);
      updateAchievements(stats);
    }

    // Track visit
    trackAction('visit');
  }, []);

  const trackAction = (action: string) => {
    let newStats = { ...userStats };

    switch (action) {
      case 'visit':
        newStats.totalVisits += 1;
        newStats.points += 10;
        break;
      case 'deal_viewed':
        newStats.dealsViewed += 1;
        newStats.points += 5;
        break;
      case 'wishlist_add':
        newStats.wishlistItems += 1;
        newStats.points += 15;
        break;
    }

    // Check for level up
    const newLevel = Math.floor(newStats.points / 100) + 1;
    if (newLevel > newStats.level) {
      newStats.level = newLevel;
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 5000);
      
      toast({
        title: `🎉 Level ${newLevel} bereikt!`,
        description: `Je hebt niveau ${newLevel} bereikt en ontgrendeld nieuwe voordelen!`,
      });
    }

    setUserStats(newStats);
    localStorage.setItem('algarve-user-stats', JSON.stringify(newStats));
    updateAchievements(newStats);
  };

  const updateAchievements = (stats: UserStats) => {
    setAchievements(prev => prev.map(achievement => {
      let progress = achievement.progress;
      let unlocked = achievement.unlocked;

      switch (achievement.id) {
        case 'deal-hunter':
          progress = Math.min(stats.dealsViewed, achievement.maxProgress);
          break;
        case 'wishlist-master':
          progress = Math.min(stats.wishlistItems, achievement.maxProgress);
          break;
        case 'loyal-visitor':
          progress = Math.min(stats.streak, achievement.maxProgress);
          break;
      }

      if (progress >= achievement.maxProgress && !unlocked) {
        unlocked = true;
        toast({
          title: `🏆 Achievement ontgrendeld!`,
          description: achievement.title,
        });
      }

      return { ...achievement, progress, unlocked };
    }));
  };

  const getLevelInfo = () => {
    const currentLevelPoints = (userStats.level - 1) * 100;
    const nextLevelPoints = userStats.level * 100;
    const progressToNext = ((userStats.points - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
    
    return {
      current: userStats.level,
      pointsToNext: nextLevelPoints - userStats.points,
      progressPercent: Math.min(progressToNext, 100)
    };
  };

  const levelInfo = getLevelInfo();

  return (
    <>
      {/* Level Up Animation */}
      {showLevelUp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
          <Card className="max-w-sm mx-4 text-center shadow-warm border-primary">
            <CardContent className="p-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Level {userStats.level}!
              </h3>
              <p className="text-muted-foreground">
                Je hebt een nieuw niveau bereikt en krijgt exclusieve voordelen!
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Stats Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-warm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Trophy className="w-5 h-5 text-primary" />
            Jouw Algarve Reis Status
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Level {userStats.level}
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Progress to Next Level */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Level {userStats.level}</span>
              <span>{levelInfo.pointsToNext} punten tot level {userStats.level + 1}</span>
            </div>
            <Progress value={levelInfo.progressPercent} className="h-2" />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userStats.points}</div>
              <div className="text-xs text-muted-foreground">Punten</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{userStats.dealsViewed}</div>
              <div className="text-xs text-muted-foreground">Deals bekeken</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => trackAction('deal_viewed')}
              className="flex-1"
            >
              <Zap className="w-3 h-3 mr-1" />
              +5 punten
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => trackAction('wishlist_add')}
              className="flex-1"
            >
              <Gift className="w-3 h-3 mr-1" />
              +15 punten
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                  achievement.unlocked 
                    ? 'bg-primary/5 border-primary/20' 
                    : 'bg-muted/30 border-muted'
                }`}
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`font-semibold text-sm ${
                      achievement.unlocked ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {achievement.title}
                    </h4>
                    {achievement.unlocked && (
                      <Badge variant="secondary" className="text-xs bg-primary text-primary-foreground">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  {!achievement.unlocked && (
                    <div className="space-y-1">
                      <Progress 
                        value={(achievement.progress / achievement.maxProgress) * 100} 
                        className="h-1"
                      />
                      <div className="text-xs text-muted-foreground">
                        {achievement.progress}/{achievement.maxProgress}
                      </div>
                    </div>
                  )}
                  {achievement.unlocked && (
                    <div className="text-xs text-primary font-medium">
                      Beloning: {achievement.reward}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GamificationSystem;