const contentOffset = 2;
const doubleOffset = 2 * contentOffset;
const halfOffset = 0.5 * contentOffset;
const quarterOffset = 0.25 * contentOffset;

export const sizes = {
  contentOffsetRem: contentOffset,
  doubleOffsetRem: doubleOffset,
  halfOffsetRem: halfOffset,
  quarterOffsetRem: quarterOffset,
  navBarHeightRem: 8,
  navBarLargeHeight: 12,
  cornerRadiusRem: 0.8,
  componentHeightRem: 4,

  desktop: {
    mainContentMaxWidthPx: 1050,
    contentOffsetRem: doubleOffset,
  },
  tablet: {
    mainContentMaxWidthPx: 950,
    contentOffsetRem: doubleOffset,
  },
  mobile: {
    mainContentMaxWidthPx: 450,
    contentOffsetRem: contentOffset,
  },
};