
 let menu=[
    {
        name:"home",
        type:"link",
        adresee:"zoom"
    },
    {
        name:"about",
        type:"link",
        adresee:"#/about"
    },
    {
        name:"contact",
        type:"link",
        adresee:"#/contact"
    },
    {
        name:'open',
        type:'dropdown',
        childrens:[
            {
                name:"link1",
                adresee:"#link1"
            },
            {
                name:"link2",
                adresee:"#link2"
            },
            {
                name:"link3",
                adresee:"#link3"
            }
        ]
    }
]
let images=[
    {
        title:"First slide label",
        discribtion:"Nulla vitae elit libero, a pharetra augue mollis interdum.",
        src:"https://s7d2.scene7.com/is/image/PetSmart/5251722?$sclp-prd-main_large$"
    },
    {
        title:"Second slide label",
        discribtion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        src:"https://s7d2.scene7.com/is/image/PetSmart/4034664?$sclp-prd-main_large$"
    },
    {
        title:"Third slide label",
        discribtion:"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        src:"https://s7d2.scene7.com/is/image/PetSmart/4031550?$sclp-prd-main_large$"
    }
]
let products=[
    {
        src:"https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/2/39572-large_default.jpg",
        name:"TEMPERETED GLASS LENOVO A2020",
        description:"TEMPERETED GLASS SAMSUNG LENOVO A2020 Protecteur d'écran en verre.",
        price:"2,000 TND",
        avalable:true
    },
    {
        src:"https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/6/5/39565-large_default.jpg",
        name:"TEMPERETED GLASS EXPRESS PRIME",
        description:"TEMPERETED GLASS SAMSUNG EXPRESS PRIME Protecteur d'écran en verre.",
        price:"2,100 TND",
        avalable:true
    },
    {
        src:"https://d2j7t5u190oygv.cloudfront.net/img/p/3/9/5/7/8/39578-large_default.jpg",
        name:"TEMPERETED GLASS LENOVO K5 PLUS",
        description:"TEMPERETED GLASS SAMSUNG LENOVO K5 PLUS Protecteur d'écran en verre.",
        price:"2,200 TND",
        avalable:false
    },
]
let footer=[
    {
        type:"socialMedia",
        list:[
            {
                iconClass:"fab fa-facebook-f white-text mr-4",
                link:"www.facebook.com"
            },
            {
                iconClass:"fab fa-twitter white-text mr-4",
                link:"www.twitter.com"
            },
            {
                iconClass:"fab fa-google-plus-g white-text mr-4",
                link:"www.google.tn"
            },
            {
                iconClass:"fab fa-linkedin-in white-text mr-4",
                link:"www.linkedin.com"
            },
            {
                iconClass:"fab fa-instagram white-text",
                link:"www.instagram.com"
            },
        ]
    },
    {
        name:"COMPANY NAME",
        type:"paragraf",
        content:"Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        name:"Products",
        type:"listOfLinks",
        list:[
            {
                name:"MDBootstrap",
                link:"#!"
            },
            {
                name:"MDWordPress",
                link:"#!"
            },
            {
                name:"BrandFlow",
                link:"#!"
            },
            {
                name:"Bootstrap Angular",
                link:"#!"
            },
        ]
    },
    {
        name:"Useful links",
        type:"listOfLinks",
        list:[
            {
                name:"Your Account",
                link:"#!"
            },
            {
                name:"Become an Affiliate",
                link:"#!"
            },
            {
                name:"Shipping Rates",
                link:"#!"
            },
            {
                name:"Help",
                link:"#!"
            },
        ]
    },
    {
        name:"Contact",
        type:"listOfIcons",
        list:[
            {
                name:" New York, NY 10012, US",
                iconClass:"fas fa-home mr-3"
            },
            {
                name:" info@example.com",
                iconClass:"fas fa-envelope mr-3"
            },
            {
                name:" + 01 234 567 88",
                iconClass:"fas fa-phone mr-3"
            },
            {
                name:"+ 01 234 567 89",
                iconClass:"fas fa-print mr-3"
            },
        ]
    }
]
let discountProduct=[
    {
        name:"Festina Montre Femme – Silver - Garantie 2 Ans",
        src:"https://tn.jumia.is/b9vGKs3OcfTu9y_-ZVFcEPeocMg=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/20/6101/1.jpg?4324",
        discount:"-50%",
        price:"160  TND",
        odldPrice:"320  TND"
    },
    {
        name:"Fossil Montre Homme - Cuir - fs5280 - Garantie 2 Ans",
        src:"https://tn.jumia.is/THRYxLOjULe2VR8z1eCCX3X1SDI=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/82/306/1.jpg?0944",
        discount:"-30%",
        price:"438  TND",
        odldPrice:"625  TND"
    },
    {
        name:"Festina Montre Homme - Fond Noir - Garantie 2 Ans",
        src:"https://tn.jumia.is/ZJqcu71hziRYbU0aqS8RuJIOeHs=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/49/3531/1.jpg?7084",
        discount:"-50%",
        price:"235  TND",
        odldPrice:"470  TND"
    },
    {
        name:"TOMMY HILFIGER Montre Homme - 1791243 - Garantie 2 Ans",
        src:"https://tn.jumia.is/59d1_fs0PoLsN-VMOyl19lTZZcw=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/27/244/1.jpg?4965",
        discount:"-40%",
        price:"373  TND",
        odldPrice:"621  TND"
    },
    {
        name:"TOMMY HILFIGER Montre Homme - 1791242 - Garantie 2 Ans",
        src:"https://tn.jumia.is/wj2ww14eRcD3tl3MbUW_BUgs7Z4=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/94/244/1.jpg?0013",
        discount:"-40%",
        price:"373  TND",
        odldPrice:"621  TND"
    },
    {
        name:"Fossil Montre Homme - FS5440 - Marron - Garantie 2 Ans",
        src:"https://tn.jumia.is/m7Jjk98fZ6UnD264SZ_CWy8LZQg=/fit-in/500x500/filters:fill(white):sharpen(1,0,false):quality(100)/product/24/817/1.jpg?2144",
        discount:"-20%",
        price:"396  TND",
        odldPrice:"495  TND"
    }
]
const sidemenu=[
    {
      "name":"pere1",
      "chiledrens":[
              {
                "name":"fils1",
                "chiledrens":[
                          {"name":"gfils1",
                            "chiledrens":[]},
                          {"name":"gfils2",
                            "chiledrens":[]}
                        ]
              },
              {
                "name":"fils2",
                "chiledrens":[
                  {"name":"gfils1",
                    "chiledrens":[]},
                  {"name":"gfils2",
                    "chiledrens":[]}
                ]
              },
              {
                "name":"fils3",
                "chiledrens":[
                  {"name":"gfils1",
                    "chiledrens":[]},
                  {"name":"gfils2",
                    "chiledrens":[]}
                ]
              }

            ]
    },
    {
      "name":"pere2",
      "chiledrens":[
        {
          "name":"fils1",
          "chiledrens":[
            {"name":"gfils1",
              "chiledrens":[]},
            {"name":"gfils2",
              "chiledrens":[]}
          ]
        },
        {
          "name":"fils2",
          "chiledrens":[
            {"name":"gfils1",
              "chiledrens":[]},
            {"name":"gfils2",
              "chiledrens":[]}
          ]
        },
        {
          "name":"fils3",
          "chiledrens":[
            {"name":"gfils1",
              "chiledrens":[]},
            {"name":"gfils2",
              "chiledrens":[]}
          ]
        }

      ]
    },
    {
      "name":"pere3",
      "chiledrens":[
        {
          "name":"fils1",
          "chiledrens":[
            {"name":"gfils1",
              "chiledrens":[]},
            {"name":"gfils2",
              "chiledrens":[]}
          ]
        },
        {
          "name":"fils2",
          "chiledrens":[
            {"name":"gfils1",
              "chiledrens":[]},
            {"name":"gfils2",
              "chiledrens":[]}
          ]
        },
        {
          "name":"fils3",
          "chiledrens":[
            {"name":"gfils1",
              "chiledrens":[]},
            {"name":"gfils2",
              "chiledrens":[]}
          ]
        }

      ]
    }
  ];
const ZoomIMG={src : 'https://images.unsplash.com/photo-1444065381814-865dc9da92c0'}
const BigSaleSRC=[
    {
        src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_TreasureHunt.jpg",
        link:"www.google.com"
    },
    {
        src:"https://static.jumia.com.tn/cms/campaign-TN/2019/MW19/Sliders/DB/TN_DB_MW_FS_07042019.jpg",
        link:"www.google.com"
    },
]
const CarouselPhoto=[
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-1.jpg",
        paragraph:"Legend 1"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-2.jpg",
        paragraph:"Legend 2"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-3.jpg",
        paragraph:"Legend 3"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-4.jpg",
        paragraph:"Legend 4"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-5.jpg",
        paragraph:"Legend 5"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-6.jpg",
        paragraph:"Legend 6"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-7.jpg",
        paragraph:"Legend 7"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-8.jpg",
        paragraph:"Legend 8"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-9.jpg",
        paragraph:"Legend 9"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-10.jpg",
        paragraph:"Legend 10"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-11.jpg",
        paragraph:"Legend 11"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-12.jpg",
        paragraph:"Legend 12"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-13.jpg",
        paragraph:"Legend 13"
    },
    {
        src:"http://lorempixel.com/output/cats-q-c-640-480-14.jpg",
        paragraph:"Legend 14"
    }
]
let ProductImagelist=[
    "https://images.pexels.com/photos/949586/pexels-photo-949586.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/556667/pexels-photo-556667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
]
const CategorieTab=[
    { name:"liste",
     category:[
     {
       name:"product k",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product j",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product ll",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product kk",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product 154",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product 0000",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     }
   ]},
   { name:"liste",
   category:[
     {
       name:"product k",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product j",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product ll",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product kk",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product 154",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     },
     {
       name:"product 0000",
       list:["product 1","product 2","product 3","product 7","product 56","product 8","product 11"]
     }
   ]}
   ]
export {CategorieTab,footer,menu,images ,products,discountProduct,sidemenu,ZoomIMG,BigSaleSRC,CarouselPhoto,ProductImagelist}