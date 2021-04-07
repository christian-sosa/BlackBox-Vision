import { Container, Text, Button, Stack, Image } from "@chakra-ui/react"
import React, { useState } from "react"
import bien from "../assets/bien.png"
import mal from "../assets/mal.png"

const Pregunta = ({ color, puntos, pregunta, setPuntos, stage, setStage }) => {
  const [isLoading, setisLoading] = useState(false)
  const [img, setImg] = useState("prueba")
  const onClickOkBool = () => {
    setisLoading(true)
    setImg(bien)
    setTimeout(() => {
      setisLoading(false)
      setPuntos(puntos + 5)
      stage !== 9 ? setStage(stage + 1) : setStage(20)
    }, 1000)
  }
  const onClickOkMultiple = () => {
    setisLoading(true)
    setImg(bien)
    setTimeout(() => {
      setisLoading(false)
      setPuntos(puntos + 10)
      stage !== 9 ? setStage(stage + 1) : setStage(20)
    }, 1000)
  }
  const onClickFail = () => {
    setImg(mal)
    setisLoading(true)
    setTimeout(() => {
      setisLoading(false)
      setPuntos(puntos)
      stage !== 9 ? setStage(stage + 1) : setStage(20)
    }, 1000)
  }
  return (
    <Container
      maxWidth="container.2xl"
      justifyContent="center"
      alignItems="center"
      centerContent
      className="pregunta"
      bg={color}
    >
      {isLoading ? (
        <Container centerContent>
          <Image src={img} alt={img}></Image>
        </Container>
      ) : (
        <Container maxWidth="container.2xl" centerContent>
          <Text fontSize="4xl">{pregunta.category}</Text>
          <Text fontSize="xl">Difficulty: {pregunta.difficulty}</Text>
          <Text fontSize="xl">Type: {pregunta.type}</Text>
          <Text fontSize="container.2xl">{pregunta.question}</Text>
          {pregunta.type === "boolean" ? (
            <Stack direction="row" margin="5">
              <Button size="lg" colorScheme="teal" onClick={onClickOkBool}>
                <Text>{pregunta.correct_answer}</Text>
              </Button>
              <Button size="lg" colorScheme="teal" onClick={onClickFail}>
                <Text>{pregunta.incorrect_answers[0]}</Text>
              </Button>
            </Stack>
          ) : (
            <Stack direction="row" margin="5">
              <Button size="lg" colorScheme="teal" onClick={onClickOkMultiple}>
                <Text>{pregunta.correct_answer}</Text>
              </Button>
              <Button size="lg" colorScheme="teal" onClick={onClickFail}>
                <Text>{pregunta.incorrect_answers[0]}</Text>
              </Button>
              <Button size="lg" colorScheme="teal" onClick={onClickFail}>
                <Text>{pregunta.incorrect_answers[1]}</Text>
              </Button>
              <Button size="lg" colorScheme="teal" onClick={onClickFail}>
                <Text>{pregunta.incorrect_answers[2]}</Text>
              </Button>
            </Stack>
          )}
        </Container>
      )}
    </Container>
  )
}

export default Pregunta
