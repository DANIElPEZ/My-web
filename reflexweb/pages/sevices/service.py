import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.pagemain.c4footer import footer
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.sevices.styles as mst
import reflexweb.rxpage as rxd

st=st.styles_general()
mst=mst.btn()
rxd=rxd.rxpg()

def downloadbtn(url:str):
    return rx.chakra.button(
        'Descargar',
        style=mst.Btn,
        color='#ffffff',
        margin_y='0.8em',
        _hover=mst.hover,
        on_click=rx.download(url=url)
    )

def mobile():
    return rx.box(
                        rx.box(
                            rx.hstack(
                                rx.image(
                                    src='/mt1.jpeg',
                                    height='155px'
                                ),
                                rx.image(
                                    src='/mt2.jpeg',
                                    height='155px'
                                )
                            ),
                            downloadbtn('/programas/linearalgebra.zip'),
                            margin_left='10px',
                            width='40%'
                        ),
                        rx.box(
                            rx.hstack(
                                rx.image(
                                    src='/v1.jpeg',
                                    height='215px'
                                ),
                                rx.image(
                                    src='/v2.jpeg',
                                    height='215px'
                                ),
                                width='40%'
                            ),
                            rx.image(
                                src='/mt3.jpeg',
                                width='287px',
                                margin_top='10px'
                            ),
                            downloadbtn('/programas/vectores.zip'),
                            margin_left='10px',
                            padding_top='10px'
                        ),
                        style=mst.pjd
                    )

def desktop():
    return rx.box(
                        rx.box(
                            rx.hstack(
                                rx.image(
                                    src='/mt1.jpeg',
                                ),
                                rx.image(
                                    src='/mt2.jpeg',
                                    height='230px'
                                )
                            ),
                            downloadbtn('/programas/linearalgebra.zip'),
                            margin_left='10px',
                            width='40%'
                        ),
                        rx.box(
                            rx.hstack(
                                rx.image(
                                    src='/v1.jpeg',
                                ),
                                rx.image(
                                    src='/v2.jpeg',
                                    height='330px'
                                ),
                                width='40%'
                            ),
                            rx.image(
                                src='/mt3.jpeg',
                                width='447px',
                                margin_top='10px'
                            ),
                            downloadbtn('/programas/vectores.zip'),
                            margin_left='10px'
                        ),
                        style=mst.pjd
                    )

@rx.page(
        route='/services/desktop',
        title=rxd.title,
        description=rxd.description,
        image=rxd.img,
        meta=rxd.meta
        )
def service_examples():
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                    st.headingstyles("Proyectos principales",'7'),
                    st.headingstyles('Algebra lineal','4'),
                    rx.desktop_only(
                        desktop()
                    ),
                    rx.mobile_and_tablet(
                        mobile()
                    ),
                    rx.box(
                        st.headingstyles("Otros proyectos",'7'),
                        st.headingstyles("Espiral de Ulam","4"),
                        downloadbtn('/programas/ulamspiral.zip'),
                        st.headingstyles('Juego Pong','4'),
                        downloadbtn('/programas/pong.zip'),
                        st.headingstyles('Juego piedra, papel o tijera','4'),
                        downloadbtn('/programas/rockpaperscissor.zip')
                    ),
                    max_width=st.max_width,
                    margin_top='5em'
            )
        ),
        footer()
    )