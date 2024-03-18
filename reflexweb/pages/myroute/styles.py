import reflexweb.pages.toolpage.colors as cl
import reflexweb.pages.pagemain.fonts as ft
import reflexweb.pages.pagemain.styles as st

cl=cl.colors()
ft=ft.font()
st=st.styles_general()

class styles_mtpg():
    '''
    HEADER

    -heading values
    -text values
    '''
    styleshd={
        'size':'2xl',
        'color':cl.colorsg['txtnv2'],
        'text_align':'center',
        'margin_y':st.size['normal']
    }
    texthd={
        'font_family':ft.ft_page['tittle'],
        'font_size':st.size['medium_big'],
        'color':cl.colors_text['header'],
        'margin_bottom':st.size['normal'],
        'text_align':'center'
    }