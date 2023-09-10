import styled from "styled-components";

// export const Navigation = styled.nav`
//   display: flex;
//   gap: 20px;
// `;

// export const Contacts = styled.ul`
//   display: flex;
//   gap: 20px;
// `;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 20px;
  }

  ul {
    display: flex;
    gap: 20px;

    .first {
      color: blue;
    }
  }
`;
