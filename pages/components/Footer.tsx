import { Typography, Link } from '@mui/material'

export default function Footer () {
  return (
    <>
      <div className="flex justify-around">
        <Typography variant="overline" display="block" gutterBottom>
          <Link href="https://www.aconvert.com/document/" target="_blank">
            图片使用 aconvert 生成
          </Link>
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          <Link href="https://mui.com/" target="_blank">
            界面使用 material-ui 搭建
          </Link>
        </Typography>
      </div>
    </>
  )
}