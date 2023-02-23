import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

interface ControlPanelViewProps {
  isPlaying: boolean;
  onPlayPausePress: () => void;
  onSkipBackwardPress: () => void;
  onSkipForwardPress: () => void;
  onShufflePress: () => void;
  onRepeatPress: () => void;
  currentTime: number;
  duration: number;
}

const ControlPanelView: React.FC<ControlPanelViewProps> = ({
  isPlaying,
  onPlayPausePress,
  onSkipBackwardPress,
  onSkipForwardPress,
  onShufflePress,
  onRepeatPress,
  currentTime,
  duration,
}) => {
  const formattedCurrentTime = formatTime(currentTime);
  const formattedDuration = formatTime(duration);

  return (
    <View style={styles.container}>
      <View style={styles.controlsContainer}>
        <TouchableOpacity onPress={onSkipBackwardPress}>
          <SkipBackwardIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPausePress}>
          <Text style={styles.control}>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSkipForwardPress}>
          <SkipForwardIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>{formattedCurrentTime}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(currentTime / duration) * 100}%` }]} />
        </View>
        <Text style={styles.progressText}>{formattedDuration}</Text>
      </View>
      <View style={styles.bottomControlsContainer}>
        <TouchableOpacity onPress={onShufflePress}>
          <ShuffleIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onRepeatPress}>
          <RepeatIcon height={24} width={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ControlPanelView;
