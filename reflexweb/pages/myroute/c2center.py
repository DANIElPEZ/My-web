import reflex as rx
import reflexweb.pages.pagemain.styles as st
from reflexweb.pages.pagemain.c3links import buttons_links

st=st.styles_general()

def center():
    return rx.vstack(
        st.headingstyles("Mi ruta",'7','h2'),
        st.headingstyles("Logica de programacion","4",'h3'),
        buttons_links(
            "Logica",
            "La Geekipedia De Ernesto",
            "https://youtube.com/playlist?list=PLyvsggKtwbLVva0XXvoqx91iaLmhgeNy7&si=c-ldSZL7-fMCCj7S",
            "/raptor.png",
            True,
            "#535353"
        ),
        st.headingstyles("Python","4",'h3'),
        buttons_links(
            "Programacion basica",
            "La Geekipedia De Ernesto",
            "https://youtube.com/playlist?list=PLyvsggKtwbLW1j0d5yaCkRF9Axpdlhsxz&si=M5M5K-rdnnfGFoil",
            "/Python.png",
            True,
            "#0C2D57"
        ),
        buttons_links(
            "Programacion orientada a objetos",
            "Soy Dalto",
            "https://youtu.be/HtKqSJX7VoM?si=5PuNd_mnOlZ0ZCjb",
            "/Python.png",
            True,
            "#0C2D57"
        ),
        st.headingstyles("Desktop apps","4",'h3'),
        buttons_links(
            "Interfaz grafica tkinter",
            "Pildoras informaticas + ChatGPT",
            "https://youtube.com/playlist?list=PLU8oAlHdN5BlvPxziopYZRd55pdqFwkeS&si=56SoTRuXUDsUfpjm",
            "/tk.png",
            True,
            "#365486"
        ),
        buttons_links(
            "Interfaz grafica PyQt6",
            "Jesús Conde + ChatGPT",
            "https://youtube.com/playlist?list=PLEtcGQaT56cj81xiNCrJnoAjc66uZVXDa&si=dIgEuI88krhC-vjN",
            "/qt.png",
            True,
            "#4d9b2b"
        ),
        st.headingstyles("Web frontend","4",'h3'),
        buttons_links(
            "Reflex framework",
            "MoureDev by Brais Moure",
            "https://youtu.be/n2YrGsXJC6Y?si=zGhxNlyym6vWWg-T",
            "/reflex.png",
            True,
            "#474F7A"
        ),
        st.headingstyles("Base de datos","4",'h3'),
        buttons_links(
            "MySQL",
            "yacklyon",
            "https://youtube.com/playlist?list=PLg9145ptuAihPxpM3YfQJYwPHv-Vnh_bV&si=6X3v0NsUKKavo54v",
            "/mysql.png",
            True,
            "#053B50"
        ),
        buttons_links(
            "SQLite",
            "Soy Dalto",
            "https://youtu.be/DFg1V-rO6Pg?si=A1H-BkuislScjtQz",
            "/sqlite.png",
            True,
            "#3A98B9"
        ),
        st.headingstyles("Enlace para aprender","4",'h3'),
        buttons_links(
            "W3schools",
            "Varias tecnologias",
            "https://www.w3schools.com/",
            "/w3s.png",
            True,
            "#186F65"
        ),
        style=st.links_section
    )