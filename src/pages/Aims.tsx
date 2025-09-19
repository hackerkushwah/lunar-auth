import { Target, Users, Zap, Heart } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Aims = () => {
  const aims = [
    {
      icon: Target,
      title: 'Streamline Event Management',
      description: 'Simplify the process of organizing, managing, and participating in college events through digital innovation.',
      color: 'text-blue-500',
      status: 'Primary Goal',
    },
    {
      icon: Users,
      title: 'Enhance Student Engagement',
      description: 'Increase student participation in college activities and foster a vibrant campus community.',
      color: 'text-green-500',
      status: 'Community Focus',
    },
    {
      icon: Zap,
      title: 'Automate Attendance Systems',
      description: 'Eliminate manual attendance processes with smart, accurate, and efficient digital solutions.',
      color: 'text-yellow-500',
      status: 'Innovation',
    },
    {
      icon: Heart,
      title: 'Improve Student Experience',
      description: 'Create a seamless, user-friendly platform that makes college life more enjoyable and organized.',
      color: 'text-purple-500',
      status: 'User-Centric',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary">Our Aims</h1>
        <p className="text-lg text-muted-foreground mt-2">The core objectives that drive our project forward.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {aims.map((aim, index) => (
          <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-primary/10 ${aim.color}`}>
              <aim.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{aim.title}</h3>
            <p className="text-muted-foreground mb-4">{aim.description}</p>
            <span className="text-sm font-semibold text-primary/80">{aim.status}</span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Aims;
