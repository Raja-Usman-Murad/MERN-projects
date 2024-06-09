import { extendTheme, ModalHeader, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const replaceExisiting = {
    variants: {
        filled: {
            field: {
                borderColor:"brand.900",
                _focus: {
                    borderColor: "brand.500"
                    
                    
                },
            },
        },
    },
    
    sizes: {
        md: {
            field: {
                borderRadius: "none",
            }
        }
    }
}

const replaceExisitingCheckbox ={
    baseStyle: {
        control: {
            _focus: {
                ring: 2,
                ringColor: "brand.500",
            },
        },
    },
}

const replaceExisitingTextArea = {
    variants: {
        filled: {
                _focus: {
                    borderColor: "brand.500"                
                },
        },
    },

    sizes: {
        md: {
            field: {
                borderRadius: "none",
            }
        }
    }

}

const customTheme = extendTheme(
    {
    colors:{
       brand: {
        50: "#f5fee5",
        100: "#e1fbb2",
        200: "#cdf781",
        300: "#b8ee56",
        400: "#a2a032",
        500:"#8ac919",
        600:"#71ab09",
        700:"#578602",
        800:"#3c5e00",
        900:"#203300",
       },

       variant: {
        50: "##FFF5F5",
        100: "#FED7D7",
        200: "#FEB2B2",
        300: "#FC8181",
        400: "#F56565",
        500:"#E53E3E",
        600:"#C53030",
        700:"#9B2C2C",
        800:"#822727",
        900:"#63171B",
       }
       
       
    },

    fonts: {
        heading: `Lora, sans-serif ${base.fonts.heading}`,
        body: 'Poppins,serif',
    },

    components: {
        Button: {
            variants: {
                primary: (props) => ({
                    rounded: "none",
                    _focus: {
                        ring: 2,
                        ringColor: "brand.500",
                    },
                    backgroundColor: ModalHeader("brand.500", "brand.300")(props),
                    color:mode("brand.900", "brand.700")(props),
                    _hover: {
                        backgroundColor: ModalHeader("brand.400", "brand.300")(props),
                    color:mode("brand.900", "brand.700")(props),
                    }
                }),
            },
        },
        Input: {...replaceExisiting},
        Select: {...replaceExisiting},
        Checkbox: {...replaceExisitingCheckbox},
        Textarea: {...replaceExisitingTextArea}
    }

    // components: {
    //     Input: {
    //         variants: {
    //             filled: {
    //                 field: {
    //                     bg:"variant.200",
    //                     _focus: {
    //                         borderColor: "brand.500",
    //                         bg:"variant.600",
    //                         color:"#000"
    //                     }
    //                 }
    //             }
    //         }
    //     },
        
    //     Textarea: {
    //         variants: {
    //             filled: {
    //                     bg:"variant.600",
    //             }
    //         }
    //     },

    //     Select: {
    //         variants: {
    //             filled: {
    //                 field: {
    //                     option: {
    //                         bg:"variant.600",
    //                         _hover: { 
    //                             textDecoration: 'underline',
    //                         },
    //                     },
    //                     _hover: { 
    //                         bg:"brand.900"
    //                     },
    //                 },
                        
    //             }
    //         }
    //     }
    // }
},
withDefaultColorScheme({
    colorScheme:"brand",
}),
withDefaultVariant({

    variant: "filled",
    components: ["Input", "Select", "Textarea"],

})

);

export default customTheme;