import { GetServerSideProps } from 'next';
import React from 'react';
import { requireAuthentification } from '../../../contexts/requireAuthentification';
import SettingsPage from '../../components/settings/SettingsPage';
import Layout from '../../layout/Layout';

const title = "My settings";


const Settings = () => {
    return (
      <Layout title='Dashboard'>
        <SettingsPage title={title}/>
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


export default Settings;