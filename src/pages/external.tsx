import Link from 'next/link'
import Image from 'next/image'
import { Container } from 'components/Container'

export default function Before() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x900"
        width={1600}
        height={900}
      />
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x901"
        width={1600}
        height={901}
      />
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x902"
        width={1600}
        height={902}
      />
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x903"
        width={1600}
        height={903}
      />
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x904"
        width={1600}
        height={904}
      />
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x905"
        width={1600}
        height={905}
      />
      <Image
        src="https://source.unsplash.com/user/willianjusten/1600x906"
        width={1600}
        height={906}
      />
    </Container>
  )
}
