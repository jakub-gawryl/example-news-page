import React from 'react';
import styled from 'styled-components';

type MainMenuProps = {
  children?: React.ReactElement | React.ReactElement[];
};
 
const StyledMainMenu = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MainMenu: React.FC<MainMenuProps> = ({children}) => {
  return (
    <StyledMainMenu>
      <div className="main-menu">
        {children}
      </div>
    </StyledMainMenu>
  )
}

export default MainMenu;
