import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.pagemain.c2header import header
from reflexweb.pages.pagemain.c3links import links
from reflexweb.pages.pagemain.c4footer import footer
import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.pagemain.fonts as ft
from reflexweb.pages.linalg.dpage import matriz3x3
from reflexweb.pages.toolpage.toolpg import toolpg
from reflexweb.pages.myroute.myroute import myroute
from reflexweb.pages.juegoweb.jugar import juego
from reflexweb.pages.comentarios.commentpg import comentpg
from reflexweb.pages.sevices.service import service_examples
from reflexweb.pages.blog.blog import blog
import reflexweb.rxpage as rxd
from pymongo import MongoClient

st=st.styles_general()
ft=ft.font()
rxd=rxd.rxpg()

queries=MongoClient('your mongo host').comentarios

@rx.page(
        route='/',
        title=rxd.title,
        image=rxd.img,
        description=rxd.description,
        meta=rxd.meta
        )
def index():
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width=st.max_width,
                width="100%",
                margin_y=st.size['big'],
                padding=st.size['big']
            )
        ),
        footer()
    )

async def insert(name:str,text:str):
    queries.people.insert_one({'nombre':name,'texto':text})
    return {'texto a insertar base de datos':text}

async def buscar():
    asw=queries.people.find()
    return asw

app = rx.App(
    style=st.stpage,
    stylesheets=[
        "/styles.css"
    ]
)
app.add_page(index)
app.api.add_api_route('/insertar/{text}',insert)
app.api.add_api_route('/buscar/{text}',buscar)