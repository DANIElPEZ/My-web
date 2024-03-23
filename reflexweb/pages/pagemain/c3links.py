import reflex as rx
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.pagemain.colors as cl

st=st.styles_general()
cl=cl.colors()

def buttons_links(text1:str,text2:str,url:str,icono:str,goout:bool,hover:str):
    return rx.link(
                rx.chakra.button(
                    rx.chakra.hstack(
                        st.buttonlink(icono),
                        rx.chakra.vstack(
                            rx.text(
                                text1,
                                style=st.bt_tittle
                            ),
                            rx.text(
                                text2,
                                style=st.bt_body
                            ),
                            align_items="start"
                        )
                    ),
                    style=st.button,
                    _hover={
                        "background_color":hover
                        },
                ),
                href=url,
                is_external=goout,
                style=st.blink
            )

def links():
    return rx.vstack(
        st.headingstyles("Enlaces de interes",'7','h2'),
        st.headingstyles("Lenguaje","4",'h3'),
        buttons_links(
            "Python",
            "Pagina oficial de python",
            "https://www.python.org/",
            "/Python.png",
            True,
            cl.colorsg['secondary']
                    ),
        st.headingstyles('Redes sociales','4','h3'),
        buttons_links(
            "Instagram",
            "Mi perfil de instagram",
            "https://www.instagram.com/dani.g.dev?igsh=cnhlZTRqMnVwZzZp",
            "/Instagram.png",
            True,
            cl.colorsg['secondary']
                    ),
        buttons_links(
            "Facebook",
            "Mi perfil de facebook",
            "https://www.facebook.com/danielsantiagoangel.gonzalezubaque?mibextid=ZbWKwL",
            "/Facebook.png",
            True,
            cl.colorsg['secondary']
                    ),
        st.headingstyles('Software','4','h3'),
        buttons_links(
            "Programas",
            "Software libre",
            "https://github.com/DANIElPEZ/DaniDev-software.git",
            "/Github.png",
            True,
            cl.colorsg['secondary']
                    ),
        st.headingstyles('Mi ruta','4','h3'),
        buttons_links(
            "Recursos para estudiar",
            "Lo que yo se",
            '/myroute',
            "/route.png",
            False,
            cl.colorsg['secondary']
                    ),
        st.headingstyles('Otros enlaces','4','h3'),
        buttons_links(
            "Herramientas",
            "Paginas externas",
            '/tools',
            "/Sql.png",
            False,
            cl.colorsg['secondary']
                    ),
        style=st.links_section
    )