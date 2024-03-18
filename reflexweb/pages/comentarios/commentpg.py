import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.pagemain.c4footer import footer
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.comentarios.styles as mst
import reflexweb.rxpage as rxd
import reflexweb.reflexweb as op
import re

st=st.styles_general()
mst=mst.cm()
rxd=rxd.rxpg()

class State(rx.State):
    #texto de alerta y colores
    wmsgnm=['Ponga su nombre','Solo se admite letras','']
    wmsgcm=['ponga su comentario','Solo se admite letras y numeros','']
    wmsgcolors=['#f8d7da','#fff3cd']

    poswmsgnm=2
    poswmsgcm=2
    cm: list[tuple[str, str]]
    comsend=''
    name=''

    async def cargar(self):
        self.cm=[]
        asw=await op.buscar()
        for msgdb in asw:
            self.cm.append((msgdb['nombre'],msgdb['texto']))

    async def añadir(self):
        #validacion
        v=0
        r=0
        #añadir validacion de expresion regular
        if self.name == '':
            v+=1
            self.poswmsgnm=0
        else:
            self.poswmsgnm=2

        if self.comsend=='':
            v+=1
            self.poswmsgcm=0
        else:
            self.poswmsgcm=2

        if v==0:

            if not bool(re.match(r'^[a-zA-Z\s]+$',self.name)):
                r+=1
                self.poswmsgnm=1
            else:
                self.poswmsgnm=2

            if not bool(re.match(r'^[a-zA-Z0-9\s,.!?:()¿¡&$@#%^*+=]+$',self.comsend)):
                r+=1
                self.poswmsgcm=1
            else:
                self.poswmsgcm=2

            if r==0:
                await op.insert(self.name,self.comsend)
                self.comsend=''
                self.name=''

def commentp(nombre,texto):
    return rx.chakra.vstack(
        rx.text(nombre,
                style=mst.name
        ),
        rx.text(texto,
                width='230px',
                style=mst.comentary
        ),
        
    )

def setcomment():
    return rx.box(
        rx.foreach(
            State.cm,
            lambda msg: commentp(msg[0],msg[1])
        )
    )

def commentinput():
    return rx.chakra.vstack(
        rx.chakra.input(
            on_change=State.set_name,
            value=State.name,
            placeholder='Escribe tu nombre',
            width='140%',
            style=mst.yourname
        ),
        rx.text(State.wmsgnm[State.poswmsgnm],
                color=State.wmsgcolors[State.poswmsgnm]
        ),
        rx.chakra.text_area(
            width='150%',
            height='150px',
            placeholder='Escribe algo',
            value=State.comsend,
            on_change=State.set_comsend,
            style=mst.txtarea
        ),
        rx.text(State.wmsgcm[State.poswmsgcm],
                color=State.wmsgcolors[State.poswmsgcm]
                ),
        rx.chakra.button(
            'Enviar',
            width='70%',
            style=mst.button,
            on_click=State.añadir
        ),
        max_width=st.max_width
    )

@rx.page(
        route='/comments',
        title=rxd.title,
        description=rxd.description,
        meta=rxd.meta,
        on_load=State.cargar
        )
def comentpg():
    return rx.chakra.vstack(
        navbar(),
        rx.chakra.vstack(
            commentinput(),
            setcomment(),
            max_width=st.max_width,
            width="100%",
            heigh='100%',
            padding_top='5.5em'
        ),
        footer(),
        height='100%'
    )