import { Component } from 'react';
import { Animated, ViewStyle } from 'react-native';

type Position = 'top' | 'bottom' | 'left' | 'right';

interface SlidingViewProps {
  animationDuration?: number;
  delay?: number;
  disableAutoDragEnd?: boolean;
  disableDrag?: boolean;
  position?: Position;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
  changeVisibilityCallback?: () => void;
  visibilityArea?: number;
}

export default class SlidingView extends Component<SlidingViewProps> {
  show: () => void;
  hide: () => void;
  toggle: () => void;
}
