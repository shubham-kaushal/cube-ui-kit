import { createRule } from '../utils/styles';

export default function fontStyle({ font }) {
  return createRule(
    'font-family',
    font === 'monospace' ? 'var(--monospace-font)' : 'var(--font)',
  );
}

fontStyle.__styleLookup = ['font'];