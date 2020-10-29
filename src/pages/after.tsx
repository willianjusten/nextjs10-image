import Link from 'next/link'
import Image from 'next/image'

import { Container } from 'components/Container'

export default function Before() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>
      <Image src="/img/1.jpg" width={1600} height={900} />
      <Image src="/img/2.jpg" width={1600} height={900} />
      <Image src="/img/3.jpg" width={1600} height={900} />
      <Image src="/img/4.jpg" width={1600} height={900} />
      <Image src="/img/5.jpg" width={1600} height={900} />
      <Image src="/img/6.jpg" width={1600} height={900} />
      <Image src="/img/7.jpg" width={1600} height={900} />
    </Container>
  )
}
