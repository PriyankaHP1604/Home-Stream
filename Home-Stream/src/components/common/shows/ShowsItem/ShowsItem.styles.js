import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../../styles/theme/theme";

export const ShowsItemWrapper = styled(Link)`
  padding: 0 10px;
  display: block;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .item-content {
    border-radius: 12px;
    border: 1px solid ${theme.colors.gray20}; /* Lighter neutral color */
    padding: 16px;
    height: 100%;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: ${theme.colors.primary};
    }

    .item-img {
      height: 320px;
      overflow: hidden;
      border-radius: 12px;
      transition: transform 0.3s ease-in-out;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .item-body {
      margin-top: 20px;
    }

    .item-info {
      display: flex;
      flex-wrap: wrap;
      column-gap: 8px;
      row-gap: 4px;
    }

    .rating,
    .premiere {
      display: inline-flex;
      align-items: center;
      border-radius: 51px;
      border: 1px solid ${theme.colors.gray20}; /* Lighter neutral color */
      background: ${theme.colors.secondary};
      padding: 4px 12px;
      column-gap: 6px;
      transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;

      .rating-star {
        width: 16px;
      }

      .rating-value {
        font-weight: 600 !important;
      }

      &:hover {
        border-color: ${theme.colors.primary};
        background-color: ${theme.colors.primaryLight};
      }
    }
  }
`;
