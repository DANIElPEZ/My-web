import reflex as rx
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.pagemain.colors as cl

cl=cl.colors()

st=st.styles_general()

class open(rx.State):
    sidebar=False

    def toglesidebar(self):
        self.sidebar=not self.sidebar

def navigation():
    return rx.box(
        rx.vstack(
            rx.flex(
                rx.hstack(
                    rx.chakra.icon(
                        tag="close",
                        on_click=open.toglesidebar,
                        margin=st.size['small'],
                        color='#ffffff'
                    )
                ),
                width='90%'
            ),
            rx.link(
                "Inicio",
                href='/',
                style=st.sidenav,
                on_click=open.toglesidebar
            ),
            rx.link(
                "Mi ruta",
                href='/myroute',
                style=st.sidenav,
                on_click=open.toglesidebar
            ),
            rx.link(
                "Otros enlaces",
                href='/tools',
                style=st.sidenav,
                on_click=open.toglesidebar
            ),
            rx.link(
                "Matriz 3x3",
                href='/matriz',
                style=st.sidenav,
                on_click=open.toglesidebar
            ),
            rx.link(
                "Piedra Papel o Tijera",
                href='/game',
                style=st.sidenav,
                on_click=open.toglesidebar
            ),
            rx.link(
                "Deja tu comentario",
                href='/comments',
                style=st.sidenav,
                on_click=open.toglesidebar
            )
        ),
        width='100%'
    )

def showpages():
    return rx.chakra.drawer(
                rx.chakra.drawer_overlay(),
                    rx.chakra.drawer_content(
                        navigation(),
                        style=st.sidebar,

                ),
                direction='right',
                is_open=open.sidebar
            )

rx.page(route='/')
def navbar():
    return rx.hstack(
                rx.flex(
                    rx.link(
                            rx.hstack(
                                rx.text('Dani',
                                    color=cl.colorsg['txtnv1']
                                ),
                                rx.text('Dev',
                                    color=cl.colorsg['txtnv2']
                                )
                            ),
                        style=st.navbartext,
                        href='/'
                    ),
                    rx.spacer(),
                        rx.chakra.icon(
                            tag="hamburger",
                            color=cl.colorsg['withe'],
                            width='30px',
                            height='30px',
                            on_click=open.toglesidebar
                        ),
                    width='100%'
                ),
                showpages(),
                style=st.navbarstyles
            )