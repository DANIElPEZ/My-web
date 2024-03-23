import reflex as rx
import reflexweb.pages.toolpage.styles as st
import reflexweb.pages.pagemain.styles as stp

st=st.styles_mtpg()
stpg=stp.styles_general()

def header():
    return rx.vstack(
                rx.box(
                        rx.center(
                            rx.chakra.avatar(
                                src='/route.png',
                                size='xl',
                                padding='2px',
                                border='4px',
                                border_color='#ffffff'
                            )
                        ),
                        rx.heading(
                            "Mi ruta",
                            as_='h2',
                            style=st.styleshd
                        ),
                        rx.text(
                            'En esta pagina veras la ruta que he tomado con python, otras tecnologias y otros enlaces para aprender.',
                            style=st.texthd
                        ),

                ),
                max_width='100%',
                padding_top=stpg.size['extra_big']
            )