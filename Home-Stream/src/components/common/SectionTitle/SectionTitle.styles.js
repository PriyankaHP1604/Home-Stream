import styled from "styled-components";
import { media, theme } from "../../../styles/theme/theme";

export const SectionTitleWrapper = styled.div`
  margin-bottom: 40px;
  transition: ${theme.transitions.allEaseInOut};

  ${media.lg`
    margin-bottom: 30px;
  `}

  ${media.xs`
    margin-bottom: 20px;
  `}

  .title-grid {
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr;
    transition: ${theme.transitions.allEaseInOut};

    ${media.lg`
      grid-template-columns: 1fr;
    `}

    ${media.md`
      grid-template-columns: 1fr 1fr;
    `}
  }

  .title-left {
    max-width: 992px;
    margin-right: auto;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;

    ${media.md`
      max-width: 100%;
      margin-right: 0;
    `}
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
