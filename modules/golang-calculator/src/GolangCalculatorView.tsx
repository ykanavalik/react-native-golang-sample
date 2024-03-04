import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { GolangCalculatorViewProps } from './GolangCalculator.types';

const NativeView: React.ComponentType<GolangCalculatorViewProps> =
  requireNativeViewManager('GolangCalculator');

export default function GolangCalculatorView(props: GolangCalculatorViewProps) {
  return <NativeView {...props} />;
}
