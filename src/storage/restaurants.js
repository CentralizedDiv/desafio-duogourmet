const restaurants = [
    {
        "name": "Café com Letras - Liberdade",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=euptgntkk0&time=1525898299889"
    },
    {
        "name": "Santafé",
        "culinary": "Internacional",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=3vuezhuics&time=1487362939767"
    },
    {
        "name": "Gomide",
        "culinary": "Francesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=av5mgbjybm&time=1532273172527"
    },
    {
        "name": "Café com Letras - Savassi",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=mm6uff056x&time=1525898325141"
    },
    {
        "name": "La Traviata",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=s8h59jhlwx&time=1523472624224"
    },
    {
        "name": "Lullo Gelato",
        "culinary": "Gelateria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=ozfjvsjqhy&time=1499110822549"
    },
    {
        "name": "68 La Pizzeria Lourdes",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=wooxw0v5b0&time=1487357776362"
    },
    {
        "name": "Mudesto",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=6tde9mbovz&time=1487361865573"
    },
    {
        "name": "Fiorella Gelato",
        "culinary": "Gelateria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=t6c22mumzl&time=1528996228061"
    },
    {
        "name": "Albanos Lourdes",
        "culinary": "Brasileira",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=rjtt5ed2q2&time=1535984058688"
    },
    {
        "name": "Mes Amis",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=apde2siexy&time=1487361747971"
    },
    {
        "name": "Benvindo",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=oyyogcysoq&time=1487358214168"
    },
    {
        "name": "Wäls Gastropub",
        "culinary": "Brasileira",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=7qccoerpkp&time=1524233877391"
    },
    {
        "name": "Trindade",
        "culinary": "Brasileira",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=5gqp4glt7n&time=1487363137232"
    },
    {
        "name": "Duke'n'Duke - Savassi",
        "culinary": "Hamburgueria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=jy2830i4an&time=1524235380473"
    },
    {
        "name": "Alessa",
        "culinary": "Gelateria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=cgpqsuz9nq&time=1499106424030"
    },
    {
        "name": "Glouton",
        "culinary": "Internacional",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=1t2dvbbzhv&time=1524665037705"
    },
    {
        "name": "Osso",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=jfhl3172wj&time=1499112966791"
    },
    {
        "name": "Empório Toscanini",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=wys5w8ayuu&time=1515422961437"
    },
    {
        "name": "Udon",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=zp7h26faxi&time=1487363206572"
    },
    {
        "name": "Shitake",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=ohqcgx9z5k&time=1535984884535"
    },
    {
        "name": "Indian Gourmet",
        "culinary": "Indiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=wng63l0zjp&time=1509134667815"
    },
    {
        "name": "Alma Chef",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=tffcd3yi4k&time=1487357984630"
    },
    {
        "name": "Gusto Osteria",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=wh1maq3hwm&time=1487360591843"
    },
    {
        "name": "Olga Nur",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=0uatqfdjf1&time=1487362200203"
    },
    {
        "name": "Nonna Carmela",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=4ffsiqponf&time=1487361946266"
    },
    {
        "name": "Le Gattò",
        "culinary": "Gelateria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=vgko8r1ggb&time=1513187018036"
    },
    {
        "name": "Olegário Pátio",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=zlzne7woq0&time=1487362149835"
    },
    {
        "name": "Patuscada Funcionários",
        "culinary": "Internacional",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=09fgeys0qj&time=1487362484591"
    },
    {
        "name": "Mi Garba",
        "culinary": "Gelateria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=yoavkew04d&time=1487361809775"
    },
    {
        "name": "L'Entrecote Bistrô",
        "culinary": "Francesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=wlaayzuj0a&time=1487361500342"
    },
    {
        "name": "L'Entrecôte de Paris",
        "culinary": "Francesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=2fvnf125q5&time=1487361548523"
    },
    {
        "name": "Marilia",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=oygxgkwir1&time=1487361595155"
    },
    {
        "name": "Paradiso",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=fgxrhwk4m2&time=1535984319969"
    },
    {
        "name": "Caê Restaurante Bar",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=huw3nabxf3&time=1530040504304"
    },
    {
        "name": "Duke'n'Duke - Centro",
        "culinary": "Hamburgueria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=4i0r9ll1to&time=1524235709733"
    },
    {
        "name": "Guaja",
        "culinary": "Variada",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=6ra6x1il6c&time=1525287881639"
    },
    {
        "name": "Olegário Lourdes",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=ryi41ng35q&time=1520536971656"
    },
    {
        "name": "Au Bon Vivant",
        "culinary": "Francesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=frzz7m9i4s&time=1487358066616"
    },
    {
        "name": "O Conde",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=xefq5wple9&time=1499111576383"
    },
    {
        "name": "Olegário Jardins",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=s76cw9n689&time=1487362031581"
    },
    {
        "name": "Un'Altra Volta",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=iz2vaxxho6&time=1522173106754"
    },
    {
        "name": "Est! Est!! Est!!! Ristorante Italiano - Savassi",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=lu1pj2hey7&time=1529084601420"
    },
    {
        "name": "D'Agostim Di Paratella",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=6gpsvglrul&time=1515424103092"
    },
    {
        "name": "Osteria Degli Angeli",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=8mm4nr4hq0&time=1487362270756"
    },
    {
        "name": "Kanpai",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=3w9ngmdx4k&time=1513186885241"
    },
    {
        "name": "Pellegrino",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=vdozbuobxk&time=1487362693853"
    },
    {
        "name": "Salumeria Central",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=fdwsghdy16&time=1487362857273"
    },
    {
        "name": "Haus",
        "culinary": "Alemã",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=q0bf6dxapu&time=1510939525710"
    },
    {
        "name": "Olegário Delivery",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=j6dsg4cn8k&time=1527014378716"
    },
    {
        "name": "Pizza Caraíva",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=ocdizrjbtv&time=1523644695559"
    },
    {
        "name": "Marukame",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=33h9q8fget&time=1525871248135"
    },
    {
        "name": "Província di Salerno",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=akqr64nncx&time=1521126398874"
    },
    {
        "name": "Ephigênia Bistrô",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=eo4wtmbnod&time=1487359198550"
    },
    {
        "name": "Tchê Parrilla",
        "culinary": "Parrilla",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=dldqwatr8o&time=1487363078580"
    },
    {
        "name": "Parrilla Boulevard",
        "culinary": "Parrilla",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=2d2fod8s7a&time=1513187718676"
    },
    {
        "name": "Osteria Mattiazzi",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=w2dv0s9ejq&time=1487362335329"
    },
    {
        "name": "Porcão",
        "culinary": "Churrascaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=mh9icq0mac&time=1524680706010"
    },
    {
        "name": "Parada do Cardoso",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=1u9ll869y8&time=1525287995726"
    },
    {
        "name": "Casa do Churrasco",
        "culinary": "Carnes",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=ktyjgnsgke&time=1487358345565"
    },
    {
        "name": "Birosca S2",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=1g1h04cyul&time=1513186150180"
    },
    {
        "name": "Taika",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=qtqv7ug39q&time=1487363031651"
    },
    {
        "name": "Duke'n'Duke - Vila da Serra",
        "culinary": "Hamburgueria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=jmt1x5fba1&time=1525288288934"
    },
    {
        "name": "Mayu",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=5m7rqkcjob&time=1535984985097"
    },
    {
        "name": "Dorival",
        "culinary": "Parrilla",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=2c7es7e1u6&time=1487359059316"
    },
    {
        "name": "Omilía",
        "culinary": "Internacional",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=b0f6h3gz04&time=1499112387116"
    },
    {
        "name": "L'Amour",
        "culinary": "Internacional",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=0qi1tigx4q&time=1529433988735"
    },
    {
        "name": "Olegário Vila da Serra",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=pf0zci59g2&time=1513187361782"
    },
    {
        "name": "Akemi DELIVERY",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=h751ixnjdq&time=1526493141689"
    },
    {
        "name": "Akemi",
        "culinary": "Japonesa",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=thejklkwdv&time=1526492307728"
    },
    {
        "name": "Brasa Bier",
        "culinary": "Parrilla",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=vywwkbgc5c&time=1513186277541"
    },
    {
        "name": "Duke'n'Duke - Buritis",
        "culinary": "Hamburgueria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=9m3clja6s9&time=1525288479615"
    },
    {
        "name": "Quinto do Ouro",
        "culinary": "Internacional",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=nhmjweunkh&time=1513187948888"
    },
    {
        "name": "Taberna Livorno",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=53lr9fips8&time=1487362989830"
    },
    {
        "name": "68 La Pizzeria Pampulha",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=3hw8d6iuls&time=1525875822182"
    },
    {
        "name": "68 La Pizzeria Pampulha - DELIVERY",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=808uodctn5&time=1522953152340"
    },
    {
        "name": "Olegário Pampulha",
        "culinary": "Pizzaria",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=f5zqwwwxqh&time=1487362098469"
    },
    {
        "name": "Paladino",
        "culinary": "Brasileira",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=olr0h7to2v&time=1513187595675"
    },
    {
        "name": "Xapuri",
        "culinary": "Mineira",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=odoo63i6lq&time=1487363389840"
    },
    {
        "name": "Campagne",
        "culinary": "Brasileira",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=6i2tqirz67&time=1499107484724"
    },
    {
        "name": "Preferido do Rei",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=gnschua9m4&time=1523628753463"
    },
    {
        "name": "Divino",
        "culinary": "Contemporânea",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=5zpks8oavg&time=1487358780108"
    },
    {
        "name": "Est! Est!! Est!!! Trattoria Italiana - Alphaville",
        "culinary": "Italiana",
        "coverUrl": "https://painelduo.com.br/api/restaurant-images/?category=cover&rid=6yfm3m80gl&time=1529085204969"
    }
]

export default restaurants;