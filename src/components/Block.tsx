import * as React from 'react';
import { Component } from 'react';
import styled, { StyledComponentClass } from 'styled-components';


const Block =
  styled.div`
  display: flex;
  ${({ width }) => width && `width: ${width}`}; //
  ${({ height }) => height && `height: ${height}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight}`};
  ${({ minWidth }) => minWidth && `min-width: ${minWidth}`};
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ column }) => column && 'flex-direction: column'};
  ${({ flex }) => flex && `flex: ${flex}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ color }) => color && `background-color: ${color}`};
  ${({ bg }) => bg && `background: ${bg}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ borderLeft }) => borderLeft && `border-left: ${borderLeft}`};
  ${({ borderRight }) => borderRight && `border-right: ${borderRight}`};
  ${({ borderTop }) => borderTop && `border-top: ${borderTop}`};
  ${({ borderBottom }) => borderBottom && `border-bottom: ${borderBottom}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ position }) => position && `position: ${position}`};
  ${({ p }) => p && `padding: ${p}`};
  ${({ m }) => m && `margin: ${m}`};
`;


// PropsType = { right: '8px' }
// $FlowFixMe
export const AbsoluteBlock = styled(Block)`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
`;
// PropsType = { right: '8px' }
// $FlowFixMe
export const FixedBlock = styled(Block)`
  position: fixed;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
`;
// $FlowFixMe
export const RelativeBlock = styled(Block)`
  position: absolute;
  ${({ top }) => top && `top: ${top};`}
  ${({ left }) => left && `left: ${left};`}
  ${({ right }) => right && `right: ${right};`}
  ${({ bottom }) => bottom && `bottom: ${bottom};`}
`;

export const Row = props =>
  (<Block
    width="100%"
    height="100%"
    justify="center"
    align="center"
    {...props}
  />);

export const Column = props => (<Block
  width="100%"
  height="100%"
  justify="center"
  align="center"
  direction="column"
  {...props}
/>);

export default Block;
