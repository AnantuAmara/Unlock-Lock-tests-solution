// Write your code here
import {useState} from 'react'
import {MainContainer, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [btnStatus, setBtnStatus] = useState(false)
  const onClickBtn = () => setBtnStatus(prevState => !prevState)
  return (
    <MainContainer>
      {btnStatus ? (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
      ) : (
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
      )}
      {btnStatus ? (
        <Text> Your Device Is unlocked</Text>
      ) : (
        <Text> Your Device Is Locked</Text>
      )}
      {btnStatus ? (
        <Button type="button" onClick={onClickBtn}>
          Lock
        </Button>
      ) : (
        <Button type="button" onClick={onClickBtn}>
          UnLock
        </Button>
      )}
    </MainContainer>
  )
}

export default Unlock
