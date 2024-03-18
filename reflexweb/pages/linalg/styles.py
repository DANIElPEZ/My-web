import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.pagemain.colors as cl

st=st.styles_general()
cl=cl.colors()

class mtstyles():
    'TITLE FIRST PROJECT'
    styleshd={
        'size':'2xl',
        'color':'#10a89a',
        'text_align':'center',
        'margin_y':st.size['normal'],
    }
    'NUMBER INPUT STYLES'
    input_number={
        'text_color':cl.colorsg['withe'],
        'bg':'#222222',
        '_focus':{
            'bg':'#444444'
        }
    }
    'BUTTON STYLES'
    btn={
        'bg':'#0081ac',
        'width':'63%',
        'font_size':'17px',
        'top':st.size['normal'],
        'text_color':cl.colorsg['withe'],
        '_hover':{
            'bg':'#117e74'
        }
    }
    'ASNWER NUMBERS X, Y, Z'
    asw={
        'text_color':cl.colorsg['withe'],
        'font_size':st.size['medium_big']
    }
    text={
        'font_size':'23px',
        'text_color':cl.colorsg['withe'],
        'padding_top':st.size['big'],
        'text_align': 'justify'
    }
    img={
        'padding_top':st.size['big'],
        'width':'300px',
        'text_color':cl.colorsg['withe'],
    }