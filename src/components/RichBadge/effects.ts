import { Horizontal, Veritcal } from './enums';

interface Args {
  content?: string | number,
  horizontal?: Horizontal,
  vertical?: Veritcal,
};

const determineBadgeStyling = ({ content, horizontal, vertical }: Args) => {
  // Transform calculations
  const translationPercentage = !!content ? 25 : 0;
  const verticalTranslation = (vertical === Veritcal.Left)
    ? -Math.abs(translationPercentage)
    : translationPercentage;
  const horizontalTranslation = (horizontal === Horizontal.Top)
    ? -Math.abs(translationPercentage)
    : translationPercentage;

  // Transform origin calculations
  const verticalTransformOrigin = vertical === Veritcal.Left ? '0%' : '100%';
  const horizontalTransformOrigin = horizontal === Horizontal.Top ? '0%' : '100%';

  return {
    transform: `scale(1) translate(${verticalTranslation}%, ${horizontalTranslation}%)`,
    transformOrigin: `${verticalTransformOrigin}, ${horizontalTransformOrigin}`,
  };
};

export {
  determineBadgeStyling,
};
