import { Container } from 'components/Container'
import Link from 'next/link'

export default function Before() {
  return (
    <Container>
      <Link href="/">
        <a>Back</a>
      </Link>
      <img src="/img/1.jpg" />
      <img src="/img/2.jpg" />
      <img src="/img/3.jpg" />
      <img src="/img/4.jpg" />
      <img src="/img/5.jpg" />
      <img src="/img/6.jpg" />
      <img src="/img/7.jpg" />
    </Container>
  )
}
