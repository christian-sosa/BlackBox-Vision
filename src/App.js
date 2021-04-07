import {
  ChakraProvider,
  Container,
  Heading,
  CircularProgress,
  Stack,
  Text,
  Box,
  Image,
  Button,
} from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import "./app.css"
import preguntas from "./services/preguntas"
import Pregunta from "./components/pregunta"

function App() {
  const [pregunta, setPregunta] = useState()
  const [puntos, setPuntos] = useState(0)
  const [stage, setStage] = useState(0)
  const [isLoading, setisLoading] = useState(false)
  const [color, setColor] = useState("white")
  useEffect(() => {
    setisLoading(false)
    preguntas.getAll().then((initial2) => {
      setPregunta(initial2)
    })
    setTimeout(() => {
      setisLoading(true)
    }, 1500)
  }, [])

  const changeColorWhite = () => {
    setColor("white")
  }
  const changeColorRed = () => {
    setColor("red.300")
  }
  const changeColorGreen = () => {
    setColor("green.300")
  }
  const changeColorBlue = () => {
    setColor("blue.600")
  }
  const volverAjugar = () => {
    setisLoading(false)
    preguntas.getAll().then((initial2) => {
      setPregunta(initial2)
    })
    setTimeout(() => {
      setisLoading(true)
    }, 1500)
    setPuntos(0)
    setStage(0)
  }

  return (
    <ChakraProvider>
      <Container className="container" maxWidth="container.2xl" bg={color}>
        <Stack direction="column">
          <Image
            src="https://github.com/goncy/blackbox-vision-challenge/blob/main/src/assets/logo.png?raw=true"
            alt=""
          ></Image>
          <Stack direction="row" justifyContent="space-between">
            <Heading>Christian Agustin Sosa</Heading>
            <Stack direction="column" margin="0" padding="0">
              <Box
                w="25px"
                h="25px"
                bg="white"
                onClick={changeColorWhite}
              ></Box>
              <Box
                w="25px"
                h="25px"
                bg="red.300"
                onClick={changeColorRed}
              ></Box>
              <Box
                w="25px"
                h="25px"
                bg="green.300"
                onClick={changeColorGreen}
              ></Box>
              <Box
                w="25px"
                h="25px"
                bg="blue.600"
                onClick={changeColorBlue}
              ></Box>
            </Stack>
          </Stack>
        </Stack>
        {!isLoading ? (
          <Stack margin="250px" justifyContent="center" alignItems="center">
            <CircularProgress
              isIndeterminate
              value={59}
              size="100px"
              thickness="4px"
            />
          </Stack>
        ) : stage === 20 ? (
          <Container
            className="pregunta"
            centerContent
            justifyContent="center"
            alignItems="center"
            maxWidth="container.2xl"
          >
            <Text fontSize="5xl">Su puntaje fue de {puntos} puntos</Text>
            <Button colorScheme="teal" onClick={volverAjugar}>
              Volver a jugar
            </Button>
          </Container>
        ) : (
          <Container maxWidth="container.2xl">
            <Pregunta
              color={color}
              puntos={puntos}
              setPuntos={setPuntos}
              pregunta={pregunta.results[stage]}
              stage={stage}
              setStage={setStage}
            ></Pregunta>
          </Container>
        )}
      </Container>
    </ChakraProvider>
  )
}

export default App
