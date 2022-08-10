import React from 'react'
import Layout from '../components/Layout'
import Head from '../components/Head'

export default function NotFound() {
  return (
    <>
    <Head title="Oops!"/>
    <Layout>
    <div>
      <center>
        <br/>
        <h1>404 ERROR!</h1>
        <br/><br/>
        <p>Oh no! There seems to be an issue, as that page doesn't exist... <br/><br/> Please enjoy this picture of my dog Silla as a consolation.</p>
        <br/>
        <br/><img src='/bean.jpg' style={{ borderRadius: '20px'}}/><br/>
        </center>
    </div>
    </Layout>
    </>
  )
}
