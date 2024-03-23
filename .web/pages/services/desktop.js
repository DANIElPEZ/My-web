/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Drawer, DrawerContent, DrawerOverlay, HStack, Image as ChakraImage, Link, VStack } from "@chakra-ui/react"
import NextHead from "next/head"



export function Text_dd01fe66ebeeb8fe6e805aa0750a49f0 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_621c8682b3647c3e5fa1a5e6fd7a6c70 = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`daniel.gonzalezubaque@gmail.com`}),Event("_alert", {message:`Email copiado`})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesText as={`p`} css={{"&:hover": {"cursor": "pointer", "borderWidth": "0 0 1px 0", "borderColor": "#ffffff"}, "fontSize": "1em"}} onClick={on_click_621c8682b3647c3e5fa1a5e6fd7a6c70}>
  {`Email: daniel.gonzalezubaque@gmail.com`}
</RadixThemesText>
  )
}

export function Hamburgericon_06ce6656e6bd18871338bcccc8a8fc89 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <HamburgerIcon onClick={on_click_7117dedca00ef7c83aa76deb05426098} sx={{"color": "#ffffff", "width": "30px", "height": "30px"}}/>
  )
}

export function Link_a13da362d3c48094ef3f7250c1baa1fc () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/myroute`} passHref={true}>
  {`Mi ruta`}
</NextLink>
</RadixThemesLink>
  )
}

export function Link_49b91569c668e035707a759ae06cc22a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/`} passHref={true}>
  {`Inicio`}
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_27b58d6802a13208e1fa7380007f27a1 () {


  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/DANIElPEZ/My-web`} passHref={true}>
  <ChakraImage src={`/rx.png`} sx={{"width": "10%", "borderRadius": "50%", "padding": "2px", "border": "2px", "borderColor": "#ffffff", "margin": "auto", "_hover": {"borderColor": "#fed704"}}}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Button_33957ae1acd6e1eabd8b53dffb92d46f () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_82fefc87af9dc0c4e54bfcbc7e2115fb = useCallback((_e) => addEvents([Event("_download", {url:`/programas/linearalgebra.zip`,filename:`linearalgebra.zip`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_82fefc87af9dc0c4e54bfcbc7e2115fb} sx={{"width": "150px", "height": "40px", "backgroundColor": "rgb(2, 59, 77)", "border": "none", "color": "#ffffff", "fontWeight": "600", "overflow": "hidden", "transition": "1s", "_before": {"width": "150px", "height": "40px", "position": "absolute", "fontSize": "20px", "paddingTop": "6px", "content": "\"⭳\"", "backgroundColor": "rgb(16, 73, 83)", "left": "-100%"}, "marginTop": "0.8em", "marginBottom": "0.8em", "_hover": {"_before": {"left": "0", "transition": "1s"}, "transition": "1s"}}}>
  {`Descargar`}
</Button>
  )
}

export function Button_0c3a34d0ae553158358a8441a5a10cce () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_fe021586c4d4419f2df894d1d2a2e6a3 = useCallback((_e) => addEvents([Event("_download", {url:`/programas/ulamspiral.zip`,filename:`ulamspiral.zip`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_fe021586c4d4419f2df894d1d2a2e6a3} sx={{"width": "150px", "height": "40px", "backgroundColor": "rgb(2, 59, 77)", "border": "none", "color": "#ffffff", "fontWeight": "600", "overflow": "hidden", "transition": "1s", "_before": {"width": "150px", "height": "40px", "position": "absolute", "fontSize": "20px", "paddingTop": "6px", "content": "\"⭳\"", "backgroundColor": "rgb(16, 73, 83)", "left": "-100%"}, "marginTop": "0.8em", "marginBottom": "0.8em", "_hover": {"_before": {"left": "0", "transition": "1s"}, "transition": "1s"}}}>
  {`Descargar`}
</Button>
  )
}

export function Link_f9d7419588827130bca4758f32e6cdba () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/matriz`} passHref={true}>
  {`Matriz 3x3`}
</NextLink>
</RadixThemesLink>
  )
}

export function Closeicon_fbf8814cd04354f0bf2a3d5012256b84 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <CloseIcon onClick={on_click_7117dedca00ef7c83aa76deb05426098} sx={{"margin": "0.5em", "color": "#ffffff"}}/>
  )
}

export function Drawer_f48aa0d4627112b1cfdc54b759517e42 () {
  const state__open = useContext(StateContexts.state__open)


  return (
    <Drawer isOpen={state__open.sidebar} sx={{"direction": "right"}}>
  <DrawerOverlay/>
  <DrawerContent sx={{"backgroundColor": "#0f1928", "transition": "0.3s"}}>
  <RadixThemesBox css={{"width": "100%"}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex css={{"width": "90%"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <Closeicon_fbf8814cd04354f0bf2a3d5012256b84/>
</RadixThemesFlex>
</RadixThemesFlex>
  <Link_49b91569c668e035707a759ae06cc22a/>
  <Link_a13da362d3c48094ef3f7250c1baa1fc/>
  <Link_7e32d969e4ccf3ece08496cdfe41f19b/>
  <Link_f9d7419588827130bca4758f32e6cdba/>
  <Link_e602118b5791823356c1c5931ca0db33/>
  <Link_0831b21b792fcbccc061ac0eb8a2d551/>
  <Link_bbd46e24bdae70cb7eb1a8790ac3a01d/>
</RadixThemesFlex>
</RadixThemesBox>
</DrawerContent>
</Drawer>
  )
}

export function Text_50f1a4b0b15dca45438978c267c82ce4 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_3d495ee8f0ba4138ad6f59cb5e0d5e2b = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`3187039648`}),Event("_alert", {message:`Numero de telefono copiado`})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesText as={`p`} css={{"&:hover": {"cursor": "pointer", "borderWidth": "0 0 1px 0", "borderColor": "#ffffff"}, "fontSize": "1em"}} onClick={on_click_3d495ee8f0ba4138ad6f59cb5e0d5e2b}>
  {`Cel: +57 318 7039648`}
</RadixThemesText>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Link_e602118b5791823356c1c5931ca0db33 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/game`} passHref={true}>
  {`Piedra Papel o Tijera`}
</NextLink>
</RadixThemesLink>
  )
}

export function Button_cf13c382484fbb500fa6864c7e745d0c () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_c943fdc63367dbd7dc977322025b87c5 = useCallback((_e) => addEvents([Event("_download", {url:`/programas/pong.zip`,filename:`pong.zip`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_c943fdc63367dbd7dc977322025b87c5} sx={{"width": "150px", "height": "40px", "backgroundColor": "rgb(2, 59, 77)", "border": "none", "color": "#ffffff", "fontWeight": "600", "overflow": "hidden", "transition": "1s", "_before": {"width": "150px", "height": "40px", "position": "absolute", "fontSize": "20px", "paddingTop": "6px", "content": "\"⭳\"", "backgroundColor": "rgb(16, 73, 83)", "left": "-100%"}, "marginTop": "0.8em", "marginBottom": "0.8em", "_hover": {"_before": {"left": "0", "transition": "1s"}, "transition": "1s"}}}>
  {`Descargar`}
</Button>
  )
}

export function Link_7e32d969e4ccf3ece08496cdfe41f19b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/tools`} passHref={true}>
  {`Otros enlaces`}
</NextLink>
</RadixThemesLink>
  )
}

export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_0831b21b792fcbccc061ac0eb8a2d551 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/comments`} passHref={true}>
  {`Deja tu comentario`}
</NextLink>
</RadixThemesLink>
  )
}

export function Button_82ea4af44c690c13958ef35f2d8a79a5 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_056983205ca1d23cbf82811b20330215 = useCallback((_e) => addEvents([Event("_download", {url:`/programas/vectores.zip`,filename:`vectores.zip`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_056983205ca1d23cbf82811b20330215} sx={{"width": "150px", "height": "40px", "backgroundColor": "rgb(2, 59, 77)", "border": "none", "color": "#ffffff", "fontWeight": "600", "overflow": "hidden", "transition": "1s", "_before": {"width": "150px", "height": "40px", "position": "absolute", "fontSize": "20px", "paddingTop": "6px", "content": "\"⭳\"", "backgroundColor": "rgb(16, 73, 83)", "left": "-100%"}, "marginTop": "0.8em", "marginBottom": "0.8em", "_hover": {"_before": {"left": "0", "transition": "1s"}, "transition": "1s"}}}>
  {`Descargar`}
</Button>
  )
}

export function Link_bbd46e24bdae70cb7eb1a8790ac3a01d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7117dedca00ef7c83aa76deb05426098 = useCallback((_e) => addEvents([Event("state.open.toglesidebar", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesLink asChild={true} css={{"textAlign": "center", "color": "#ffffff", "fontSize": "1.1em", "textDecoration": "none", "fontFamily": "Roboto-Mono", "width": "100%", "transition": "0.2s", "&:hover": {"background": "#105a86", "borderWidth": "0 0 0 2px", "borderColor": "#ffffff", "cursor": "pointer"}}} onClick={on_click_7117dedca00ef7c83aa76deb05426098}>
  <NextLink href={`/blog`} passHref={true}>
  {`Blog`}
</NextLink>
</RadixThemesLink>
  )
}

export function Button_00644a02be335166cd982eeb40f6b760 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7a48eab718d0609c9af4b628292a9aa2 = useCallback((_e) => addEvents([Event("_download", {url:`/programas/rockpaperscissor.zip`,filename:`rockpaperscissor.zip`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_7a48eab718d0609c9af4b628292a9aa2} sx={{"width": "150px", "height": "40px", "backgroundColor": "rgb(2, 59, 77)", "border": "none", "color": "#ffffff", "fontWeight": "600", "overflow": "hidden", "transition": "1s", "_before": {"width": "150px", "height": "40px", "position": "absolute", "fontSize": "20px", "paddingTop": "6px", "content": "\"⭳\"", "backgroundColor": "rgb(16, 73, 83)", "left": "-100%"}, "marginTop": "0.8em", "marginBottom": "0.8em", "_hover": {"_before": {"left": "0", "transition": "1s"}, "transition": "1s"}}}>
  {`Descargar`}
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"position": "fixed", "backgroundColor": "#1b2b43", "paddingInlineStart": "2em", "paddingInlineEnd": "2em", "paddingTop": "1em", "paddingBottom": "1em", "zIndex": "10", "top": "0px important!", "width": "100%"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesLink asChild={true} css={{"fontFamily": "Comfortaa-medium", "fontSize": "1.5em", "width": "110px", "textDecoration": "none", "&:hover": null}}>
  <NextLink href={`/`} passHref={true}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "#8199ba"}}>
  {`Dani`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#fed704"}}>
  {`Dev`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Hamburgericon_06ce6656e6bd18871338bcccc8a8fc89/>
</RadixThemesFlex>
  <Drawer_f48aa0d4627112b1cfdc54b759517e42/>
</RadixThemesFlex>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"maxWidth": "560px", "marginTop": "5em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "7"}} size={`7`}>
  {`Proyectos principales`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Algebra lineal`}
</RadixThemesHeading>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <RadixThemesBox css={{"width": "100%", "marginLeft": "10px"}}>
  <RadixThemesBox css={{"marginLeft": "10px", "width": "40%"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img src={`/mt1.jpeg`}/>
  <img css={{"height": "230px"}} src={`/mt2.jpeg`}/>
</RadixThemesFlex>
  <Button_33957ae1acd6e1eabd8b53dffb92d46f/>
</RadixThemesBox>
  <RadixThemesBox css={{"marginLeft": "10px"}}>
  <RadixThemesFlex align={`start`} css={{"width": "40%"}} direction={`row`} gap={`2`}>
  <img src={`/v1.jpeg`}/>
  <img css={{"height": "330px"}} src={`/v2.jpeg`}/>
</RadixThemesFlex>
  <img css={{"width": "447px", "marginTop": "10px"}} src={`/mt3.jpeg`}/>
  <Button_82ea4af44c690c13958ef35f2d8a79a5/>
</RadixThemesBox>
</RadixThemesBox>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesBox css={{"width": "100%", "marginLeft": "10px"}}>
  <RadixThemesBox css={{"marginLeft": "10px", "width": "40%"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"height": "155px"}} src={`/mt1.jpeg`}/>
  <img css={{"height": "155px"}} src={`/mt2.jpeg`}/>
</RadixThemesFlex>
  <Button_33957ae1acd6e1eabd8b53dffb92d46f/>
</RadixThemesBox>
  <RadixThemesBox css={{"marginLeft": "10px", "paddingTop": "10px"}}>
  <RadixThemesFlex align={`start`} css={{"width": "40%"}} direction={`row`} gap={`2`}>
  <img css={{"height": "215px"}} src={`/v1.jpeg`}/>
  <img css={{"height": "215px"}} src={`/v2.jpeg`}/>
</RadixThemesFlex>
  <img css={{"width": "287px", "marginTop": "10px"}} src={`/mt3.jpeg`}/>
  <Button_82ea4af44c690c13958ef35f2d8a79a5/>
</RadixThemesBox>
</RadixThemesBox>
</Box>
  <RadixThemesBox>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "7"}} size={`7`}>
  {`Otros proyectos`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h4`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Espiral de Ulam`}
</RadixThemesHeading>
  <Button_0c3a34d0ae553158358a8441a5a10cce/>
  <RadixThemesHeading as={`h4`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Juego Pong`}
</RadixThemesHeading>
  <Button_cf13c382484fbb500fa6864c7e745d0c/>
  <RadixThemesHeading as={`h4`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Juego piedra, papel o tijera`}
</RadixThemesHeading>
  <Button_00644a02be335166cd982eeb40f6b760/>
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"paddingBottom": "90px", "width": "100%", "height": "100%", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <Box sx={{"width": "95%", "display": ["none", "none", "none", "block"]}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesFlex css={{"color": "#A3ABB2", "padding": "0.8em", "width": "100%"}}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} size={`3`}>
  {`CANVA PRESENTATIONS`}
</RadixThemesHeading>
  <Link as={NextLink} href={`https://www.canva.com/design/DAF2s4Ivg0g/v1-kGHCIL1-_Hfw01nyE6Q/edit?utm_content=DAF2s4Ivg0g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`} isExternal={true} sx={{"textDecoration": "none", "marginTop": "0px important!", "_hover": {"color": "#fed704"}}}>
  <HStack sx={{"height": "2em"}}>
  <Avatar src={`/arrow.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <RadixThemesText as={`p`}>
  {`ULAM SPIRAL`}
</RadixThemesText>
</HStack>
</Link>
  <Link as={NextLink} href={`https://www.canva.com/design/DAF6rBYsLno/3FKOHOTFTvGTRsw53evWPA/edit?utm_content=DAF6rBYsLno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`} isExternal={true} sx={{"textDecoration": "none", "marginTop": "0px important!", "_hover": {"color": "#fed704"}}}>
  <HStack sx={{"height": "2em"}}>
  <Avatar src={`/arrow.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <RadixThemesText as={`p`}>
  {`PYTHON COURSE`}
</RadixThemesText>
</HStack>
</Link>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <VStack sx={{"width": "300px", "paddingTop": "2em"}}>
  <Link_27b58d6802a13208e1fa7380007f27a1/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`💻 PYTHON DEVELOPER 💻`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "marginTop": "0px important!"}}>
  {`Years active from beautiful colombia 👍 2023 - 2024`}
</RadixThemesText>
</VStack>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Contact`}
</RadixThemesHeading>
  <Text_50f1a4b0b15dca45438978c267c82ce4/>
  <Text_dd01fe66ebeeb8fe6e805aa0750a49f0/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesFlex align={`start`} css={{"paddingInlineStart": "10px", "paddingInlineEnd": "10px", "color": "#A3ABB2"}} direction={`column`} gap={`2`}>
  <VStack sx={{"width": "300px", "paddingTop": "2em"}}>
  <Link_27b58d6802a13208e1fa7380007f27a1/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`💻 PYTHON DEVELOPER 💻`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "marginTop": "0px important!"}}>
  {`Years active from beautiful colombia 👍 2023 - 2024`}
</RadixThemesText>
</VStack>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} size={`3`}>
  {`CANVA PRESENTATIONS`}
</RadixThemesHeading>
  <Link as={NextLink} href={`https://www.canva.com/design/DAF2s4Ivg0g/v1-kGHCIL1-_Hfw01nyE6Q/edit?utm_content=DAF2s4Ivg0g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`} isExternal={true} sx={{"textDecoration": "none", "marginTop": "0px important!", "_hover": {"color": "#fed704"}}}>
  <HStack sx={{"height": "2em"}}>
  <Avatar src={`/arrow.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <RadixThemesText as={`p`}>
  {`ULAM SPIRAL`}
</RadixThemesText>
</HStack>
</Link>
  <Link as={NextLink} href={`https://www.canva.com/design/DAF6rBYsLno/3FKOHOTFTvGTRsw53evWPA/edit?utm_content=DAF6rBYsLno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton`} isExternal={true} sx={{"textDecoration": "none", "marginTop": "0px important!", "_hover": {"color": "#fed704"}}}>
  <HStack sx={{"height": "2em"}}>
  <Avatar src={`/arrow.png`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <RadixThemesText as={`p`}>
  {`PYTHON COURSE`}
</RadixThemesText>
</HStack>
</Link>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "paddingTop": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} size={`6`}>
  {`Contact`}
</RadixThemesHeading>
  <Text_50f1a4b0b15dca45438978c267c82ce4/>
  <Text_dd01fe66ebeeb8fe6e805aa0750a49f0/>
</RadixThemesFlex>
</RadixThemesFlex>
</Box>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Dani Dev`}
</title>
  <meta content={`Este es mi portafolio de servicios`} name={`description`}/>
  <meta content={`/DVC.png`} property={`og:image`}/>
  <meta content={`website`} name={`og:type`}/>
  <meta content={`/DVC.png`} name={`og:image`}/>
  <meta content={`Dani Dev`} name={`og:title`}/>
  <meta content={`Este es mi portafolio de servicios`} name={`og:description`}/>
</NextHead>
</Fragment>
  )
}
