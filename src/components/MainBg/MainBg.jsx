import {MainBgImage} from './MainBg.styled.jsx'

export default function MainBg({RigthComponent, LeftComponent}) {
  return (
      <>
          <MainBgImage>
            <div className="wrapper-right">{RigthComponent}</div>
            <div>{LeftComponent}</div></MainBgImage>
      </>

  )
}