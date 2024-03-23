import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.pagemain.c4footer import footer
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.juegoweb.styles as mst
import reflexweb.rxpage as rxd
import random as rd
import time as tm

st=st.styles_general()
mst=mst.mtstyles()
rxd=rxd.rxpg()

class paper_rock_sisor(rx.State):
    #cargado de imagen y etiquetas
    img=['/p.png','/pp.png','/ppp.png','/question.jpg']
    rta=['Piedra','Papel','Tijera','']
    #usado para cambiar texto e imagen del enemigo y puntaje
    pos=3
    #etiqueta dice gana jugador, gana maquina, empata
    question=['Gana Jugador','Gana Computador','Empate','']
    colorq=['#00ff00','#ff0000','#7fffd4']
    qpos=3
    #puntaje de judadores
    ptsplayer='0'
    ptsmachine='0'
    ptspc=0
    ptsplay=0
   
    #cambio de imagen durante el juego
    def juego(self,number:int):
        tm.sleep(0.2)
        self.pos=rd.choice([0,1,2])
        self.selt=self.rta[self.pos]

        #logica del juego
        if self.pos==number:
            self.qpos=2
        elif (self.pos==2 and number==0) or (number==1 and self.pos==0) or (number==2 and self.pos==1):
            self.ptsplay+=1
            self.qpos=0
        else:
            self.ptspc+=1
            self.qpos=1

        self.ptsmachine=str(self.ptspc)
        self.ptsplayer=str(self.ptsplay)

    #reiniciar juego
    def reboot(self):
        self.pos=3
        self.ptsplayer='0'
        self.ptsmachine='0'
        self.ptspc=0
        self.ptsplay=0
        self.qpos=3

def btn(txt:str,src:str,sel:int):
    return rx.chakra.vstack(
        rx.text(txt,
                style=mst.text_input_game),
            rx.chakra.image(
                src=src,
                style={
                    'border':'4px',
                    'border_radius':'20px',
                    'border_color':'#98c1fe',
                    '_hover':{
                        'border_color':'#2465c4',
                        'opacity':'0.85',
                        "cursor": "pointer"
                    }
                },
                on_click=lambda: paper_rock_sisor.juego(sel)
            ),
        )

def desktop():
    return rx.chakra.hstack(
                    btn("Piedra",'/p.png',0),
                    btn("Papel",'/pp.png',1),
                    btn("Tijera",'/ppp.png',2)
                )
    
def mobile():
    return rx.chakra.vstack(
                    btn("Piedra",'/p.png',0),
                    btn("Papel",'/pp.png',1),
                    btn("Tijera",'/ppp.png',2)
                )

@rx.page(route='/game',
        title=rxd.title,
        description=rxd.description,
        image=rxd.img,
        meta=rxd.meta
)
def juego():
    return rx.box(
        navbar(),
        rx.center(
            rx.chakra.vstack(
                rx.heading("Piedra, Papel o Tijera",style=mst.styleshd,as_='h2'),
                rx.chakra.vstack(
                    rx.text('Computadora',
                            style=mst.text_game,
                            color='#97d603'
                            ),
                    rx.text(paper_rock_sisor.rta[paper_rock_sisor.pos],
                            style={
                                'font_size':'20px',
                                'font_weight':'700',
                                'color':'#00b1ff'
                            }
                    ),
                    rx.chakra.image(
                        src=paper_rock_sisor.img[paper_rock_sisor.pos],
                        style=mst.input_game
                    )
                ),
                rx.text('Jugador',
                        style=mst.text_game,
                        color='#e79e03'
                        ),
                rx.desktop_only(
                    desktop()
                ),
                rx.mobile_and_tablet(
                    mobile()
                ),
                rx.text(paper_rock_sisor.question[paper_rock_sisor.qpos],
                        style={
                            'font_size':'22px',
                            'font_weight':'900',
                        },
                        color=paper_rock_sisor.colorq[paper_rock_sisor.qpos]
                ),
                rx.text('Puntaje Jugador: '+paper_rock_sisor.ptsplayer,
                        style=mst.text_points
                ),
                rx.text('Puntaje IA: '+paper_rock_sisor.ptsmachine,
                        style=mst.text_points
                ),
                rx.chakra.button(
                    'Reiniciar',
                    on_click=paper_rock_sisor.reboot,
                    style={
                        'bg':'#66a916',
                        'width':'170px',
                        'font_size':'23px',
                        'top':st.size['normal'],
                        'text_color':'#ffffff',
                        '_hover':{
                            'bg':'#639112'
                        }
                    }
                ),
                max_width='700px',
                width="100%",
                margin_y=st.size['big'],
                padding='5.5em'
            )
        ),
        footer()
    )