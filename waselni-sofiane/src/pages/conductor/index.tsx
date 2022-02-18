import { GetServerSideProps } from 'next';
import React from 'react';
import { requireAuthentification } from '../../../contexts/requireAuthentification';
import ConductorHome from '../../components/conductor-home/HomeConductor';
import Layout from '../../layout/Layout';

const title = "Hey Rassem";

const Conductor = () => {
    return (
      <Layout title='Conductor'>
        <ConductorHome title={title} />
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

export default Conductor;