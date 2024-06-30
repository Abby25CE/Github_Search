import styled from "styled-components";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { TopArea } from "./Components/TopArea";
import { useState } from "react";
import { UserProps } from "./Types";
import { Index } from "./Components/UserData";

function App() {
  const [user, setUser] = useState<UserProps | null>(null);

  function setUserData(user: UserProps | null): void {
    setUser(user);
  }

  return (
    <ThemeContextProvider>
      <Container>
        <TopArea setUser={setUserData} />
        {user && <Index user={user} />}
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  padding: 3.1rem 2.4rem;

  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;
export default App;
