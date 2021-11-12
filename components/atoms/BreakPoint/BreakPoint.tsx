import React from 'react';
import styled from 'styled-components';

/*
Maybe em units should be used
https://zellwk.com/blog/media-query-units/
*/

type Props = StyledProps & {
   /** React children to display when screen size is between min and max */
  children?: React.ReactElement | React.ReactElement[];
};

type StyledProps = {
  /** Min width (in px) */
  min?: number;

  /** Max width (in px) */
  max?: number;

  /** CSS display type for visible element (e.g. 'block' or 'flex') */
  display?: string;
};

const StyledBreakPoint = styled.div(({min, max, display}: StyledProps): string => {
  const minStr = `(min-width: ${min}px)`;
  const maxStr = max ? ` and (max-width: ${max}px) ` : ``;

  return `
    display: none;

    @media screen and ${minStr}${maxStr}{
      display: ${display};
    }
  `
});

const BreakPoint: React.FC<Props> = ({
  min = 0,
  max = 0,
  display = 'block',
  children
}) => {
  return (
    <StyledBreakPoint min={min} max={max} display={display}>
      {children}
    </StyledBreakPoint>
  )
}

export default BreakPoint;
