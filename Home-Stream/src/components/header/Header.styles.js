import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { media, theme } from "../../styles/theme/theme";

export const HeaderWrapper = styled.header`
  height: 120px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: ${theme.colors.black06}; // Added background for better visibility

  ${media.lg`
    height: 100px;
  `}

  ${media.sm`
    height: 80px;
  `}

  &.sm-header {
    height: auto !important;
    padding: 12px 0;
    box-shadow: ${theme.shadows.medium};
    border-bottom: 2px solid ${theme.colors.black10};
    background: ${theme.colors.black10}; // Ensure the background color is consistent

    .nav-list {
      padding: 0;
      height: auto;
    }

    .nav-link {
      &.active {
        border-radius: 0;
        background: ${theme.colors.black15}; // Added background to active links for better visibility
      }
    }
  }
`;

export const BrandWrapper = styled(Link)`
  width: 200px;
  min-width: 200px;
  transition: transform ${theme.transitions.easeInOut}; // Added transition for smooth scaling

  ${media.sm`
    width: 160px;
    min-width: 160px;
  `}

  &:hover {
    transform: scale(1.05); // Added scaling effect on hover
  }
`;

export const NavWrapper = styled.nav`
  position: relative;
  transition: ${theme.transitions.allEaseInOut};

  .sidebar-close-btn {
    position: absolute;
    right: 16px;
    top: 16px;
    width: 20px;
    height: 20px;
    background: transparent;
    transition: opacity ${theme.transitions.easeInOut}, transform ${theme.transitions.easeInOut};
    display: none;

    &:hover {
      opacity: 0.8;
      transform: scale(0.95); // Added scale effect on hover
    }

    ${media.lg`
      display: inline-flex;
    `}
  }

  .nav-list {
    height: 75px;
    border-radius: 12px;
    padding: 10px;
    border: 4px solid ${theme.colors.black15}; // Changed border color for better visibility

    ${media.lg`
      flex-direction: column;
      width: 100%;
      height: 100% !important;
      background: ${theme.colors.black10};
      border: 0;
      justify-content: flex-start;
    `}
  }

  .nav-item {
    ${media.lg`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px dotted ${theme.colors.black15};

      &:last-child {
        border-bottom: 0;
      }
    `}
  }

  .nav-link {
    height: 55px;
    min-width: 100px;
    padding: 14px;
    border-radius: 8px;
    color: ${theme.colors.gray75};
    font-weight: 600;
    transition: background-color ${theme.transitions.easeInOut}, color ${theme.transitions.easeInOut};

    &.active {
      background-color: ${theme.colors.black10};
      color: ${theme.colors.white};
    }

    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.black06}; // Subtle background change on hover
    }
  }

  ${media.lg`
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 260px;
    background: ${theme.colors.black15};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
    align-items: flex-start;
    border-radius: 0;
    padding: 32px 12px;
    transform: translateX(100%);
    z-index: 1000;
    transition: transform ${theme.transitions.easeInOut};

    &.show {
      transform: translateX(0);
    }
  `}
`;

export const HeaderIconsWrapper = styled.div`
  column-gap: 16px;

  .icon-link {
    min-width: 30px;
    width: 30px;
    height: 30px;
    padding: 4px;
    background: transparent;
    transition: opacity ${theme.transitions.easeInOut}, transform ${theme.transitions.easeInOut}; // Added transition for opacity and scaling

    ${media.lg`
      width: 26px;
      height: 26px;
      min-width: 26px;
    `}

    img {
      width: 100%;
    }

    &:hover {
      opacity: 0.7;
      transform: scale(1.1); // Added scaling effect on hover
    }

    &.sidebar-open-btn {
      display: none;

      ${media.lg`
        display: inline-flex;
      `}
    }
  }
`;
