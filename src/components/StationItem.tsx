import React from 'react';
import styled from "@emotion/styled";
import {NavLink} from 'react-router-dom';
import Station from "../types/Station";

const Container = styled.div`
  padding: 12px 0;
`

const StyledNavLink = styled(NavLink)`
   color: #ccc;
   text-decoration: none;
   text-transform: uppercase;
   font-weight: 300;
   font-size: 1.2rem;
   letter-spacing: 2px;
   
   &.${props => props.activeClassName} {
    color: white;
  }
`;

interface StationItemProps {
  station: Station,
  className?: string,
  isActive: boolean,
}

function StationItem({station, className, isActive}: StationItemProps) {
  return (
    <Container className={className}>
      <StyledNavLink className={className} to={`/${station.slug}`} isActive={() => isActive} activeClassName='active'>
        {station.title}
      </StyledNavLink>
    </Container>
  );
}

StationItem.defaultProps = {
  className: '',
}

export default StationItem;
