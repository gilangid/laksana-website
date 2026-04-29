"use client";

interface VRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VRModal({ isOpen, onClose }: VRModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Close Button - Outside Iframe */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-sm z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.354l11.5 11.5m0-11.5l-11.5 11.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="relative w-11/12 h-5/6 max-w-6xl bg-black rounded-lg overflow-hidden shadow-2xl">
        {/* Iframe */}
        <iframe
          src="https://www.vr-illustratorasia.xyz/Laksana%20Business%20Park/250831/"
          className="w-full h-full border-none"
          title="Laksana Business Park VR"
          allowFullScreen
        />
      </div>
    </div>
  );
}