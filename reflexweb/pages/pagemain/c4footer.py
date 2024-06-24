import reflex as rx
import datetime as dt
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.pagemain.colors as cl

cl=cl.colors()
st=st.styles_general()

def cvpresentations(icon,txt,url):
    return rx.chakra.link(
        rx.chakra.hstack(
           rx.chakra.avatar(
                src=icon,
                style=st.iconstylef,
            ),
            rx.text(
                txt,
                color='#ffffff',
                _hover={
                    'cursor':st.pointer
                },
            ),
            height=st.size['big']
        ),    
        is_external=True,
        style=st.flink,
        href=url,
        margin_top=st.size['zero'],
        )
    

def ptleft(icon):
    return rx.vstack(
                    rx.heading(
                        'CANVA PRESENTATIONS',
                        as_='h2',
                        size='3',
                        color='#ffffff'
                    ),
                    cvpresentations(
                        icon,
                        'ULAM SPIRAL',
                        "https://www.canva.com/design/DAF2s4Ivg0g/v1-kGHCIL1-_Hfw01nyE6Q/edit?utm_content=DAF2s4Ivg0g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    ),
                    cvpresentations(
                        icon,
                        'PYTHON COURSE',
                        "https://www.canva.com/design/DAF6rBYsLno/3FKOHOTFTvGTRsw53evWPA/edit?utm_content=DAF6rBYsLno&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                    ),
                    align_items='start',
                    padding_top=st.size['big']
            )

def ptcenter():
    return rx.chakra.vstack(
                    rx.link(
                        rx.chakra.image(
                            src="/rx.png",
                            width='100%',
                            border_radius='50%',
                            padding='2px',
                            border='2px',
                            border_color=cl.colorsg['withe'],
                            margin='auto',
                            _hover={
                                'cursor':st.pointer,
                                'border_color':cl.colorsg['txtnv2']
                            }
                        ),
                        href='https://github.com/DANIElPEZ/My-web',
                        is_external=True,
                        width='10%'
                    ),
                    rx.text(
                        "💻 PYTHON DEVELOPER 💻",
                        font_size=st.size['medium'],
                        color='#ffffff'
                    ),
                    rx.text(
                        f"Years active from beautiful colombia 👍 2023 - {dt.date.today().year}",
                        font_size=st.size['medium'],
                        margin_top=st.size['zero'],
                        color='#ffffff'
                    ),
                    rx.link(
                        rx.text(
                            'creditos',
                            color='#aaaaaa',
                            _hover={
                                'cursor':st.pointer
                            }
                        ),
                        href="/credits",
                        _hover={}
                    ),
                    width='300px',
                    padding_top=st.size['big']
                )

def ptright():
    return rx.vstack(
                    rx.heading(
                        'Contacto',
                        as_='h2',
                        size="6",
                        color='#ffffff'
                    ),
                    rx.text(
                        'Telefono: +57 318 7039648',
                        font_size=st.size['normal'],
                        on_click=[rx.set_clipboard('3187039648'),
                                  rx.window_alert('Numero de telefono copiado')
                                  ],
                        style={
                            'color':'#ffffff',
                            '_hover':{
                                "cursor": st.pointer,
                                'border_width':'0 0 1px 0',
                                'border_color':'#ffffff'
                            }
                        }
                    ),
                    rx.text(
                        'Email: daniel.gonzalezubaque@gmail.com',
                        font_size=st.size['normal'],
                        on_click=[rx.set_clipboard('daniel.gonzalezubaque@gmail.com'),
                                  rx.window_alert('Email copiado')
                                  ],
                        style={
                            'color':'#ffffff',
                            '_hover':{
                                "cursor": st.pointer,
                                'border_width':'0 0 1px 0',
                                'border_color':'#ffffff'
                            }
                        }
                    ),
                    align_items='start',
                    padding_top=st.size['big']
                )

def show_desktop():
    return rx.desktop_only(
                rx.vstack(
                    rx.flex(
                        ptleft('/arrow.png'),
                        rx.spacer(),
                        ptcenter(),
                        rx.spacer(),
                        ptright(),
                        style=st.footer
                    ),
                ),
                width='95%'
            )

def show_mobile():
    return rx.mobile_and_tablet(
                rx.vstack(
                    ptcenter(),
                    ptleft('/arrow.png'),
                    ptright(),
                    rx.link(
                        rx.text(
                            'creditos',
                            color='#aaaaaa',
                            _hover={
                                'cursor':st.pointer
                            }
                        ),
                        href="/credits",
                        _hover={}
                    ),
                    padding_x='10px',
                    color=cl.colors_text['footer'],
                )    
            )

def footer():
    return rx.center(
                show_desktop(),
                show_mobile(),
                padding_bottom='90px',
                width='100%',
                height='100%'
            )