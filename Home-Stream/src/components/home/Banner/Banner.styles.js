import styled from 'styled-components';
import { Images } from '../../../assets/images';
import { media, theme } from '../../../styles/theme/theme';

export const BannerWrapper = styled.section`
  position: relative; // Ensure that child elements can be positioned absolutely

  .banner-img {
    background: url(${Images.HomeBanner}) center/cover no-repeat fixed;
    min-height: 68vh;
    position: relative; // Added to enable positioning of children relative to this element
    transition: background ${theme.transitions.easeInOut};

    ${media.sm`
      min-height: 50vh;
    `}

    &:hover {
      background-size: 105%; // Slight zoom effect on hover
    }
  }

  .banner-icon {
    width: 260px;
    margin-top: 100px;
    transition: transform ${theme.transitions.easeInOut}, opacity ${theme.transitions.easeInOut};

    ${media.xl`
      width: 220px;
    `}

    ${media.lg`
      width: 180px;
    `}

    ${media.sm`
      width: 120px;
    `}

    &:hover {
      transform: scale(1.1); // Slightly enlarge the icon on hover
      opacity: 0.8; // Add slight transparency effect
    }
  }

  .banner-content {
    max-width: 1096px;
    padding-top: 20px;
    padding-bottom: 40px;
    transition: padding ${theme.transitions.easeInOut};

    ${media.sm`
      padding-bottom: 20px;
    `}
  }

  .banner-text {
    margin-bottom: 50px;
    transition: margin ${theme.transitions.easeInOut};

    ${media.lg`
      margin-bottom: 30px;
    `}

    ${media.sm`
      margin-bottom: 20px;
    `}
  }

  // Optional: Add a subtle fade-in effect for the whole banner
  &:hover .banner-content, 
  &:hover .banner-text, 
  &:hover .banner-icon {
    opacity: 0.9;
  }
`;
