import Head from "next/head";

const LayoutPage = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  );
};

export { LayoutPage };
