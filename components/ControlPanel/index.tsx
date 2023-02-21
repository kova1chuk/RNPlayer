import React, { useState } from 'react';

import ControlPanelView from './view';

interface ControlPanelProps {
  duration: number;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPausePress = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipBackwardPress = () => {
    setCurrentTime(currentTime - 10);
  };

  const handleSkipForwardPress = () => {
    setCurrentTime(currentTime + 10);
  };

  const handleShufflePress = () => {
    // Implement shuffle logic
  };

  const handleRepeatPress = () => {
    // Implement repeat logic
  };

  return (
    <ControlPanelView
      isPlaying={isPlaying}
      onPlayPausePress={handlePlayPausePress}
      onSkipBackwardPress={handleSkipBackwardPress}
      onSkipForwardPress={handleSkipForwardPress}
      onShufflePress={handleShufflePress}
      onRepeatPress={handleRepeatPress}
      currentTime={currentTime}
      duration={duration}
    />
  );
};

export default ControlPanel;
