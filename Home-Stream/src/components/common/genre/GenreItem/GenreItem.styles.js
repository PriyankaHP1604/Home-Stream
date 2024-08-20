import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const GenreItemWrapper = styled.div`
  margin: 0 15px;
  transition: ${theme.transitions.allEaseInOut};

  ${media.lg`
    margin: 0 8px;
  `}

  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadows.animated};
  }

  .item-content {
    background: ${theme.colors.black10};
    padding: 20px;
    border-radius: 12px;
    transition: ${theme.transitions.allEaseInOut};

    ${media.lg`
      padding: 16px;
    `}

    ${media.sm`
      padding: 12px;
    `}

    .item-img {
      position: relative;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(26, 26, 26, 0.4) 0%,
          rgba(26, 26, 26, 0.6) 50%,
          rgba(26, 26, 26, 0.8) 100%
        );
        transition: ${theme.transitions.allEaseInOut};
      }

      &:hover::after {
        background: linear-gradient(
          180deg,
          rgba(26, 26, 26, 0.2) 0%,
          rgba(26, 26, 26, 0.4) 50%,
          rgba(26, 26, 26, 0.6) 100%
        );
      }
    }

    .item-body {
      padding: 2px 0;
      animation: ${theme.animations.fadeIn};
    }

    .item-arrow-link {
      img {
        width: 18px;
        transition: ${theme.transitions.allBounce};
      }

      &:hover {
        opacity: 0.7;
        transform: translateX(5px);
      }
    }
  }
`;
