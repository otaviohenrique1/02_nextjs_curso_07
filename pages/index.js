import Link from "next/link";
import Image from "next/image";

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <Image
        src="/images/avatar.jpg"
        width={50}
        height={50}
      />
      <ul>
        <li>
          <Link href="/posts/99" passHref>
            <a>Ir para o /post</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre" passHref>
            <a>Ir para a /sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
