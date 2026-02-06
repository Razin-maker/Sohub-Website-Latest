import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { WhyWeExist } from '@/components/sections/WhyWeExist';
import { WhatSohubIs } from '@/components/sections/WhatSohubIs';
import { SohubStandard } from '@/components/sections/SohubStandard';
import { InitiativesExplorer } from '@/components/sections/InitiativesExplorer';
import { HowWeOperate } from '@/components/sections/HowWeOperate';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { Transparency } from '@/components/sections/Transparency';
import { People } from '@/components/sections/People';
import { QuietClosing } from '@/components/sections/QuietClosing';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyWeExist />
        <WhatSohubIs />
        <SohubStandard />
        <InitiativesExplorer />
        <HowWeOperate />
        <WhoItsFor />
        <Transparency />
        <People />
        <QuietClosing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
