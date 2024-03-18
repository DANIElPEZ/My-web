class btn():
    Btn={
        'width': '150px',
        'height': '40px',
        'background_color': 'rgb(2, 59, 77)',
        'border': 'none',
        'color': '#ffffff',
        'font_weight': '600',
        'overflow': 'hidden',
        'transition': '1s',
        '_before':{
            'width': '150px',
            'height': '40px',
            'position': 'absolute',
            'font_size':'20px',
            'padding_top':'6px',
            'content': '"⭳"',
            'background_color': 'rgb(16, 73, 83)',
            'left': '-100%'
        }
    }

    hover={
        '_before':{
            'left': '0',
            'transition': '1s',
        },
        'transition': '1s'
    }

    pjd={
        'width':'100%',
        'margin_left':'10px',
    }