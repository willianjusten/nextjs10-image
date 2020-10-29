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

      {/* just a huge block of space */}
      <div style={{ height: 2000 }}></div>

      <Image src="/img/7.jpg" width={1600} height={900} priority />
    </Container>
  )
}
