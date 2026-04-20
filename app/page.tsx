import HeroCountdownSection from "./components/HeroCountdownSection";
import InvitationSection from "./components/InvitationSection";
import ParallaxVideoSection from "./components/ParallaxVideoSection";
import ItinerarySection from "./components/ItinerarySection";
import WhatToDoSection from "./components/WhatToDoSection";
import HotelSection from "./components/HotelSection";
import RsvpSection from "./components/RsvpSection";
import GiftsSection from "./components/GiftsSection";
import PhotoTriptychSection from "./components/PhotoTriptychSection";
import SpotifyFloatingPlayer from "./components/SpotifyFloatingPlayer";

export default function Page() {
  return (
    <main className="w-full">
      <div className="motion-safe:animate-fade-in motion-safe:[animation-fill-mode:both]">
        <HeroCountdownSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:80ms]">
        <InvitationSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:140ms]">
        <ItinerarySection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:200ms]">
        <HotelSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:260ms]">
        <ParallaxVideoSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:320ms]">
        <WhatToDoSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:380ms]">
        <GiftsSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:440ms]">
        <PhotoTriptychSection />
      </div>
      <div className="motion-safe:animate-fade-up motion-safe:[animation-fill-mode:both] motion-safe:[animation-delay:500ms]">
        <RsvpSection />
      </div>
      <SpotifyFloatingPlayer />
    </main>
  );
}
