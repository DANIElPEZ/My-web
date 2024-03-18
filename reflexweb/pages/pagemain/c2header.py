import reflex as rx
import reflexweb.pages.pagemain.styles as st
import datetime as dt
import reflexweb.pages.pagemain.colors as cl
import reflexweb.pages.pagemain.fonts as ft

cl=cl.colors()
st=st.styles_general()
ft=ft.font()

def headerpt1():
    return rx.hstack(
                    rx.chakra.avatar(
                        size="xl",
                        src='/DVC.png',
                        bg=cl.colorsg['content'],
                        border='4px',
                        border_color=cl.colorsg['navbar']
                    ),
                    rx.vstack(
                        rx.heading(
                            'DANI',
                             size='7',
                             color=cl.colors_text['header'],
                             font_family=ft.ft_page['tittle']
                        ),
                        rx.heading(
                            "@Danidev",
                            size='3',
                            padding_top='0px !important',
                            color=cl.colors_text['body']
                        ),
                        width='100%',
                        align_items='start'
                    ),
                    spacing='4'
            )

def headerpt2():
    return rx.flex(
                    st.idev(
                        f'+{dt.date.today().year-2023} ',
                        'Años en crear aplicaciones'
                    ),
                    rx.spacer(),
                    st.idev(
                        '+6 ',
                        'proyectos realizados'
                    ),
                    width='100%'
                )

def headerpt3():
    return rx.text(
                'Bienvenidos mi nombre es DANIEL SANTIAGO ANGEL GONZALEZ UBAQUE y soy estudiante de esta excelente carrera ',
                rx.chakra.icon(tag="arrow_forward"),
                ' Ingenieria informatica. Ser un excelente programador en el lenguaje de programacion Python.',
                 color=cl.colors_text['body'],
                 font_size=st.size['medium']
            )

def headerpt4():
    return rx.vstack(
        rx.heading(
            'Mis Servicios',
            size='3',
            padding_top='0px !important',
            color="#e7ecf1"
        ),
        rx.hstack(
            rx.link(
                rx.chakra.button("Desktop Apps",
                    bg='#265148',
                    color='#ffffff',
                    _hover={
                        'bg':'#377769'
                    }
                ),
                href='/services/desktop'
            )
        )
    )

def header():
    return rx.vstack(
                headerpt1(),
                headerpt2(),
                headerpt3(),
                headerpt4(),
                style=st.header
        )