import Link from 'next/link'
import styled from 'styled-components'

const HomeContainer = styled.main`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;

  h1 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding-top: 30px;
  }

  li {
    padding: 10px 0;
  }
`

export default function Home() {
  return (
    <HomeContainer>
      <div>
        <h1>NextJS 10 - Image Optimization</h1>
        <p>
          You can{' '}
          <a href="https://youtu.be/xkkSiYitZbM">
            watch this video to explanations (pt-br)
          </a>{' '}
          and{' '}
          <a href="https://github.com/willianjusten/nextjs10-image">
            code here.
          </a>
        </p>
        <p>Or click the links bellow to see the differences:</p>

        <nav>
          <ul>
            <li>
              <Link href="/before">
                <a>Before</a>
              </Link>
            </li>

            <li>
              <Link href="/unsized">
                <a>After - unsized images (Deprecated)</a>
              </Link>
            </li>

            <li>
              <Link href="/fixed">
                <a>After - fixed images (Non responsiveness)</a>
              </Link>
            </li>

            <li>
              <Link href="/after">
                <a>After - defined sizes (intrinsic mode)</a>
              </Link>
            </li>

            <li>
              <Link href="/after-fill">
                <a>After - not defined sizes (fill mode)</a>
              </Link>
            </li>

            <li>
              <Link href="/after-responsive">
                <a>After - defined sizes (responsive mode)</a>
              </Link>
            </li>

            <li>
              <Link href="/styled-image">
                <a>After - styled images</a>
              </Link>
            </li>

            <li>
              <Link href="/low-quality">
                <a>Low quality</a>
              </Link>
            </li>

            <li>
              <Link href="/priority">
                <a>Without lazy loading - priority</a>
              </Link>
            </li>

            <li>
              <Link href="/external">
                <a>External images</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HomeContainer>
  )
}
