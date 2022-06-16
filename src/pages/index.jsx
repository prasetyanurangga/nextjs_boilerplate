import Head from "next/head";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>Khalisa Khalid</title>
        <link rel="icon" href="/img/home/khalisakhalid.jpeg" />
      </Head>
      <Hero />
    </div>
  );
}