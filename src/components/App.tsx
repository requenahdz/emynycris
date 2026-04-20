import GiftsSection from "./sections/GiftsSection";
import HeroCountdownSection from "./sections/HeroCountdownSection";
import HotelSection from "./sections/HotelSection";
import InvitationSection from "./sections/InvitationSection";
import ItinerarySection from "./sections/ItinerarySection";
import ParallaxVideoSection from "./sections/ParallaxVideoSection";
import PhotoTriptychSection from "./sections/PhotoTriptychSection";
import RsvpSection from "./sections/RsvpSection";
import SpotifyFloatingPlayer from "./sections/SpotifyFloatingPlayer";
import WhatToDoSection from "./sections/WhatToDoSection";

export default function App() {
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

