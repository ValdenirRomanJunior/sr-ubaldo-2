import 'styled-components';

declare module 'styled-components'{

    export interface DefaultTheme {
        colors: {
            primary: string,
            border_primary:string,
            button: string,
            card_buttons:string,
            color_title:string,
            color_subtitle:string,
            color_comum_text:string,
            color_link_menu:string,
            background: string,
            red: string,
            green: string,
        };

        fonts:{
            font_primary: string,
            font_secondary:string,
        }
    }
}