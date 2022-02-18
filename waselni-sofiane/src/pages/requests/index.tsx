import { GetServerSideProps } from 'next';
import React from 'react';
import { requireAuthentification } from '../../../contexts/requireAuthentification';
import MyRequests from '../../components/requests/MyRequests';
import Layout from '../../layout/Layout';

const title = "My requests";

const Requests = () => {
    return (
      <Layout title='Requests'>
        <MyRequests title={title} />
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

export default Requests;