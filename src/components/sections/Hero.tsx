import NeuralNetworkHero from '@/components/ui/neural-network-hero';

export const Hero = () => {
  return (
    <NeuralNetworkHero
      title="Begin different. Win different."
      description="Bangladesh deserves better. Not more talk — working systems. Built with discipline. Measured by results. Open to the people we serve."
      badgeLabel="SOHUB"
      badgeText="Solution Hub Technologies"
      ctaButtons={[
        { text: "Explore ecosystem", href: "#ecosystem", primary: true },
        { text: "Why we exist", href: "#why" },
        { text: "How we operate", href: "#operate" }
      ]}
      microDetails={["Discipline", "Transparency", "Results"]}
    />
  );
};
