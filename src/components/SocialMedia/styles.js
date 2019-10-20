import styled from 'styled-components';
import ReactGA from 'react-ga';

export const SocialMediaWrapper = styled.div`
  margin-top: ${({ theme, noMarginTop }) => !noMarginTop && theme.sizes.medium};

  p {
    margin-bottom: ${({ theme }) => theme.sizes.small};
    text-align: ${({ alignTextRight }) => alignTextRight && 'right'};
  }

  a:not(:last-child) {
    margin-right: ${({ theme }) => theme.sizes.default};
  }
`;

export const Link = styled(ReactGA.OutboundLink)`
  transition: ${({ theme }) => theme.transition};
  text-decoration: none;
  color: ${({ theme, colorTheme }) =>
    colorTheme === 'light' ? theme.colors.darkGrey : theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.default};
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.main};
  }
`;
