/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Avatar as RadixThemesAvatar, Box as RadixThemesBox, Code as RadixThemesCode, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { ArrowForwardIcon, CloseIcon, CopyIcon, HamburgerIcon } from "@chakra-ui/icons"
import { Avatar, Box, Button, Drawer, DrawerContent, DrawerOverlay, HStack, Image as ChakraImage, Link, Text, VStack } from "@chakra-ui/react"
import ReactMarkdown from "react-markdown"
import "katex/dist/katex.min.css"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });


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

        function ComponentMap_68150fc6794520f9985a2018fb9322fe () {
            
            return (
                {"h1": ({node, children, ...props}) => <RadixThemesHeading as={`h1`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`6`} {...props}>   {children} </RadixThemesHeading>, "h2": ({node, children, ...props}) => <RadixThemesHeading as={`h2`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`5`} {...props}>   {children} </RadixThemesHeading>, "h3": ({node, children, ...props}) => <RadixThemesHeading as={`h3`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`4`} {...props}>   {children} </RadixThemesHeading>, "h4": ({node, children, ...props}) => <RadixThemesHeading as={`h4`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`3`} {...props}>   {children} </RadixThemesHeading>, "h5": ({node, children, ...props}) => <RadixThemesHeading as={`h5`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`2`} {...props}>   {children} </RadixThemesHeading>, "h6": ({node, children, ...props}) => <RadixThemesHeading as={`h6`} css={{"marginTop": "0.5em", "marginBottom": "0.5em"}} size={`1`} {...props}>   {children} </RadixThemesHeading>, "p": ({node, children, ...props}) => <RadixThemesText as={`p`} css={{"marginTop": "1em", "marginBottom": "1em"}} {...props}>   {children} </RadixThemesText>, "ul": ({node, children, ...props}) => <RadixThemesFlex css={{"listStylePosition": "outside", "marginTop": "1em", "marginBottom": "1em", "listStyleType": "disc"}} direction={`column`}>   {children} </RadixThemesFlex>, "ol": ({node, children, ...props}) => <RadixThemesFlex css={{"listStylePosition": "outside", "marginTop": "1em", "marginBottom": "1em", "listStyleType": "decimal"}} direction={`column`}>   {children} </RadixThemesFlex>, "li": ({node, children, ...props}) => <li css={{"marginTop": "0.5em", "marginBottom": "0.5em"}}>   {children} </li>, "a": ({node, children, ...props}) => <RadixThemesLink {...props}>   {children} </RadixThemesLink>, "code": ({node, inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     if (language) {     (async () => {       try {         const module = await import(`react-syntax-highlighter/dist/cjs/languages/prism/${language}`);         SyntaxHighlighter.registerLanguage(language, module.default);       } catch (error) {         console.error(`Error importing language module for ${language}:`, error);       }     })();   }     return inline ? (         <RadixThemesCode css={{"color": "purple"}} {...props}>   {children} </RadixThemesCode>     ) : (         <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={language} style={oneDark} children={children} {...props}/>     );       }, "codeblock": ({node, children, ...props}) => <SyntaxHighlighter css={{"marginTop": "1em", "marginBottom": "1em"}} customStyle={{"marginTop": "1em", "marginBottom": "1em"}} language={`python`} style={oneDark} children={children} {...props}/>}
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

export function Copyicon_ea8b93ab6d343a9e136758d07020e086 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_73f4e7c01417458e88d0b4b03747b71d = useCallback((_e) => addEvents([Event("_set_clipboard", {content:`\nimport sys\n    def stream_logs(message, process):\n        try:\n        for line in process.stdout:\n            decoded_line = line.decode('utf-8', errors='replace')\n            sys.stdout.write(decoded_line)\n            sys.stdout.flush()\n        except UnicodeDecodeError as e:\n            print(f\"Error decoding line: {e}\")\n        except Exception as ex:\n            print(f\"Error streaming logs: {ex}\")\n        return iter([])\n            `})], (_e), {}), [addEvents, Event])

  return (
    <CopyIcon onClick={on_click_73f4e7c01417458e88d0b4b03747b71d} sx={{"alignItem": "right", "_hover": {"cursor": "pointer"}}}/>
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

export function Button_2a4c4e5759cc40a003ce219e020d3b7a () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_7a6c5d7d212517bfea5529bd26427c48 = useCallback((_e) => addEvents([Event("_download", {url:`/programas/fix_init.py`,filename:`fix_init.py`})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_7a6c5d7d212517bfea5529bd26427c48} sx={{"width": "150px", "height": "40px", "backgroundColor": "rgb(2, 59, 77)", "border": "none", "color": "#ffffff", "fontWeight": "600", "overflow": "hidden", "transition": "1s", "_before": {"width": "150px", "height": "40px", "position": "absolute", "fontSize": "20px", "paddingTop": "6px", "content": "\"⭳\"", "backgroundColor": "rgb(16, 73, 83)", "left": "-100%"}, "marginTop": "0.8em", "marginBottom": "0.8em", "_hover": {"_before": {"left": "0", "transition": "1s"}, "transition": "1s"}}}>
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
  <RadixThemesFlex align={`start`} css={{"maxWidth": "560px", "width": "100%", "marginTop": "2em", "marginBottom": "2em", "padding": "2em"}} direction={`column`} gap={`2`}>
  <RadixThemesBox css={{"paddingTop": "2em"}}>
  <Text sx={{"textAlign": "justify", "color": "#ffffff", "display": "flex"}}>
  <RadixThemesAvatar css={{"marginRight": "10px"}} size={`7`} src={`/DVC.png`}/>
  {`
            Hola yo soy Daniel Santiago Angel Gonzalez Ubaque, 
            aqui comparto unos conocimientos, 
            donde te van ayudar a solucionar problemas, 
            ser mas productivo como programador y parte de mi vida personal.
            `}
</Text>
</RadixThemesBox>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <RadixThemesBox>
  <RadixThemesHeading as={`h2`} css={{"color": "#b9ccf2", "paddingTop": "25px"}} size={`6`}>
  {`Las herramientas que yo uso`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"color": "#29e1c9", "paddingTop": "18px"}} size={`4`}>
  {`IDE`}
</RadixThemesHeading>
  <img css={{"paddingTop": "10px", "paddingBottom": "10px", "width": "560px"}} src={`/blgvsc.jpg`}/>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
                Visual Studio Code, 
                es un editor de codigo, 
                donde te ayuda a escribir codigo mas rapido, 
                dentro del editor puedes instalar varias extenciones, 
                de las cuales uso ls siguientes: Error Lens, 
                indent-rainbow, indenticator, Jupyter, Material Icon Theme, 
                One Dark Pro, Palenight Theme, Prettier - Code formatter, 
                Pylance, Python, Python Debugger, Rainbow CSV, 
                Subtle Match Brackets, Thunder Client, Live Preview.
                `}
</RadixThemesText>
  <RadixThemesHeading as={`h3`} css={{"color": "#29e1c9", "paddingTop": "18px"}} size={`4`}>
  {`Herramientas`}
</RadixThemesHeading>
  <img css={{"paddingTop": "10px", "paddingBottom": "10px", "width": "560px"}} src={`/pwtoys.jpg`}/>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
                Power Toys es una herramienta, 
                donde tiene varias aplicaciones, 
                el uso mas comun que yo hago es obtener el RGB O HEX del color de forma rapida, 
                esta herramienta incluye Always On Top, PowerToys Awake, Selector de colores,
                No se encontró el comando, Recortar y bloquear, Variables de entorno, FancyZones, 
                Complementos de File Explorer, File Locksmith, Editor del archivo "Hosts", 
                Cambio de tamaño de imágenes, Administrador de teclado, Administrador de teclado, 
                Utilidades del mouse, Mouse sin límites, Pegar como texto sin formato, Ojear, 
                PowerRename, PowerToys Run, Acento rápido, Vista previa del Registro, Regla en pantalla, 
                Guía de métodos abreviados de teclado, Extractor de texto, Silencio de videoconferencia.
                `}
</RadixThemesText>
  <RadixThemesHeading as={`h3`} css={{"color": "#f2f1b9", "paddingTop": "25px"}} size={`6`}>
  {`Solucion a`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"color": "#cbd428", "paddingTop": "18px"}} size={`4`}>
  {`Reflex`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"background": "#161b22", "color": "#eeeeee", "borderRadius": "20px", "margin": "5px", "padding": "10px", "borderColor": "#ffffff", "borderWidth": "2px", "marginTop": "10px", "marginBottom": "10px"}}>
  {`
                File "<frozen codecs>", line 322, in decode
                UnicodeDecodeError: 'utf-8' codec can't decode byte 0xa2 in position 17: invalid start byte
                `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`Lo primero que debes hacer es ir a `}
  <ArrowForwardIcon/>
  {` envpy/Lib/site-packages/reflex/utils/processes.py, linea 223, en la funcion stream_logs`}
  {` borrar la funcion y reemplazarla por este script :`}
</RadixThemesText>
  <RadixThemesBox css={{"background": "#161b22", "color": "#eeeeee", "borderRadius": "20px", "margin": "5px", "padding": "10px", "borderColor": "#ffffff", "borderWidth": "2px", "marginTop": "10px", "marginBottom": "10px"}}>
  <Copyicon_ea8b93ab6d343a9e136758d07020e086/>
  <ReactMarkdown rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm, remarkUnwrapImages]} components={ComponentMap_68150fc6794520f9985a2018fb9322fe()}>
  {`
\`\`\`python
import sys
def stream_logs(message, process):
    try:
    for line in process.stdout:
        decoded_line = line.decode('utf-8', errors='replace')
        sys.stdout.write(decoded_line)
        sys.stdout.flush()
    except UnicodeDecodeError as e:
        print(f"Error decoding line: {e}")
    except Exception as ex:
        print(f"Error streaming logs: {ex}")
    return iter([])
`}
</ReactMarkdown>
</RadixThemesBox>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
                Despues ejecuta "reflex init", se inicializara el proyecto. NOTA: este solo es durante la creacion del proyecto.
                Y para compilar y desplegar dejan la funcion original con el atajo de teclado "ctrl + z".
                `}
</RadixThemesText>
</RadixThemesBox>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesBox>
  <RadixThemesHeading as={`h3`} css={{"color": "#b9ccf2", "paddingTop": "25px"}} size={`6`}>
  {`Las herramientas que yo uso`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"color": "#29e1c9", "paddingTop": "18px"}} size={`4`}>
  {`IDE`}
</RadixThemesHeading>
  <img css={{"paddingTop": "10px", "paddingBottom": "10px", "width": "560px"}} src={`/blgvsc.jpg`}/>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
                Visual Studio Code, 
                es un editor de codigo, 
                donde te ayuda a escribir codigo mas rapido, 
                dentro del editor puedes instalar varias extenciones, 
                de las cuales uso ls siguientes: Error Lens, 
                indent-rainbow, indenticator, Jupyter, Material Icon Theme, 
                One Dark Pro, Palenight Theme, Prettier - Code formatter, 
                Pylance, Python, Python Debugger, Rainbow CSV, 
                Subtle Match Brackets, Thunder Client, Live Preview.
                `}
</RadixThemesText>
  <RadixThemesHeading as={`h3`} css={{"color": "#29e1c9", "paddingTop": "18px"}} size={`4`}>
  {`Herramientas`}
</RadixThemesHeading>
  <img css={{"paddingTop": "10px", "paddingBottom": "10px", "width": "560px"}} src={`/pwtoys.jpg`}/>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
                Power Toys es una herramienta, 
                donde tiene varias aplicaciones, 
                el uso mas comun que yo hago es obtener el RGB O HEX del color de forma rapida, 
                esta herramienta incluye Always On Top, PowerToys Awake, Selector de colores,
                No se encontró el comando, Recortar y bloquear, Variables de entorno, FancyZones, 
                Complementos de File Explorer, File Locksmith, Editor del archivo "Hosts", 
                Cambio de tamaño de imágenes, Administrador de teclado, Administrador de teclado, 
                Utilidades del mouse, Mouse sin límites, Pegar como texto sin formato, Ojear, 
                PowerRename, PowerToys Run, Acento rápido, Vista previa del Registro, Regla en pantalla, 
                Guía de métodos abreviados de teclado, Extractor de texto, Silencio de videoconferencia.
                `}
</RadixThemesText>
  <RadixThemesHeading as={`h3`} css={{"color": "#f2f1b9", "paddingTop": "25px"}} size={`6`}>
  {`Solucion a`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"color": "#cbd428", "paddingTop": "18px"}} size={`4`}>
  {`Reflex`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"background": "#161b22", "color": "#eeeeee", "borderRadius": "20px", "margin": "5px", "padding": "10px", "borderColor": "#ffffff", "borderWidth": "2px", "marginTop": "10px", "marginBottom": "10px"}}>
  {`
                File "<frozen codecs>", line 322, in decode
                UnicodeDecodeError: 'utf-8' codec can't decode byte 0xa2 in position 17: invalid start byte
                `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`Lo primero que debes hacer es ir a `}
  <ArrowForwardIcon/>
  {` envpy/Lib/site-packages/reflex/utils/processes.py, linea 223, en la funcion stream_logs`}
  {` borrar la funcion y reemplazarla por este script :`}
</RadixThemesText>
  <RadixThemesBox css={{"paddingTop": "10px", "paddingBottom": "10px"}}>
  <Button_2a4c4e5759cc40a003ce219e020d3b7a/>
</RadixThemesBox>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
            Despues ejecuta "reflex init", se inicializara el proyecto. NOTA: este solo es durante la creacion del proyecto.
            Y para compilar y desplegar dejan la funcion original con el atajo de teclado "ctrl + z".
            `}
</RadixThemesText>
</RadixThemesBox>
</Box>
  <RadixThemesBox css={{"marginTop": "2em", "marginBottom": "2em"}}>
  <RadixThemesHeading as={`h3`} css={{"color": "#a0e69c"}} size={`6`}>
  {`Mis hobbies`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"sixe": "4", "color": "#9ce6df", "paddingTop": "18px", "paddingBottom": "18px"}}>
  {`La aviacion`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "justify"}}>
  {`
                La aviacion sigue siendo uno de mis hobiies principales,
                para ello uso 3 simuladores dependiendo del avion que quiera volar, 
                aeropuertos, entre otras cosas especificas de cada simulador, uso  `}
  <ArrowForwardIcon/>
  {`  X-PLANE 11, PREPAR3D V4, MICROSOFT FLIGHT SIMULATOR X STEAM EDITION.`}
</RadixThemesText>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <RadixThemesFlex align={`start`} css={{"marginTop": "10px", "marginBottom": "10px"}} direction={`row`} gap={`2`}>
  <img css={{"height": "90px"}} src={`/xplane-11.jpg`}/>
  <img css={{"height": "90px"}} src={`/fsx.jpg`}/>
  <img css={{"height": "90px"}} src={`/p3d.webp`}/>
</RadixThemesFlex>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} css={{"marginTop": "10px", "marginBottom": "10px"}} direction={`column`} gap={`2`}>
  <img css={{"width": "500px"}} src={`/xplane-11.jpg`}/>
  <img css={{"width": "500px"}} src={`/fsx.jpg`}/>
  <img css={{"width": "500px"}} src={`/p3d.webp`}/>
</RadixThemesFlex>
</RadixThemesFlex>
</Box>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "textAlign": "center"}}>
  {`+5 Años en simulacion de vuelo.`}
</RadixThemesText>
  <RadixThemesHeading as={`h3`} css={{"sixe": "4", "color": "#9ce6df", "paddingTop": "18px", "paddingBottom": "18px"}}>
  {`Aviones preferidos`}
</RadixThemesHeading>
  <RadixThemesBox>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <RadixThemesHeading as={`h3`} css={{"color": "#d4ac6c", "paddingTop": "10px", "paddingBottom": "10px"}} size={`3`}>
  {`Lockheed Constellation L049`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"height": "127px"}} src={`/ckconstellation.jpg`}/>
  <img css={{"height": "127px"}} src={`/outconstellation.jpg`}/>
</RadixThemesFlex>
  <RadixThemesHeading as={`h3`} css={{"color": "#d4ac6c", "paddingTop": "10px", "paddingBottom": "10px"}} size={`3`}>
  {`Concorde`}
</RadixThemesHeading>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"height": "134px"}} src={`/ckconcorde.webp`}/>
  <img css={{"height": "134px"}} src={`/outconcorde.webp`}/>
</RadixThemesFlex>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesHeading as={`h3`} css={{"color": "#d4ac6c", "paddingTop": "10px", "paddingBottom": "10px"}} size={`3`}>
  {`Lockheed Constellation L049`}
</RadixThemesHeading>
  <img src={`/ckconstellation.jpg`}/>
  <img src={`/outconstellation.jpg`}/>
  <RadixThemesHeading as={`h3`} css={{"color": "#d4ac6c", "paddingTop": "10px", "paddingBottom": "10px"}} size={`3`}>
  {`Concorde`}
</RadixThemesHeading>
  <img src={`/ckconcorde.webp`}/>
  <img src={`/outconcorde.webp`}/>
</Box>
</RadixThemesBox>
  <RadixThemesHeading as={`h3`} css={{"sixe": "4", "color": "#9ce6df", "paddingTop": "18px", "paddingBottom": "18px"}}>
  {`El ilusionismo`}
</RadixThemesHeading>
  <RadixThemesHeading as={`h3`} css={{"color": "#cbcbcb"}}>
  {`Cartomagia Lentidigitación`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} css={{"color": "#ffffff", "paddingTop": "10px", "paddingBottom": "10px", "textAlign": "justify"}}>
  {`
                El ilusionismo es mi segundo hobbie, 
                donde yo me represento con esta area del ilusionismo que es la lentidigitacion, 
                el autor y creador de esta area fue el mago argentino de una sola mano Hector Rene Lavandera, 
                de los juegos que el hizo y yo tambien hago son: "No se puede hacer mas lento", "El soneto", 
                "La carta ambiciosa", "Mi juego credencial", "As, dos, tres, cuatro", "Adivinando".
                `}
</RadixThemesText>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <img css={{"width": "400px"}} src={`/rene.jpg`}/>
  <ReactPlayer controls={true} url={`https://youtu.be/ZEwyIDL0YfM?si=hj77iYhR5rmGRnaG`} width={`100%`}/>
</RadixThemesFlex>
</RadixThemesFlex>
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
