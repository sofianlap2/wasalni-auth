import { GetServerSideProps } from 'next';
import React from 'react';
import { requireAuthentification } from '../../../contexts/requireAuthentification';
import MyPickUps from '../../components/pickups/MyPickups';
import Layout from '../../layout/Layout';

const title = "My pickups";

const PickUps = () => {
    return (
      <Layout title='Pickups'>
        <MyPickUps title={title} />
      </Layout>
    )
}

export const getServerSideProps : GetServerSideProps = requireAuthentification (
  async() => {

    return {
      props : {

      }
    }
  }
)

export default PickUps;