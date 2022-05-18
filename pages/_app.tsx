import { AppProps } from 'next/app';
import variables from '../styles/common.module.scss';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} style={{ color: variables.primaryColor }} />;
}
