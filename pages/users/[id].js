// import { useRouter } from "next/router";
import React from "react";

export default function BlogDetails({ user }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div>
      <h3>Dynamic blog details</h3>
      <h1> Name: {user.name}</h1>
    </div>
  );
}

// pass kora id ta context params  e pabo.
// export async function getServerSideProps(context) {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/users/" + context.params.id
//   );
//   const user = await res.json();

//   return {
//     props: { user }, // will be passed to the page component as props
//   };
// }

// static side genaration
// getStaticProps eka kaj korte pare na getStaticPaths lage.
export async function getStaticProps(context) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + context.params.id
  );
  const user = await res.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}

//
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const users = await res.json();

  const ids = users.map((user) => user.id);
  const paths = ids.map((userId) => ({ params: { id: userId.toString() } }));

  return {
    paths,
    fallback: false, // See the "fallback" section below
  };
}
// fallback: true, false or "blocking"
