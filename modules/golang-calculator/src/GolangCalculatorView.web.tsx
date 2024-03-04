import * as React from 'react';

import { GolangCalculatorViewProps } from './GolangCalculator.types';

export default function GolangCalculatorView(props: GolangCalculatorViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
