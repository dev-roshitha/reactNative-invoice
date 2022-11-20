/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
    'avenir-next-regular': require('../../assets/fonts/avenir-next-regular.ttf'),
    'avenir-next-medium': require('../../assets/fonts/avenir-next-medium.ttf'),
    'avenir-next-demi': require('../../assets/fonts/avenir-next-demi.ttf'),
    'avenir-next-bold': require('../../assets/fonts/avenir-next-bold.ttf'),
    'Ubuntu-Medium': require('../../assets/fonts/Ubuntu-Medium.ttf'),
    'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic.ttf'),
    'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Reg': require('../../assets/fonts/Montserrat-Medium.ttf'),
};
const type = {
    primary: 'avenir-next-regular',
    secondary: 'Ubuntu-Medium',
    medium: 'avenir-next-medium',
    bold: 'avenir-next-bold',
    semi: 'avenir-next-demi',
    stylish: 'GreatVibes-Regular',
    italic: 'Montserrat-Italic',
    MontBold: 'Montserrat-ExtraBold',
    MontReg: 'Montserrat-Reg',
};

const Fonts = { customFonts, type };

export default Fonts;
