import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const PaginationWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;  /* Added some space between buttons */
  animation: fadeIn 0.5s ease-out forwards;

  ${media.sm`
    column-gap: 8px;
  `}

  .paginate-btn {
    width: 48px;
    height: 48px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.black15};
    background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.secondaryDark});
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    transition: background 0.3s ease, border 0.3s ease, transform 0.3s ease;

    &.active {
      background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
      border: 1px solid ${theme.colors.primary};
    }

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryDark});
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
      box-shadow: none;
    }

    &:active:not(:disabled) {
      transform: scale(0.95);
    }
  }

  .paginate-prev,
  .paginate-next {
    img {
      width: 20px;
    }

    ${media.sm`
      border-radius: 6px;
    `}
  }

  .paginate-prev {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .paginate-next {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .paginate-num {
    display: block;
    font-weight: bold;
    font-size: 1.1rem;
    color: ${theme.colors.gray60};
    ${media.sm`
      display: none;
    `}
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ShowsListWrapper = styled.div`
  .shows-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    opacity: 0;
    animation: fadeInGrid 0.8s ease-out forwards;

    ${media.xxl`
      grid-template-columns: repeat(4, 1fr);
    `}

    ${media.xl`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${media.lg`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.sm`
      grid-template-columns: 100%;
    `}
  }

  @keyframes fadeInGrid {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .show-item {
    background: ${theme.colors.black10};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    }

    img {
      width: 100%;
      border-bottom: 2px solid ${theme.colors.black15};
    }

    .show-details {
      padding: 12px;
      color: ${theme.colors.gray60};

      h3 {
        font-size: 1.2rem;
        margin-bottom: 8px;
        color: ${theme.colors.primaryDark};
      }

      p {
        font-size: 0.9rem;
        line-height: 1.4;
      }
    }
  }
`;
