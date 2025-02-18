import styled from "styled-components";

interface StarAreaProps {
  repos: string;
  follower: string;
  following: string;
}

export const StartArea = ({ repos, follower, following }: StarAreaProps) => {
  return (
    <Container>
      <Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </Data>

      <Data>
        <span>Followers</span>
        <strong>{follower}</strong>
      </Data>

      <Data>
        <span>Following</span>
        <strong>{following}</strong>
      </Data>
    </Container>
  );
};
const Container = styled.div`
  border-radius: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  padding: 1.8rem 1.4rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1rem 3.5rem;
  }
`;

const Data = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
  }

  span {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: center;
    color: ${(props) => props.theme.colors.textNorm};

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }

  strong {
    font-weight: bold;
    font-size: 1.8em;
    line-height: 2.4rem;
    margin-top: 0.8rem;

    color: ${(props) => props.theme.colors.textBolded};

    @media (min-width: 768px) {
      margin-top: 1rem;
      font-size: 2.1rem;
    }
  }
`;
