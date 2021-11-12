import BreakPoint from './index';
import { render } from '@testing-library/react';
import usePageResize from '../../../hooks/usePageResize';

jest.mock('../../../hooks/usePageResize', () => ({
  __esModule: true,
  default: jest.fn()
}));

const setMockPageWidth = (width: number) => (usePageResize as jest.Mock).mockReturnValue({width});

/*
  Scenarios for page width == 600
    - HIDE when min=601
    - SHOW when min=600
    - HIDE when max=599
    - SHOW when max=600
    - HIDE when min=200 & max=599
    - SHOW when min=600 & max=600 (testing also display='flex')
*/
describe('BreakPoint', () => {

  describe('for page width = 600', () => {
    beforeEach(() => setMockPageWidth(600));

    it('should SHOW component(s) with prop min=600', () => {
      const mockMin = 600;

      const {container} = render(
        <BreakPoint min={mockMin}>
          <p>Hello test!</p>
        </BreakPoint>
      );

      expect(container.querySelector('p')).toBeVisible();
    });

    it('should HIDE component(s) with prop min=601', () => {
      const mockMin = 601;

      const {container} = render(
        <BreakPoint min={mockMin}>
          <p>Hello test!</p>
        </BreakPoint>
      );

      expect(container.querySelector('p')).not.toBeVisible();
    });

    it('should SHOW component(s) with prop max=600', () => {
      const mockMax = 600;

      const {container} = render(
        <BreakPoint max={mockMax}>
          <p>Hello test!</p>
        </BreakPoint>
      );

      expect(container.querySelector('p')).toBeVisible();
    });

    it('should HIDE component(s) with prop max=599', () => {
      const mockMax = 599;

      const {container} = render(
        <BreakPoint max={mockMax}>
          <p>Hello test!</p>
        </BreakPoint>
      );

      expect(container.querySelector('p')).not.toBeVisible();
    });

    it('should HIDE component(s) with prop min=200 & max=599', () => {
      const mockMin = 200;
      const mockMax = 599;

      const {container} = render(
        <BreakPoint min={mockMin} max={mockMax}>
          <p>Hello test!</p>
        </BreakPoint>
      );

      expect(container.querySelector('p')).not.toBeVisible();
    });

    it('should SHOW component(s) with prop min=600 & max=600 & display=flex', () => {
      const mockMin = 600;
      const mockMax = 600;

      const {container} = render(
        <BreakPoint min={mockMin} max={mockMax} display='flex'>
          <p>Hello test!</p>
        </BreakPoint>
      );

      expect(container).toMatchSnapshot();
      expect(container.querySelector('p')).toBeVisible();
    });

  });
});