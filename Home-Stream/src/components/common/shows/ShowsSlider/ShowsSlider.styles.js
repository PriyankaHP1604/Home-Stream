import styled from 'styled-components';

export const ShowsSliderWrapper = styled.section`
    padding: 40px 0;
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;

    .slider-wrapper {
        margin-top: 40px;
        transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease;
        opacity: 0;
        transform: translateY(30px);
        border-radius: 10px;

        &:hover {
            transform: translateY(0);
            opacity: 1;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2); /* Shadow appears only on hover */
        }
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

    .slider-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: 8px;
        overflow: hidden;
        background-color: #fff;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15); /* Shadow only on hover */
        }

        img {
            width: 100%;
            height: auto;
            display: block;
            border-bottom: 2px solid rgba(0, 0, 0, 0.05);
        }

        .item-details {
            padding: 16px;
            color: #333;

            h3 {
                font-size: 1.2rem;
                margin-bottom: 8px;
                color: #111;
            }

            p {
                font-size: 0.9rem;
                color: #555;
            }
        }
    }
`;
