import reflex as rx
import reflexweb.pages.pagemain.colors as cl
import reflexweb.pages.pagemain.fonts as ft

cl=cl.colors()
ft=ft.font()

class styles_general():
    'CONSTANTS'
    max_width="560px"

    'SIZE VALUES'
    size={
        "zero":"0px important!",
        "small":"0.5em",
        "medium":"0.8em",
        "normal":"1em",
        "medium_big":"1.5em",
        "big":"2em",
        "extra_big":"3.5em"
    }

    stpage={
        'background_color': '#0c151d',
        'font_family':ft.ft_page['1']
    }

    '''
    NAVIGATION BAR STYLES
    
    -navigation bar general
    -navigation bar text
    -sidebar
    -sidebar button
    .sidebar buttons links
    '''
    navbarstyles={
        'position':'fixed',
        'background_color':'#1b2b43',
        'padding_x':size["big"],
        'padding_y':size["normal"],
        'z_index':'10',
        'top':size['zero'],
        'width':'100%',
    }
    navbartext={
        'font_family':ft.ft_page['1'],
        'font_size':size['medium_big'],
        'width':'110px',
        "text_decoration":"none",
        '_hover':{}
    }

    sidebar={
        'background_color':'#0f1928',
        'transition':'0.3s',
    }
    sidenav={
        'text_align':'center',
        'color':'#ffffff',
        'font_size':'1.1em',
        "text_decoration":"none",
        'font_family':ft.ft_page['2'],
        'width':'100%',
        'transition':'0.2s',
        "_hover":{
            'bg':'#105a86',
            'border_width':'0 0 0 2px',
            'border_color':'#ffffff',
            'cursor':'pointer'
        }
    }

    '''
    HEADER

    -header values
    -header part2 values
    '''
    header={
        'align_items':'start',
        'spacing':size['big'],
        'padding_top':size['extra_big'],
    }
    def idev(self,tittle,body):
        return rx.box(
            rx.chakra.span(
                tittle,
                font_weight='bold',
                color=cl.colorsg['primary']
            ),
            body,
            font_size=self.size['medium'],
            color=cl.colors_text['body']
        )

    '''
    BUTTON STYLES

    -buttons sections
    -button icon link
    -button tittle values
    -button body values
    -button general values
    -button style link values
    -buttons list and heading
    '''
    headstyles={
        'width':'100%',
        'padding_top':size['normal'],
        'color':cl.colors_text['header'],
        'font_family':ft.ft_page['1']
    }
    def headingstyles(self,text:str,sizel:str):
        self.headstyles['size']=sizel
        return rx.heading(
            text,
            size=sizel,
            style=self.headstyles
        )
    
    iconstyle={
        'width':size['big'],
        'height':size['big'],
        'margin':size['medium'],
        'padding': '2px',
    }

    def buttonlink(self,icono):
        return rx.chakra.avatar(
                        src=icono,
                        style=self.iconstyle,
                        _hover={
                            'border':'2px',
                            'border_color':cl.colorsg['withe']
                        }
                    )
    bt_tittle={
        "font_size":size["normal"],
        'color':cl.colors_text['header'],
        'font_family':ft.ft_page['2']
    }
    bt_body={
        "font_size":size["medium"],
        'color':cl.colors_text['body']
    }
    button={
        'width':"100%",
        'height':"100%",
        'display':"block",
        'white_space':'normal',
        'padding':size['small'],
        'border_radius':size['normal'],
        'background_color':cl.colorsg['content'],
        'color':cl.colors_text['header'],
    }
    blink={
        "text_decoration":"none",
        'width':"100%",
        'margin':size['zero'],
        'spacing':size['small'],
        "_hover":{}
    }
    links_section={
        'spacing':size['medium'],
        'max_width':max_width,
        'width':'100%'
    }

    '''
    FOOTER VALUES

    -footer values
    -footer style values
    -footer link values
    '''
    footer={
        'color':cl.colors_text['footer'],
        'padding':size['medium'],
        'width':'100%'
    }
    iconstylef={
        'width':size['medium_big'],
        'height':size['medium_big'],
        'margin':size['medium'],
        'padding': '2px',
        '_hover':{
            'border':'2px',
            'border_color':cl.colorsg['withe'],
        }
    }
    flink={
        "text_decoration":"none",
        "margin_top":size['medium'],
        "_hover":{
            'color':cl.colors_text['footerhover']
        }
    }