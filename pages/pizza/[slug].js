import { client } from "../../lib/client";

export default function pizza({ pizza }) {
  console.log(pizza);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type =="pizza" && slug.current == ${slug}][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}

