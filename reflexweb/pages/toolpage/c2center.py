import reflex as rx
import reflexweb.pages.pagemain.styles as st
from reflexweb.pages.pagemain.c3links import buttons_links

st=st.styles_general()

def center():
    return rx.vstack(
        st.headingstyles("Enlaces de trabajo",'7','h2'),
        st.headingstyles("Inteligencia artificial","4",'h3'),
        buttons_links(
            "ChatGPT",
            "",
            "https://chat.openai.com/",
            "/Chatgpt.webp",
            True,
            "#728b55",
            'rgba(210,210,210,0.95)'
        ),
        st.headingstyles("Editor de código","4",'h3'),
        buttons_links(
            "Visual Studio Code",
            "",
            "https://code.visualstudio.com/",
            "/vscode.png",
            True,
            "#0A4D68",
            'rgba(190,190,190,0.7)'
        ),
        st.headingstyles("Control de versiones","4",'h3'),
        buttons_links(
            "Git",
            "",
            "https://git-scm.com/",
            "/git.png",
            True,
            "#c8983d",
            '#ffffff'
        ),
        buttons_links(
            "GitHub",
            "",
            "https://github.com/",
            "/Github.png",
            True,
            "#444444",
            '#ffffff'
        ),
        st.headingstyles("Base de datos","4",'h3'),
        st.headingstyles("Relacionales","3",'h4'),
        buttons_links(
            "PostgreSQL",
            "",
            "https://www.postgresql.org/",
            "/postgresql.png",
            True,
            "#0B2447",
            'rgba(160,160,160,0.6)'
        ),
        buttons_links(
            "MySQL",
            "",
            "https://www.mysql.com/",
            "/mysql.png",
            True,
            "#053B50",
            '#ffffff'
        ),
        buttons_links(
            "SQLite",
            "",
            "https://www.sqlite.org/index.html",
            "/sqlite.png",
            True,
            "#3A98B9",
            'rgba(160,160,160,0.6)'
        ),
        st.headingstyles("No relacionales","3",'h4'),
        buttons_links(
            "MongoDB",
            "",
            "https://www.mongodb.com/",
            "/mongodb.png",
            True,
            "#7abf5b",
            '#ffffff'
        ),
        st.headingstyles("Expresiones regulares",'4','h3'),
        st.headingstyles("Referencias",'3','h4'),
        buttons_links(
            "Tabla",
            "",
            "https://cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/?last=1584011681",
            "/tabla.png",
            True,
            "#1b7687",
            '#ffffff'
        ),
        buttons_links(
            "Analizador",
            "",
            "https://regex101.com/",
            "/code.webp",
            True,
            "#1a2c42",
            '#ffffff'
        ),
        st.headingstyles("Motor de búsqueda","4",'h3'),
        buttons_links(
            "Google",
            "",
            "https://www.google.com/",
            "/google.png",
            True,
            "#b7c22c",
            '#ffffff'
        ),
        style=st.links_section,
        class_name='animate__animated animate__fadeInUp'
    )