import { Button, StyledButton } from "./components/Button.style"
import { Wrapper } from "./components/Wrapper.style"


function App() {

  return (
    <Wrapper>
      <StyledButton backgroundColor="blue">Clica</StyledButton>
      <StyledButton backgroundColor="red">Clica</StyledButton>
      <Button>Clica ai</Button>
      <a href="#">Clique aqui</a>
    </Wrapper>
  )
}

export default App
