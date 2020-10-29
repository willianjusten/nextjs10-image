import Link from 'next/link'
import Image from 'next/image'

import { Container } from 'components/Container'

export default function Unsized() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>

      <Image src="/img/1.jpg" unsized />
      <Image src="/img/2.jpg" unsized />
      <Image src="/img/3.jpg" unsized />
      <Image src="/img/4.jpg" unsized />
      <Image src="/img/5.jpg" unsized />
      <Image src="/img/6.jpg" unsized />
      <Image src="/img/7.jpg" unsized />
    </Container>
  )
}
