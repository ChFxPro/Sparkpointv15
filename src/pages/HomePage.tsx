import { Hero } from '../components/Hero';
import InteractiveSparkPointInfographic from '../imports/InteractiveSparkPointInfographic';
import { MissionGrid } from '../components/MissionGrid';
import { StoryCarousel } from '../components/StoryCarousel';
import { ImpactSection } from '../components/ImpactSection';
import { ConnectionSection } from '../components/ConnectionSection';
import { CTAFinal } from '../components/CTAFinal';
import heleneImage from 'figma:asset/0835779aef52124bf5c00840473e8285f8e0f937.png';

const stories = [
  {
    title: 'Helene: One Year of Healing',
    image: heleneImage,
    caption: 'A journey of resilience and community support through the recovery process, demonstrating the power of collective healing.'
  },
  {
    title: 'Echoes from the Community',
    image: 'https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXRoZXJpbmclMjBwZW9wbGV8ZW58MXx8fHwxNzYxMDE5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Voices sharing experiences of connection and belonging that define our community\'s strength and spirit.'
  },
  {
    title: 'Community Champions',
    image: 'https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZ3xlbnwxfHx8fDE3NjEwNzA2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    caption: 'Celebrating the volunteers and partners who work tirelessly to bring hope, resources, and action to those in need.'
  }
];

export function HomePage() {
  return (
    <>
      <Hero 
        heroImage="https://images.unsplash.com/photo-1629812205627-222da4a73816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JuaW5nJTIwbGlnaHQlMjBtb3VudGFpbnxlbnwxfHx8fDE3NjEwODkwNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      
      <MissionGrid />
      <InteractiveSparkPointInfographic />
      <StoryCarousel stories={stories} />
      <ImpactSection />
      <ConnectionSection />
      <CTAFinal 
        backgroundImage="https://images.unsplash.com/photo-1694350461777-1519e03ef70a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NjA5OTcyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </>
  );
}