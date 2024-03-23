/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Box as RadixThemesBox, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { ArrowForwardIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Drawer, DrawerContent, DrawerOverlay, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
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

export function Link_3e81b13149af13326fe66f70d2007929 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "width": "100%", "margin": "0px important!", "spacing": "0.5em", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/DANIElPEZ/DaniDev-software.git`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "whiteSpace": "normal", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Avatar src={`/Github.png`} sx={{"width": "2em", "height": "2em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Roboto-Mono"}}>
  {`Programas`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Software libre`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
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

export function Link_511b12498bf44587c7dd9e6303f6e885 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "width": "100%", "margin": "0px important!", "spacing": "0.5em", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.facebook.com/danielsantiagoangel.gonzalezubaque?mibextid=ZbWKwL`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "whiteSpace": "normal", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Avatar src={`/Facebook.png`} sx={{"width": "2em", "height": "2em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Roboto-Mono"}}>
  {`Facebook`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi perfil de facebook`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_71758b94d51b03c4225ba5a4f77732eb () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "width": "100%", "margin": "0px important!", "spacing": "0.5em", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.instagram.com/dani.g.dev?igsh=cnhlZTRqMnVwZzZp`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "whiteSpace": "normal", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Avatar src={`/Instagram.png`} sx={{"width": "2em", "height": "2em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Roboto-Mono"}}>
  {`Instagram`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Mi perfil de instagram`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
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

export function Link_cfdbc8b13998645b7da36fd864cfb04e () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "width": "100%", "margin": "0px important!", "spacing": "0.5em", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/myroute`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "whiteSpace": "normal", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Avatar src={`/route.png`} sx={{"width": "2em", "height": "2em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Roboto-Mono"}}>
  {`Recursos para estudiar`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Lo que yo se`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
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

export function Link_720074846972f69488d9c193bb5c76a3 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "width": "100%", "margin": "0px important!", "spacing": "0.5em", "&:hover": null}} target={isTrue(false) ? `_blank` : ``}>
  <NextLink href={`/tools`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "whiteSpace": "normal", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Avatar src={`/Sql.png`} sx={{"width": "2em", "height": "2em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Roboto-Mono"}}>
  {`Herramientas`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Paginas externas`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
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

export function Link_7df803ee5bdf0ed1da47b03d156a8626 () {


  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "width": "100%", "margin": "0px important!", "spacing": "0.5em", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.python.org/`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "whiteSpace": "normal", "padding": "0.5em", "borderRadius": "1em", "backgroundColor": "#171F26", "color": "#F1F2F4", "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Avatar src={`/Python.png`} sx={{"width": "2em", "height": "2em", "margin": "0.8em", "padding": "2px", "_hover": {"border": "2px", "borderColor": "#ffffff"}}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em", "color": "#F1F2F4", "fontFamily": "Roboto-Mono"}}>
  {`Python`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Pagina oficial de python`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
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
  <RadixThemesFlex align={`start`} css={{"maxWidth": "560px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"alignItems": "start", "spacing": "2em", "paddingTop": "3.5em"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`4`}>
  <Avatar size={`xl`} src={`/DVC.png`} sx={{"background": "#171F26", "border": "4px", "borderColor": "#183b6b"}}/>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "alignItems": "start"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h1`} css={{"color": "#F1F2F4", "fontFamily": "open sans"}} size={`7`}>
  {`DANI`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"paddingTop": "0px !important", "color": "#C3C7CB"}} size={`3`}>
  {`@Danidev`}
</RadixThemesHeading>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex css={{"width": "100%"}}>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+1 `}
</Text>
  {`Años en crear aplicaciones`}
</RadixThemesBox>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesBox css={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+6 `}
</Text>
  {`proyectos realizados`}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB", "fontSize": "0.8em"}}>
  {`Bienvenidos mi nombre es DANIEL SANTIAGO ANGEL GONZALEZ UBAQUE y soy estudiante de esta excelente carrera `}
  <ArrowForwardIcon/>
  {` Ingenieria informatica. Ser un excelente programador en el lenguaje de programacion Python.`}
</RadixThemesText>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} css={{"paddingTop": "0px !important", "color": "#e7ecf1"}} size={`3`}>
  {`Mis Servicios`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true}>
  <NextLink href={`/services/desktop`} passHref={true}>
  <Button sx={{"background": "#265148", "color": "#ffffff", "_hover": {"background": "#377769"}}}>
  {`Desktop Apps`}
</Button>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} css={{"spacing": "0.8em", "maxWidth": "560px", "width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading as={`h2`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "7"}} size={`7`}>
  {`Enlaces de interes`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Lenguaje`}
</RadixThemesHeading>
  <Link_7df803ee5bdf0ed1da47b03d156a8626/>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Redes sociales`}
</RadixThemesHeading>
  <Link_71758b94d51b03c4225ba5a4f77732eb/>
  <Link_511b12498bf44587c7dd9e6303f6e885/>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Software`}
</RadixThemesHeading>
  <Link_3e81b13149af13326fe66f70d2007929/>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Mi ruta`}
</RadixThemesHeading>
  <Link_cfdbc8b13998645b7da36fd864cfb04e/>
  <RadixThemesHeading as={`h3`} css={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4", "fontFamily": "Comfortaa-medium", "size": "4"}} size={`4`}>
  {`Otros enlaces`}
</RadixThemesHeading>
  <Link_720074846972f69488d9c193bb5c76a3/>
</RadixThemesFlex>
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
