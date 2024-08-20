import styled from "styled-components";
import { media, theme } from "../../styles/theme/theme";

export const ShowDetailContent = styled.div`
    display: flex;
    margin-top: 60px;
    column-gap: 20px;
    transition: margin-top ${theme.transitions.easeInOut};

    ${media.xl`
        flex-direction: column;
        margin-top: 40px;
    `}

    ${media.lg`
        margin-top: 30px;
    `}

    ${media.sm`
        margin-top: 20px;
    `}

    .detail-block {
        padding: 40px;
        background-color: ${theme.colors.black10};
        border: 1px solid ${theme.colors.black15};
        border-radius: ${theme.borders.radius};
        margin-bottom: 30px;
        box-shadow: ${theme.shadows.small};
        transition: box-shadow ${theme.transitions.easeInOut}, transform ${theme.transitions.easeInOut};

        &:last-child {
            margin-bottom: 0;
        }

        &:hover {
            box-shadow: ${theme.shadows.medium};
            transform: translateY(-5px);
        }

        ${media.xxl`
            padding: 30px;
        `}

        ${media.xl`
            padding: 20px;
        `}

        ${media.lg`
            padding: 16px;
        `}

        ${media.sm`
            padding: 12px;
        `}
    }
`;
