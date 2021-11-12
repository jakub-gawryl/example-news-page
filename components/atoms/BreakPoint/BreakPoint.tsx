import usePageSize from '../../../hooks/usePageResize';

type Props = {
  /** Min width (in px) */
  min?: number;

  /** Max width (in px) */
  max?: number;

  /** CSS display type for visible element (e.g. 'block' or 'flex') */
  display?: string;

  /** React children to display when screen size is between min and max */
  children?: React.ReactElement | React.ReactElement[];
};

const BreakPoint: React.FC<Props> = ({
  min = 0,
  max = 0,
  display='block',
  children
}) => {
  const {width} = usePageSize();
  const isMinVisible = width >= min;
  const isMaxVisible = max > 0 ? width <= max : true;
  const isVisible = isMinVisible && isMaxVisible;
  const cssDisplay = isVisible ? display : 'none';

  return (
    <div style={{display: cssDisplay}}>
      {children}
    </div>
  )
}

export default BreakPoint;
