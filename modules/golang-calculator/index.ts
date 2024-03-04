import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to GolangCalculator.web.ts
// and on native platforms to GolangCalculator.ts
import GolangCalculatorModule from './src/GolangCalculatorModule';
import GolangCalculatorView from './src/GolangCalculatorView';
import { ChangeEventPayload, GolangCalculatorViewProps } from './src/GolangCalculator.types';

// Get the native constant value.
export const PI = GolangCalculatorModule.PI;

export function hello(): string {
  return GolangCalculatorModule.hello();
}

export async function setValueAsync(value: string) {
  return await GolangCalculatorModule.setValueAsync(value);
}

const emitter = new EventEmitter(GolangCalculatorModule ?? NativeModulesProxy.GolangCalculator);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { GolangCalculatorView, GolangCalculatorViewProps, ChangeEventPayload };
