import Link from 'next/link'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import { Container } from 'components/Container'

type ObjectFitProps = {
  objectFit: 'cover' | 'contain' | 'none'
}

const ImageWrapper = styled.div<ObjectFitProps>`
  ${({ objectFit }) => css`
    position: relative;
    width: 300px;
    height: 500px;

    img {
      object-fit: ${objectFit};
    }
  `}
`

export default function AfterFill() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>

      <ImageWrapper objectFit="cover">
        <Image src="/img/1.jpg" layout="fill" />
      </ImageWrapper>

      <ImageWrapper objectFit="contain">
        <Image src="/img/1.jpg" layout="fill" />
      </ImageWrapper>

      <ImageWrapper objectFit="none">
        <Image src="/img/1.jpg" layout="fill" />
      </ImageWrapper>
    </Container>
  )
}
