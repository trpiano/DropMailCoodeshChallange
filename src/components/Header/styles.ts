import { styled } from "styled-components";

// Cores
const primaryColor = "#000";
const backgroundColor = "#475569";

export const ButtonStyles = {
  color: primaryColor,
  border: `1px solid ${primaryColor}`,
  padding: "0.75rem 1rem",
};

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  background: ${backgroundColor};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 0.75rem;
  }

  @media screen and (max-width: 475px) {
    .buttonText {
      display: none;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  svg {
    width: 30px;
    height: auto;
  }
`;
