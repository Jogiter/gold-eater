import type { NextPage } from 'next'
import { Typography, Link } from '@mui/material'
import GrowthDevelopment, { Gender } from '~/components/GrowthDevelopment'
import Layout from '~/components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mt-10">
        <Typography variant="h3">中国7岁以下儿童生长发育参照标准</Typography>
        <Typography variant="subtitle1" className="mt-4">
          <Link
            href="http://www.nhc.gov.cn/wjw/gfxwj/201304/b64543eaaee1463992e8ce97441c59bb.shtml"
            target="_blank"
          >
            《中国7岁以下儿童生长发育参照标准》
          </Link>
        </Typography>
        <div className="p-4">
          <GrowthDevelopment gender={Gender.boy}></GrowthDevelopment>
          <GrowthDevelopment gender={Gender.girl}></GrowthDevelopment>
        </div>
      </div>
    </Layout>
  )
}

export default Home
