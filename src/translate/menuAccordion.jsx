const menutrans ={
    title:{
        english:"Midori",
        persian:"Midori",
        icon:"fa-eercast",
        href:"https://midori.com"
        
    },
    menu:[
        {
            english: "OverView",
            persian: "OverView",
            index:0,
            icon:"fa-dashboard",
            href:"#",
            children:[
            {
                english: "Dashboard",
                persian: "داشبورد",
                index:0,
                icon:"fa-dashboard",
                href:"/",
                url:""
            }
            ]
        },
        {
            english: "Products",
            persian: "محصولات و خدمات",
            index:3,
            icon:"fa-bar-chart",
            href:"#",
            children:[
                {
                    english: "Products",
                    persian: "محصولات",
                    index:0,
                    icon:"fa-dashboard",
                    href:"/products",
                    url:"products"
                }
                ]
        }
    ],
    setting:[
        {
            english: "Access",
            persian: "دسترسی ها",
            index:0,
            icon:"fa-key",
            href:"/access",
            url:"access"
        }
    ]
    }
    export default menutrans