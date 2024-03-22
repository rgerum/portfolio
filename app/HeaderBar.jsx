import { styled } from "@linaria/react";

export default function HeaderBar() {
  return (
    <Wrapper>
      <WrapperInner>
        <Logo href={"/"}>Richard Gerum</Logo>
        <nav>
          <NavList>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          </NavList>
        </nav>
      </WrapperInner>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: hsl(var(--color-white-core) / 0.75);
  position: sticky;
  top: 0;
  z-index: 1;
  backdrop-filter: blur(10px);
`;

const WrapperInner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 48px;
`;

const Logo = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  padding: 1.2rem 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-primary);
  font-size: 1.5rem;
  font-weight: 700;

  ::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: var(--color-primary);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 500ms;
  }

  &:hover::after {
    transform: scaleX(1);
    transition: transform 300ms;
  }
`;
