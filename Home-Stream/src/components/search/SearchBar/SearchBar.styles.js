import styled from "styled-components";
import { theme } from "../../../styles/theme/theme";

export const SearchBarWrapper = styled.div`
  .searchbar-top {
    height: 50vh;
    overflow: hidden;
    position: relative;
    margin-bottom: 30px;
    transition: height ${theme.transitions.easeInOut};

    &:hover {
      height: 55vh; // Slightly increase height on hover
    }

    .searchbar-banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); // Added a semi-transparent overlay
      transition: background ${theme.transitions.easeInOut};

      &:hover {
        background: rgba(0, 0, 0, 0.3); // Change overlay color on hover
      }
    }
  }

  .search-box {
    position: relative;
    display: flex;
    align-items: center;
    column-gap: 16px;
    background-color: ${theme.colors.black15};
    border-radius: 100vh;
    min-width: 600px;
    padding: 16px 24px;
    border: 1px solid ${theme.colors.gray60};
    box-shadow: ${theme.shadows.small};
    transition: box-shadow ${theme.transitions.easeInOut}, border ${theme.transitions.easeInOut};

    &:hover {
      box-shadow: ${theme.shadows.medium}; // Increase shadow on hover
      border-color: ${theme.colors.primary}; // Highlight border on hover
    }

    .search-icon {
      width: 25px;
      height: 25px;
      min-width: 25px;
      opacity: 0.6; // Slightly more visible icon
      transition: opacity ${theme.transitions.easeInOut};

      &:hover {
        opacity: 1; // Fully visible on hover
      }
    }

    .search-input {
      flex: 1;
      input {
        width: 100%;
        background-color: transparent;
        border: 0;
        outline: 0;
        padding: 2px;
        font-family: inherit;
        color: ${theme.colors.gray60};
        caret-color: ${theme.colors.primary}; // Change caret color for better visibility
        transition: caret-color ${theme.transitions.easeInOut};

        &:focus {
          caret-color: ${theme.colors.primary}; // Highlight caret color on focus
        }
      }
    }

    .search-error-text {
      position: absolute;
      top: 100%;
      left: 10px;
      padding: 4px;
      display: block;
      font-weight: 600;
      color: ${theme.colors.primary}; // Highlight error text
      transition: opacity ${theme.transitions.easeInOut};
      opacity: 0; // Hidden by default

      &.visible {
        opacity: 1; // Show error text when visible
      }
    }
  }
`;
