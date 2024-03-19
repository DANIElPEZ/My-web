import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.myroute.c1header import header
from reflexweb.pages.pagemain.c4footer import footer
from reflexweb.pages.myroute.c2center import center
import reflexweb.pages.pagemain.styles as st
import reflexweb.rxpage as rxd

st=st.styles_general()
rxd=rxd.rxpg()

@rx.page(
        route='/myroute',
        title=rxd.title,
        description=rxd.description,
        image=rxd.img,
        meta=rxd.meta
    )
def myroute():
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                center(),
                max_width=st.max_width,
                width="100%",
                margin_y=st.size['big'],
                padding=st.size['big']
            )
        ),
        footer(),
    )