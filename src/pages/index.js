import Head from "next/head";

export default function Index() {
  return (
    <div>
      <Head>
        <title>TibiaLabs API v2</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>
        <h1>TibiaLabs API v2</h1>
        <p>
          Hey, you won't find anything here. We encourage you to access{" "}
          <a href="https://tibialabs.com" target="_blank">
            our website
          </a>{" "}
          or even our awesome{" "}
          <a href="https://docs.tibialabs.com" target="_blank">
            Documentation
          </a>
          .
        </p>
      </p>
    </div>
  );
}
