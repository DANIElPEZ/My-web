import reflexweb.pages.pagemain.styles as st
import reflexweb.pages.pagemain.colors as cl

st=st.styles_general()
cl=cl.colors()

class mtstyles():
    'TITLE FIRST PROJECT'
    styleshd={
        'size':'2xl',
        'color':'#eeeeee',
        'text_align':'center',
        'margin_y':st.size['normal'],
    }

    'INPUT GAME STYLES'
    text_game={
        'font_size':'27px',
        'font_weight':'700',
    }
    text_input_game={
        'font_size':'20px',
        'font_weight':'700',
        'color':'#00ffbf'
    }
    text_points={
        'font_size':'23px',
        'font_weight':'500',
        'color':'#ffffff'
    }
    input_game={
        'border':'4px',
        'border_radius':'20px',
        'border_color':'#98c1fe',
        'width':'145px',
        'height':'145px',
        '_hover':{
            'border_color':'#2465c4',
            'opacity':'0.85'
        }
    }