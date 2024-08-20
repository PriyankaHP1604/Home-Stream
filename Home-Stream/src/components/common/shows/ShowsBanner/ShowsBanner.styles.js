import styled from "styled-components";
import { media, theme } from "../../../../styles/theme/theme";

export const ShowsBannerWrapper = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 12px;

  .banner-img {
    position: relative;
    min-height: 74vh;
    padding: 60px 40px;
    background-size: cover;
    background-position: center;
    border-radius: inherit;
    transition: transform 0.8s ease, filter 0.8s ease;
    animation: fadeInZoom 1s ease-out forwards;

    ${media.xl`
      padding: 40px 20px;
    `}

    ${media.lg`
      padding: 30px 20px;
    `}

    ${media.sm`
      padding: 20px 16px;
    `}

    &:hover {
      transform: scale(1.05);
      filter: brightness(0.9);
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -50%;
      width: 150%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent 0%,
        rgba(0, 0, 0, 0.2) 50%,
        transparent 100%
      );
      transform: skewX(-25deg);
      transition: opacity 0.5s ease;
      opacity: 0;
      pointer-events: none;
    }

    &:hover::before {
      opacity: 1;
      animation: glimmer 2s infinite;
    }
  }

  @keyframes fadeInZoom {
    0% {
      opacity: 0;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes glimmer {
    0% {
      transform: skewX(-25deg) translateX(-100%);
    }
    100% {
      transform: skewX(-25deg) translateX(200%);
    }
  }

  .banner-content {
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s ease-out 0.3s forwards;
    z-index: 2;

    ${media.lg`
      transform: none;
      animation: fadeInUp 0.8s ease-out 0.3s forwards;
    `}

    .summary-text {
      color: ${theme.colors.white};
      text-shadow: 1px 1px 3px ${theme.colors.black15};

      p {
        line-height: 1.6;
        ${media.lg`
          font-size: 16px !important;
        `}
      }
    }
  }

  .banner-title {
    font-size: 3rem;
    font-weight: 700;
    color: ${theme.colors.white};
    text-shadow: 2px 2px 4px ${theme.colors.black15};
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 1s ease-out 0.5s forwards;

    ${media.lg`
      font-size: 2.5rem;
    `}

    ${media.sm`
      font-size: 2rem;
    `}
  }

  .banner-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    opacity: 0;
    transform: translateY(10px);
    animation: fadeInUp 1s ease-out 0.7s forwards;

    &-item {
      display: flex;
      align-items: center;
      gap: 24px;
      color: ${theme.colors.white};
      font-size: 1rem;

      .info-label {
        font-weight: 600;
      }

      .info-value {
        opacity: 0.9;
      }
    }
  }

  .info-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 16px;

    .info-item {
      background-color: rgba(0, 0, 0, 0.4);
      padding: 8px 12px;
      border-radius: 20px;
      color: ${theme.colors.white};
      font-size: 0.9rem;
      opacity: 0;
      transform: translateY(10px);
      animation: fadeInUp 1s ease-out 0.9s forwards;
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Optional: Add a decorative overlay */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    border-radius: inherit;
    z-index: 1;
  }
`;
