import { useRouter } from "next/router";
import Link from "next/link";

export default function Comentarios() {
  const router = useRouter();

  return (
    <div>
      {`Comentários do post com id => ${router.query.id}`}
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Ir para a home</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts/${router.query.id}`} passHref>
            <a>Ir para o post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
