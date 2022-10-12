import Link from "next/link";

function SobrePage() {
  return (
    <div>
      SobrePage
      <li>
        <Link href="/" passHref>
          <a>Ir para a home</a>
        </Link>
      </li>
    </div>
  )
}

export default SobrePage
