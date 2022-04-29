import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getSteamSpecials } from './services';
import { GlobalStyle } from './theme/GlobalStyle';
import { Theme } from './theme/theme';
import styled from 'styled-components';
import { Item } from './components/Item';
import { Loading } from './components/Loading';

const App = () => {
  const [results, setResults] = React.useState([])
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getSteamSpecials().then(res => {
      setResults(res.results)
      setLoading(false)
    });
  }, [])

  const Container = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    width: 90%;
  `;
  const Grid = styled.div`
    display: grid;
    gap: 1rem;
    @media (min-width: 460px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1024px){
      grid-template-columns: repeat(4, 1fr);
    }
  `;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        {
          loading === true ? (
            <Loading/>
          ) : (
            <Container>
              <h1 style={{ textAlign: 'center', fontWeight: '300', margin: '2rem 0', textTransform: 'uppercase' }}>Steam specials offers</h1>
              <Grid>
                {results.map(result => <Item key={result.id} {...result} />)}
              </Grid>
            </Container>
          )
        }
      </ThemeProvider>
    </>
  )
}

export default App