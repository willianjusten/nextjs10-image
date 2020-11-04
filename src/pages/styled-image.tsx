import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

import { Container } from 'components/Container'

const ImageWrapper = styled.div`
  height: 320px;
  width: 320px;
  margin: auto;
  position: relative;

  img {
    border-radius: 50%;
  }
`

export default function Styled() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>
      <ImageWrapper>
        <Image src="/img/1.jpg" width={320} height={320} layout="fixed" />
      </ImageWrapper>

      <ImageWrapper>
        <Image src="/img/2.jpg" width={320} height={320} layout="responsive" />
      </ImageWrapper>

      <ImageWrapper>
        <Image src="/img/4.jpg" width={320} height={320} />
      </ImageWrapper>

      <ImageWrapper>
        <Image src="/img/5.jpg" layout="fill" />
      </ImageWrapper>
    </Container>
  )
}
