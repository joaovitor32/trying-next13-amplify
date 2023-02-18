import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useQuery } from '@tanstack/react-query';

import { getIp } from './services/ip';

export default function Home() {
  const { data, isFetched } = useQuery({ queryKey: ['ip'], queryFn: getIp });

  const geo = data?.geo;
  const ip = data?.ip ?? 'Ip não detectado';

  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify text</title>
        <meta name="description" content="amplify test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isFetched ? (
        <div>
          <p className={styles.ip}>IP: {ip}</p>
          <p className={styles.geo}>Cidade: {geo?.city ?? 'Cidade não detectada'}</p>
          <p className={styles.geo}>País: {geo?.country ?? 'País não detectado'}</p>
          <p className={styles.geo}>Região: {geo?.region ?? 'Região não detectado'}</p>
        </div>
      ) : null}
    </div>
  );
}
