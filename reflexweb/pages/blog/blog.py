import reflex as rx
from reflexweb.pages.pagemain.c1navbar import navbar
from reflexweb.pages.pagemain.c4footer import footer
import reflexweb.rxpage as rdx
import reflexweb.pages.pagemain.styles as st
from reflexweb.pages.sevices.service import downloadbtn

rdx=rdx.rxpg()
st=st.styles_general()

def iam():
    return rx.box(
        rx.chakra.text(
            rx.avatar(
                src='/DVC.png',size='7',
                margin_right='10px'
            ),
            '''
            Hola yo soy Daniel Santiago Angel Gonzalez Ubaque, 
            aqui comparto unos conocimientos, 
            donde te van ayudar a solucionar problemas, 
            ser mas productivo como programador y parte de mi vida personal.
            ''',
            text_align='justify',
            color='#ffffff',
            display='flex',
        ),
        padding_top=st.size['big']
    )

def mytoolsdk():
    return rx.box(
        rx.heading('Las herramientas que yo uso',
                   size='6',
                   color='#b9ccf2',
                   padding_top='25px'
                   ),
        rx.heading('IDE',
                   size='4',
                   color='#29e1c9',
                   padding_top='18px'
                   ),
        rx.image(
                    src='/blgvsc.jpg',
                    padding_y='10px',
                    width=st.max_width
                    ),
        rx.text(
                '''
                Visual Studio Code, 
                es un editor de codigo, 
                donde te ayuda a escribir codigo mas rapido, 
                dentro del editor puedes instalar varias extenciones, 
                de las cuales uso ls siguientes: Error Lens, 
                indent-rainbow, indenticator, Jupyter, Material Icon Theme, 
                One Dark Pro, Palenight Theme, Prettier - Code formatter, 
                Pylance, Python, Python Debugger, Rainbow CSV, 
                Subtle Match Brackets, Thunder Client, Live Preview.
                ''',
                color='#ffffff',
                text_align='justify'
                ),
        rx.heading('Herramientas',
                   size='4',
                   color='#29e1c9',
                   padding_top='18px'
                   ),
        rx.image(
                src='/pwtoys.jpg',
                padding_y='10px',
                width=st.max_width
                 ),
        rx.text(
                '''
                Power Toys es una herramienta, 
                donde tiene varias aplicaciones, 
                el uso mas comun que yo hago es obtener el RGB O HEX del color de forma rapida, 
                esta herramienta incluye Always On Top, PowerToys Awake, Selector de colores,
                No se encontró el comando, Recortar y bloquear, Variables de entorno, FancyZones, 
                Complementos de File Explorer, File Locksmith, Editor del archivo "Hosts", 
                Cambio de tamaño de imágenes, Administrador de teclado, Administrador de teclado, 
                Utilidades del mouse, Mouse sin límites, Pegar como texto sin formato, Ojear, 
                PowerRename, PowerToys Run, Acento rápido, Vista previa del Registro, Regla en pantalla, 
                Guía de métodos abreviados de teclado, Extractor de texto, Silencio de videoconferencia.
                ''',
                color='#ffffff',
                text_align='justify'
                ),
        rx.heading('Solucion a',
                   size='6',
                   color='#f2f1b9',
                   padding_top='25px'
        ),
        rx.heading('Reflex',
                   size='4',
                   color='#cbd428',
                   padding_top='18px'
                   ),
        rx.text(
                """
                File "<frozen codecs>", line 322, in decode
                UnicodeDecodeError: 'utf-8' codec can't decode byte 0xa2 in position 17: invalid start byte
                """,
                bg='#161b22',
                color='#eeeeee',
                border_radius='20px',
                margin='5px',
                padding='10px',
                border_color='#ffffff',
                border_width='2px'
                 ),
        rx.text(
                'Lo primero que debes hacer es ir a ',rx.chakra.icon(tag="arrow_forward"),
                ' envpy/Lib/site-packages/reflex/utils/processes.py, linea 223, en la funcion stream_logs',
                ' borrar la funcion y reemplazarla por este script :',
                color='#ffffff',
                text_align='justify'
                ),
        rx.box(
            rx.chakra.icon(tag='copy',
                           align_item='right',
                           on_click=rx.set_clipboard('''
import sys
    def stream_logs(message, process):
        try:
        for line in process.stdout:
            decoded_line = line.decode('utf-8', errors='replace')
            sys.stdout.write(decoded_line)
            sys.stdout.flush()
        except UnicodeDecodeError as e:
            print(f"Error decoding line: {e}")
        except Exception as ex:
            print(f"Error streaming logs: {ex}")
        return iter([])
            '''),
                           _hover={
                               'cursor':'pointer'
                           }
                           ),
            rx.markdown(r"""
                ```python
                import sys
                def stream_logs(message, process):
                    try:
                    for line in process.stdout:
                        decoded_line = line.decode('utf-8', errors='replace')
                        sys.stdout.write(decoded_line)
                        sys.stdout.flush()
                    except UnicodeDecodeError as e:
                        print(f"Error decoding line: {e}")
                    except Exception as ex:
                        print(f"Error streaming logs: {ex}")
                    return iter([])
                    """,
                    component_map={
                        "code": lambda text: rx.code(text, color="purple"),
                        "codeblock": lambda text, **props: rx.code_block(
                            text, **props, theme="dark", margin_y="1em"
                        )
                    }
            ),
            bg='#161b22',
            color='#eeeeee',
            border_radius='20px',
            margin='5px',
            padding='10px',
            border_color='#ffffff',
            border_width='2px'
        ),
        rx.text('''
                Despues ejecuta "reflex init", se inicializara el proyecto. NOTA: este solo es durante la creacion del proyecto.
                Y para compilar y desplegar dejan la funcion original con el atajo de teclado "ctrl + z".
                ''',
                color='#ffffff',
                text_align='justify'
                )
    )

def mytoolsmb():
    return rx.box(
        rx.heading('Las herramientas que yo uso',
                   size='6',
                   color='#b9ccf2',
                   padding_top='25px'
                   ),
        rx.heading('IDE',
                   size='4',
                   color='#29e1c9',
                   padding_top='18px'
                   ),
        rx.image(
                    src='/blgvsc.jpg',
                    padding_y='10px',
                    width=st.max_width
                    ),
        rx.text(
                '''
                Visual Studio Code, 
                es un editor de codigo, 
                donde te ayuda a escribir codigo mas rapido, 
                dentro del editor puedes instalar varias extenciones, 
                de las cuales uso ls siguientes: Error Lens, 
                indent-rainbow, indenticator, Jupyter, Material Icon Theme, 
                One Dark Pro, Palenight Theme, Prettier - Code formatter, 
                Pylance, Python, Python Debugger, Rainbow CSV, 
                Subtle Match Brackets, Thunder Client, Live Preview.
                ''',
                color='#ffffff',
                text_align='justify'
                ),
        rx.heading('Herramientas',
                   size='4',
                   color='#29e1c9',
                   padding_top='18px'
                   ),
        rx.image(
                src='/pwtoys.jpg',
                padding_y='10px',
                width=st.max_width
                 ),
        rx.text(
                '''
                Power Toys es una herramienta, 
                donde tiene varias aplicaciones, 
                el uso mas comun que yo hago es obtener el RGB O HEX del color de forma rapida, 
                esta herramienta incluye Always On Top, PowerToys Awake, Selector de colores,
                No se encontró el comando, Recortar y bloquear, Variables de entorno, FancyZones, 
                Complementos de File Explorer, File Locksmith, Editor del archivo "Hosts", 
                Cambio de tamaño de imágenes, Administrador de teclado, Administrador de teclado, 
                Utilidades del mouse, Mouse sin límites, Pegar como texto sin formato, Ojear, 
                PowerRename, PowerToys Run, Acento rápido, Vista previa del Registro, Regla en pantalla, 
                Guía de métodos abreviados de teclado, Extractor de texto, Silencio de videoconferencia.
                ''',
                color='#ffffff',
                text_align='justify'
                ),
        rx.heading('Solucion a',
                   size='6',
                   color='#f2f1b9',
                   padding_top='25px'
        ),
        rx.heading('Reflex',
                   size='4',
                   color='#cbd428',
                   padding_top='18px'
                   ),
        rx.text(
                """
                File "<frozen codecs>", line 322, in decode
                UnicodeDecodeError: 'utf-8' codec can't decode byte 0xa2 in position 17: invalid start byte
                """,
                bg='#161b22',
                color='#eeeeee',
                border_radius='20px',
                margin='5px',
                padding='10px',
                border_color='#ffffff',
                border_width='2px'
                 ),
        rx.text(
                'Lo primero que debes hacer es ir a ',rx.chakra.icon(tag="arrow_forward"),
                ' envpy/Lib/site-packages/reflex/utils/processes.py, linea 223, en la funcion stream_logs',
                ' borrar la funcion y reemplazarla por este script :',
                color='#ffffff',
                text_align='justify'
                ),
        rx.box(
            downloadbtn('/programas/fix_init.py')
        ),
        rx.text('''
                Despues ejecuta "reflex init", se inicializara el proyecto. NOTA: este solo es durante la creacion del proyecto.
                Y para compilar y desplegar dejan la funcion original con el atajo de teclado "ctrl + z".
                ''',
                color='#ffffff',
                text_align='justify'
                )
    )

def hobbies():
    return

@rx.page(
    route='/blog',
    title=rdx.title,
    description=rdx.description,
    image=rdx.img,
    meta=rdx.meta
    )
def blog():
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                iam(),
                rx.desktop_only(
                    mytoolsdk()
                ),
                rx.mobile_and_tablet(
                    mytoolsmb()
                ),
                #hobbies(),
                max_width=st.max_width,
                width="100%",
                margin_y=st.size['big'],
                padding=st.size['big']
            )
        ),
        footer()
    )