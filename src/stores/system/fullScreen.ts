import { create } from "zustand";

interface FullScreenState {
  isFullScreen: boolean;
  enterFullScreen: () => void;
  exitFullScreen: () => void;
}

const useFullScreenStore = create<FullScreenState>((set) => ({
  isFullScreen: false,
  enterFullScreen: () => {
    const element = document.documentElement as HTMLElement & {
      requestFullscreen(): void;
      mozRequestFullScreen(): void;
      webkitRequestFullscreen(): void;
      msRequestFullscreen(): void;
    };

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE/Edge */
      element.msRequestFullscreen();
    }
    set({ isFullScreen: true });
  },
  exitFullScreen: () => {
    const doc = document as Document & {
      exitFullscreen(): void;
      mozCancelFullScreen(): void;
      webkitExitFullscreen(): void;
      msExitFullscreen(): void;
    };

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      /* Firefox */
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      /* IE/Edge */
      doc.msExitFullscreen();
    }
    set({ isFullScreen: false });
  },
}));

export default useFullScreenStore;
