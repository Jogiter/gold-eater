import { Typography } from '@mui/material'
import Image from 'next/image'

import BoyWeightPic from '~/public/boy/weight.png'
import BoyHeightPic from '~/public/boy/height.png'
import BoyHeadPic from '~/public/boy/head.png'

import GirlWeightPic from '~/public/girl/weight.png'
import GirlHeightPic from '~/public/girl/height.png'
import GirlHeadPic from '~/public/girl/head.png'

export enum Gender {
  boy,
  girl
}

export type Props = {
  gender: Gender
}

export default function GrowthDevelopment({ gender }: Props) {
  const isBoy = gender === Gender.boy
  return (
    <>
      <Typography variant="h3">{isBoy ? '男孩' : '女孩'}（7岁以下）</Typography>
      <Typography variant="h4">身高（长）标准值（cm）</Typography>
      <Image src={isBoy ? BoyWeightPic : GirlWeightPic} alt="boy height" />
      <Typography variant="h4">体重标准值（kg）</Typography>
      <Image src={isBoy ? BoyHeightPic : GirlHeightPic} alt="boy height" />
      <Typography variant="h4">头围标准值（cm）</Typography>
      <Image src={isBoy ? BoyHeadPic : GirlHeadPic} alt="boy height" />
    </>
  )
}
