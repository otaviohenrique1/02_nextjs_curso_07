import Link from "next/link";

function Custom404() {
  return (
    <div>
      404 - Nao Encontrado
      <li>
        <Link href="/" passHref>
          <a>Ir para a home</a>
        </Link>
      </li>
    </div>
  )
}

export default Custom404
