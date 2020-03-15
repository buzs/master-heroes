import React from 'react';
// import stylesheet from 'antd/dist/antd.min.css';

import Head from 'next/head';

import { Layout } from 'antd';

const { Content, Footer } = Layout;

// import { Container } from './styles';

type Props = {
  title?: string;
};

const LayoutNext: React.FunctionComponent<Props> = ({
  children,
  title = 'Master Heroes',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Layout className="layout">
      <Content className="main">{children}</Content>
      <Footer className="footer">using superheros-api made in brazil</Footer>
    </Layout>
  </>
);

export default LayoutNext;
