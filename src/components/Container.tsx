import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-gap: 3rem;
  justify-content: center;
  grid-template-columns: 1fr;

  > div {
    margin: auto;
  }

  a {
    text-align: center;
    display: block;
    margin-top: 2rem;
  }

  img {
    max-width: 1600px;
    margin: 3rem auto;
    display: block;
  }
`
