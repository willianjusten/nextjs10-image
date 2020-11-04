import Link from 'next/link'
import Image from 'next/image'

import { Container } from 'components/Container'

export default function AfterFill() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>
      <Image src="/img/1.jpg" layout="fill" />
      <Image src="/img/2.jpg" layout="fill" />
      <Image src="/img/3.jpg" layout="fill" />
      <Image src="/img/4.jpg" layout="fill" />
      <Image src="/img/5.jpg" layout="fill" />
      <Image src="/img/6.jpg" layout="fill" />
      <Image src="/img/7.jpg" layout="fill" />
    </Container>
  )
}
