import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.pagemain.c4footer import footer
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.linalg.styles as mst
import reflexweb.rxpage as rxd
import reflexweb.pages.pagemain.colors as cl

st=st.styles_general()
mst=mst.mtstyles()
rxd=rxd.rxpg()
cl=cl.colors()

class poner(rx.State):
   #entradas
   a=''
   b=''
   c=''
   d=''
   e=''
   f=''
   g=''
   h=''
   i=''
   j=''
   k=''
   l=''
   #resultados x, y, z
   v1=''
   v2=''
   v3=''
   def showasw(self):
        try:
            self.matriz=[[0,0,0,0],[0,0,0,0],[0,0,0,0]]

            self.matriz[0][0]=int(self.a)
            self.matriz[1][0]=int(self.b)
            self.matriz[2][0]=int(self.c)
            self.matriz[0][1]=int(self.d)
            self.matriz[1][1]=int(self.e)
            self.matriz[2][1]=int(self.f)
            self.matriz[0][2]=int(self.g)
            self.matriz[1][2]=int(self.h)
            self.matriz[2][2]=int(self.i)
            self.matriz[0][3]=int(self.j)
            self.matriz[1][3]=int(self.k)
            self.matriz[2][3]=int(self.l)

            #calculo de valores
            vf1=self.matriz[0][0]
            vf2=self.matriz[1][0]
            vf3=self.matriz[2][0]
            for i in range(4):
                self.matriz[1][i]=self.matriz[1][i]*vf1-self.matriz[0][i]*vf2
                self.matriz[2][i]=self.matriz[2][i]*vf1-self.matriz[0][i]*vf3
            vf2=self.matriz[1][1]
            vf3=self.matriz[2][1]
            for i in range(4):
                self.matriz[2][i]=self.matriz[2][i]*vf2-self.matriz[1][i]*vf3
            vf1=self.matriz[0][2]
            vf2=self.matriz[1][2]
            vf3=self.matriz[2][2]
            for i in range(4):
                self.matriz[1][i]=self.matriz[1][i]*vf3-self.matriz[2][i]*vf2
                self.matriz[0][i]=self.matriz[0][i]*vf3-self.matriz[2][i]*vf1
            vf1=self.matriz[0][1]
            vf2=self.matriz[1][1]
            for i in range(4):
                self.matriz[0][i]=self.matriz[0][i]*vf2-self.matriz[1][i]*vf1
            vf1=self.matriz[0][0]
            vf2=self.matriz[1][1]
            vf3=self.matriz[2][2]
            for i in range(4):
                self.matriz[0][i]=self.matriz[0][i]/vf1
                self.matriz[1][i]=self.matriz[1][i]/vf2
                self.matriz[2][i]=self.matriz[2][i]/vf3

            self.v1="{:.2f}".format(self.matriz[0][3])
            self.v2="{:.2f}".format(self.matriz[1][3])
            self.v3="{:.2f}".format(self.matriz[2][3])
        except:
            pass

def input():
    return rx.chakra.vstack(
        rx.chakra.hstack(
            rx.chakra.input(
                on_blur=poner.set_a,
                style=mst.input_number,
                placeholder='X'
            ),
            rx.chakra.input(
                on_blur=poner.set_d,
                style=mst.input_number,
                placeholder='Y'
            ),
            rx.chakra.input(
                on_blur=poner.set_g,
                style=mst.input_number,
                placeholder='Z'
            ),
            rx.chakra.input(
                on_blur=poner.set_j,
                style=mst.input_number,
                placeholder='-'
            )
        ),
        rx.chakra.hstack(
            rx.chakra.input(
                on_blur=poner.set_b,
                style=mst.input_number,
                placeholder='X'
            ),
            rx.chakra.input(
                on_blur=poner.set_e,
                style=mst.input_number,
                placeholder='Y'
            ),
            rx.chakra.input(
                on_blur=poner.set_h,
                style=mst.input_number,
                placeholder='Z'
            ),
            rx.chakra.input(
                on_blur=poner.set_k,
                style=mst.input_number,
                placeholder='-'
            )
        ),
        rx.chakra.hstack(
            rx.chakra.input(
                on_blur=poner.set_c,
                style=mst.input_number,
                placeholder='X'
            ),
            rx.chakra.input(
                on_blur=poner.set_f,
                style=mst.input_number,
                placeholder='Y'
            ),
            rx.chakra.input(
                on_blur=poner.set_i,
                style=mst.input_number,
                placeholder='Z'
            ),
            rx.chakra.input(
                on_blur=poner.set_l,
                style=mst.input_number,
                placeholder='-'
            )
        )
    )

def showdesktop():
    return rx.desktop_only(
                    rx.chakra.hstack(
                        rx.flex(
                            rx.chakra.text("X= "+poner.v1,style=mst.asw),
                            rx.spacer(),
                            rx.chakra.text("Y= "+poner.v2,style=mst.asw),
                            rx.spacer(),
                            rx.chakra.text("Z= "+poner.v3,style=mst.asw),
                            width='90%'
                        ),
                        padding_top=st.size['medium_big']
                    ),
                    width='100%'
                )

def showmb():
    return rx.mobile_and_tablet(
                        rx.chakra.vstack(
                            rx.chakra.text("X= "+poner.v1,style=mst.asw),
                            rx.spacer(),
                            rx.chakra.text("Y= "+poner.v2,style=mst.asw),
                            rx.spacer(),
                            rx.chakra.text("Z= "+poner.v3,style=mst.asw)
                        )
                )

@rx.page(
        route='/matriz',
        title=rxd.title,
        description=rxd.description,
        meta=rxd.meta
        )
def matriz3x3():
    return rx.box(
        navbar(),
        rx.chakra.center(
            rx.chakra.vstack(
                rx.heading('Mi primer proyecto',style=mst.styleshd),
                input(),
                showdesktop(),
                showmb(),
                rx.chakra.button(
                    'Calcular',
                    on_click=poner.showasw,
                    style=mst.btn
                ),
                rx.chakra.text(
                    '''Les presento mi primer proyecto, 
                    es una calculadora de resolucion de matrices 3x3 por metodo de GAUSS JORDAN,
                    este proyecto fue creado como un hobbie. Este metodo fue revolucionario
                    para resolver cualquier tipo de sistema de ecuaciones lineales, en 2, 3, o mas dimensiones.
                    Uno de los usos mas notorios en la computacion es en el desarrollo de videojuegos,
                    animaciones 3D, entrenamiento de modelos de inteligencia artificial.
                    El creador de este metodo fue el matematico y astronomo CARL FRIEDRICH GAUSS.
                    ''',
                    rx.center(
                        rx.image(
                            style=mst.img,
                            src='/gauss.webp'
                        )
                    ),
                    style=mst.text
                ),
                max_width=st.max_width,
                width="100%",
                margin_y=st.size['big'],
                padding='5.5em'
            )
        ),
        footer(),
    )