import { useRouter } from "next/router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();

  return (
    <div>
      {`Id do post atual => ${router.query.id}`}
      <ul>
        <li>
          <Link href="/" passHref>
            <a>Ir para a home</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts2/${router.query.id}/comentarios`}>
            <a>Ir para comentarios</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
