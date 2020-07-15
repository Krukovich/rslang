export const BTN_LABEL = {
  NEXT: 'Дальше',
  CHECK: 'Проверить',
  PREV: 'Назад',
}

export const GAME_LEVEL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const MAX_PAGE = 20;

export const MAX_WORDS_LENGTH = 12;

export const SPEAK_LANGUAGE = 'en-US';

export const POINT = 10;

export const LOGIN = {
  ON: 'Authenticated',
}

export const SOUND = {
  CORRECT: 'audio/correct.mp3',
  ERROR: 'audio/error.mp3'
}

const PASSWORD_PATTERN_REGEXP =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_+-.,[{:;\}\]])[A-Za-z\d@$!%*#?&_+-.,[{:;\}\]]{8,}$/;

export const API_LINK = 'https://afternoon-falls-25894.herokuapp.com/';

export const PASSWORD_PATTERN = PASSWORD_PATTERN_REGEXP.toString().slice(1).slice(0, -1);

export const PASSWORD_REQUIREMENTS = "Пароль должен содержать одну цифру, один спецсимвол из +-_@$!%*?&#.,;:[]{} и одну заглавную букву";

export const gameData = {
  level1: [
    {
      "id": "1_01",
      "name": "Stag Hunt",
      "imageSrc": "level1/deerhunt.jpg",
      "cutSrc": "level1/cut/deerhunt.jpg",
      "author": "Niccolò dell'",
      "year": "1550-52"
    },
    {
      "id": "1_02",
      "name": "Deer beside a Lake",
      "imageSrc": "level1/deerlake.jpg",
      "cutSrc": "level1/cut/deerlake.jpg",
      "author": "Carl Frederik",
      "year": "1888"
    },
    {
      "id": "1_03",
      "name": "Country Road with Cypresses",
      "imageSrc": "level1/abbati2.jpg",
      "cutSrc": "level1/cut/abbati2.jpg",
      "author": "ABBATI, Giuseppe",
      "year": "1860"
    },
    {
      "id": "1_04",
      "name": "Fireworks in Naples",
      "imageSrc": "level1/firework.jpg",
      "cutSrc": "level1/cut/firework.jpg",
      "author": "ACHENBACH, Oswald",
      "year": "1875"
    },
    {
      "id": "1_05",
      "name": "The Ninth Wave",
      "imageSrc": "level1/9th_wave.jpg",
      "cutSrc": "level1/cut/9th_wave.jpg",
      "author": "AIVAZOVSKY, Ivan Konstantinovich",
      "year": "1850"
    },
    {
      "id": "1_06",
      "name": "View of Campo Santi Giovanni e Paolo",
      "imageSrc": "level1/campo.jpg",
      "cutSrc": "level1/cut/campo.jpg",
      "author": "ALBOTTO, Francesco",
      "year": "1745"
    },
    {
      "id": "1_07",
      "name": "San Giuseppe di Castello",
      "imageSrc": "level1/giuseppe.jpg",
      "cutSrc": "level1/cut/giuseppe.jpg",
      "author": "ALBOTTO, Francesco",
      "year": "1745"
    },
    {
      "id": "1_08",
      "name": "View of St.Petersburg",
      "imageSrc": "level1/view_stp.jpg",
      "cutSrc": "level1/cut/view_stp.jpg",
      "author": "ALEKSEYEV, Fyodor Yakovlevich",
      "year": "1795"
    },
    {
      "id": "1_09",
      "name": "Landscape with the Finding of Moses",
      "imageSrc": "level1/landmose.jpg",
      "cutSrc": "level1/cut/landmose.jpg",
      "author": "ALLEGRAIN, Etienne",
      "year": "second half of XVII century"
    },
    {
      "id": "1_10",
      "name": "River Landscape",
      "imageSrc": "level1/riverla2.jpg",
      "cutSrc": "level1/cut/riverla2.jpg",
      "author": "ALLEGRAIN, Etienne",
      "year": "second half of XVII century"
    },
    {
      "id": "1_11",
      "name": "Extensive Wooded Landscape with Cephalus and Procris",
      "imageSrc": "level1/extensiv.jpg",
      "cutSrc": "level1/cut/extensiv.jpg",
      "author": "ALSLOOT, Denis van",
      "year": "first half of XVII century"
    },
    {
      "id": "1_12",
      "name": "Skating during Carnival",
      "imageSrc": "level1/skating.jpg",
      "cutSrc": "level1/cut/skating.jpg",
      "author": "ALSLOOT, Denis van",
      "year": "1620"
    },
    {
      "id": "1_13",
      "name": "Winter Landscape",
      "imageSrc": "level1/winter_l.jpg",
      "cutSrc": "level1/cut/winter_l.jpg",
      "author": "ALSLOOT, Denis van",
      "year": "1610"
    },
    {
      "id": "1_14",
      "name": "Winter Landscape in the Fôret de Soignes, with the Flight Into Egypt",
      "imageSrc": "level1/winterla.jpg",
      "cutSrc": "level1/cut/winterla.jpg",
      "author": "ALSLOOT, Denis van",
      "year": "1616"
    },
    {
      "id": "1_15",
      "name": "View of Vienna from the Prater",
      "imageSrc": "level1/viewvien.jpg",
      "cutSrc": "level1/cut/viewvien.jpg",
      "author": "ALT, Rudolf von",
      "year": "1834"
    },
    {
      "id": "1_16",
      "name": "An English 3rd - Rate Ship of the Line in Three Positions",
      "imageSrc": "level1/rateship.jpg",
      "cutSrc": "level1/cut/rateship.jpg",
      "author": "ANDERSON, William",
      "year": "first half of XIX century"
    },
    {
      "id": "1_17",
      "name": "Shipping in a Calm Sea off the Coast",
      "imageSrc": "level1/shipcalm.jpg",
      "cutSrc": "level1/cut/shipcalm.jpg",
      "author": "ANDERSON, William",
      "year": "1803"
    },
    {
      "id": "1_18",
      "name": "Shipping on the Thames off Deptford",
      "imageSrc": "level1/shipping.jpg",
      "cutSrc": "level1/cut/shipping.jpg",
      "author": "ANDERSON, William",
      "year": "1825"
    },
    {
      "id": "1_19",
      "name": "Italianate Coastal Landscape",
      "imageSrc": "level1/landsca3.jpg",
      "cutSrc": "level1/cut/landsca3.jpg",
      "author": "ANESI, Paolo",
      "year": "XVIII century"
    },
    {
      "id": "1_20",
      "name": "Tiber Bridge in Rome",
      "imageSrc": "level1/rome.jpg",
      "cutSrc": "level1/cut/rome.jpg",
      "author": "ANESI, Paolo",
      "year": "XVIII century"
    },
    {
      "id": "1_21",
      "name": "View of the Roman Campagna",
      "imageSrc": "level1/rome1.jpg",
      "cutSrc": "level1/cut/rome1.jpg",
      "author": "ANESI, Paolo",
      "year": "XVIII century"
    },
    {
      "id": "1_22",
      "name": "Harbour Scene",
      "imageSrc": "level1/scene.jpg",
      "cutSrc": "level1/cut/scene.jpg",
      "author": "ANESI, Paolo",
      "year": "XVIII century"
    },
    {
      "id": "1_23",
      "name": "View of Tivoli and the Roman Campagna",
      "imageSrc": "level1/tivoli.jpg",
      "cutSrc": "level1/cut/tivoli.jpg",
      "author": "ANESI, Paolo",
      "year": "XVIII century"
    },
    {
      "id": "1_24",
      "name": "The Western Railway Leaving Paris",
      "imageSrc": "level1/railway.jpg",
      "cutSrc": "level1/cut/railway.jpg",
      "author": "ANGRAND, Charles",
      "year": "1886"
    },
    {
      "id": "1_25",
      "name": "Landscape with a Musician",
      "imageSrc": "level1/landscap.jpg",
      "cutSrc": "level1/cut/landscap.jpg",
      "author": "APSHOVEN, Thomas van",
      "year": "XVII century"
    },
    {
      "id": "1_26",
      "name": "Edge of a Wood",
      "imageSrc": "level1/edgewood.jpg",
      "cutSrc": "level1/cut/edgewood.jpg",
      "author": "ARTHOIS, Jacques d'",
      "year": "XVII century"
    },
    {
      "id": "1_27",
      "name": "An Extensive Wooded Landscape with Travellers on a Path",
      "imageSrc": "level1/extensiv_1.jpg",
      "cutSrc": "level1/cut/extensiv_1.jpg",
      "author": "ARTHOIS, Jacques d'",
      "year": "XVII century"
    },
    {
      "id": "1_28",
      "name": "Wooded Landscape",
      "imageSrc": "level1/landscap_1.jpg",
      "cutSrc": "level1/cut/landscap_1.jpg",
      "author": "ARTHOIS, Jacques d'",
      "year": "XVII century"
    },
    {
      "id": "1_29",
      "name": "Wooded Landscape",
      "imageSrc": "level1/woodedla.jpg",
      "cutSrc": "level1/cut/woodedla.jpg",
      "author": "ARTHOIS, Jacques d'",
      "year": "XVII century"
    },
    {
      "id": "1_30",
      "name": "The Delft City Wall with the Houttuinen",
      "imageSrc": "level1/citywall.jpg",
      "cutSrc": "level1/cut/citywall.jpg",
      "author": "ASCH, Pieter Jansz.van",
      "year": "1650"
    },
    {
      "id": "1_31",
      "name": "River Landscape",
      "imageSrc": "level1/river_la.jpg",
      "cutSrc": "level1/cut/river_la.jpg",
      "author": "ASCH, Pieter Jansz. van",
      "year": "1640"
    },
    {
      "id": "1_32",
      "name": "View of Killarney",
      "imageSrc": "level1/kilarney.jpg",
      "cutSrc": "level1/cut/kilarney.jpg",
      "author": "ASHFORD, William",
      "year": "1778"
    },
    {
      "id": "1_33",
      "name": "Landscape with Waterfall and Farm",
      "imageSrc": "level1/waterfal.jpg",
      "cutSrc": "level1/cut/waterfal.jpg",
      "author": "ASSCHE, Henri van",
      "year": "1806"
    },
     {
      "id": "1_34",
      "name": "Winter Landscape",
       "imageSrc": "level1/winterla_1.jpg",
       "cutSrc": "level1/cut/winterla_1.jpg",
      "author": "ASSCHE, Henri van",
      "year": "1814"
    },
    {
      "id": "1_35",
      "name": "Coastal Scene with Resting Riders",
      "imageSrc": "level1/coastal.jpg",
      "cutSrc": "level1/cut/coastal.jpg",
      "author": "ASSELYN, Jan",
      "year": "1652"
    },
     {
      "id": "1_36",
      "name": "Italianate Landscape with a River and an Arched Bridge",
       "imageSrc": "level1/italiana.jpg",
       "cutSrc": "level1/cut/italiana.jpg",
      "author": "ASSELYN, Jan",
      "year": "1648"
    },
    {
      "id": "1_37",
      "name": "Italianate Landscape with Peasants and Animals Fording a River",
      "imageSrc": "level1/italianb.jpg",
      "cutSrc": "level1/cut/italianb.jpg",
      "author": "ASSELYN, Jan",
      "year": "1640-45"
    },
    {
      "id": "1_38",
      "name": "Landscape with Frozen River",
      "imageSrc": "level1/landscap_2.jpg",
      "cutSrc": "level1/cut/landscap_2.jpg",
      "author": "AVERCAMP, Barend",
      "year": "1655"
    },
    {
      "id": "1_39",
      "name": "Ice Landscape",
      "imageSrc": "level1/ice_land.jpg",
      "cutSrc": "level1/cut/ice_land.jpg",
      "author": "AVERCAMP, Hendrick",
      "year": "XVII century"
    },
    {
      "id": "1_40",
      "name": "Arabs on Horseback",
      "imageSrc": "level1/arabs.jpg",
      "cutSrc": "level1/cut/arabs.jpg",
      "author": "AZEGLIO, Massimo Taparelli, Marquis d'",
      "year": "1840"
    },
    {
      "id": "1_41",
      "name": "Ships in Distress off a Rocky Coast",
      "imageSrc": "level1/distress.jpg",
      "cutSrc": "level1/cut/distress.jpg",
      "author": "BACKHUYSEN, Ludolf",
      "year": "1667"
    },
    {
      "id": "1_42",
      "name": "A Fishing Pink",
      "imageSrc": "level1/fishing.jpg",
      "cutSrc": "level1/cut/fishing.jpg",
      "author": "BACKHUYSEN, Ludolf",
      "year": "1680"
    },
    {
      "id": "1_43",
      "name": "Shipping by the Dutch Coast",
      "imageSrc": "level1/shipping_1.jpg",
      "cutSrc": "level1/cut/shipping_1.jpg",
      "author": "BACKHUYSEN, Ludolf",
      "year": "XVII century"
    },
    {
      "id": "1_44",
      "name": "View from the Nieuwe Maas River towards the City of Vlaardingen",
      "imageSrc": "level1/viewvlaa.jpg",
      "cutSrc": "level1/cut/viewvlaa.jpg",
      "author": "BACKHUYSEN, Ludolf",
      "year": "1680s"
    },
    {
      "id": "1_45",
      "name": "Dutch Vessels off a Coastline on a Breezy Day",
      "imageSrc": "level1/vessels1.jpg",
      "cutSrc": "level1/cut/vessels1.jpg",
      "author": "BACKHUYSEN, Ludolf",
      "year": "1680"
    },
  ],
  level2: [
    {
      "id": "2_01",
      "name": "Italianate Landscape With Travellers",
      "imageSrc": "level2/2_01.jpg",
      "cutSrc": "level2/cut/2_01.jpg",
      "author": "BARKER, Thomas",
      "year": "1793"
    },
    {
      "id": "2_02",
      "name": "Landscape with a Watermill",
      "imageSrc": "level2/2_02.jpg",
      "cutSrc": "level2/cut/2_02.jpg",
      "author": "BARRET, George",
      "year": "1728",
    },
    {
      "id": "2_03",
      "name": "Winter",
      "imageSrc": "level2/2_03.jpg",
      "cutSrc": "level2/cut/2_03.jpg",
      "author": "BASSANO, Francesco",
      "year": "1577-78",
    },
    {
      "id": "2_04",
      "name": "Skating at Sloten, near Amsterdam",
      "imageSrc": "level2/2_04.jpg",
      "cutSrc": "level2/cut/2_04.jpg",
      "author": "BEERSTRATEN, Jan Abrahamsz.",
      "year": "1660-65",
    },
    {
      "id": "2_05",
      "name": "The Castle of Batavia, Seen from Kali Besar West",
      "imageSrc": "level2/2_05.jpg",
      "cutSrc": "level2/cut/2_05.jpg",
      "author": "BEECKMAN, Andries",
      "year": "1656",
    },
    {
      "id": "2_06",
      "name": "The Hague Vegetable Market in Winter",
      "imageSrc": "level2/2_06.jpg",
      "cutSrc": "level2/cut/2_06.jpg",
      "author": "BEEST, Sybrand van",
      "year": "1650",
    },
    {
      "id": "2_07",
      "name": "Seashore",
      "imageSrc": "level2/2_07.jpg",
      "cutSrc": "level2/cut/2_07.jpg",
      "author": "BEGEYN, Abraham Jansz.",
      "year": "1662",
    },
    {
      "id": "2_08",
      "name": "Banks of the Oise",
      "imageSrc": "level2/2_08.jpg",
      "cutSrc": "level2/cut/2_08.jpg",
      "author": "BÉLIARD, Edouard",
      "year": "1875",
    },
    {
      "id": "2_09",
      "name": "View of the Grand Canal at San Stae",
      "imageSrc": "level2/2_09.jpg",
      "cutSrc": "level2/cut/2_09.jpg",
      "author": "BELLOTTO, Bernardo",
      "year": "1738-40",
    },
    {
      "id": "2_10",
      "name": "The Piazza della Signoria in Florence",
      "imageSrc": "level2/2_10.jpg",
      "cutSrc": "level2/cut/2_10.jpg",
      "author": "BELLOTTO, Bernardo",
      "year": "1740",
    },
    {
      "id": "2_11",
      "name": "View of the Villa Cagnola at Gazzada near Varese",
      "imageSrc": "level2/2_11.jpg",
      "cutSrc": "level2/cut/2_11.jpg",
      "author": "BELLOTTO, Bernardo",
      "year": "1744",
    },
    {
      "id": "2_12",
      "name": "The Campagna at Lungezza near Rome",
      "imageSrc": "level2/2_12.jpg",
      "cutSrc": "level2/cut/2_12.jpg",
      "author": "BENOUVILLE, Jean-Achille",
      "year": "1848",
    },
    {
      "id": "2_13",
      "name": "A Southern Harbour Scene",
      "imageSrc": "level2/2_13.jpg",
      "cutSrc": "level2/cut/2_13.jpg",
      "author": "BERCHEM, Nicolaes",
      "year": "1657-59",
    },
    {
      "id": "2_14",
      "name": "A Harbour Scene",
      "imageSrc": "level2/2_14.jpg",
      "cutSrc": "level2/cut/2_14.jpg",
      "author": "BERCHEM, Nicolaes",
      "year": "1665-70",
    },
    {
      "id": "2_15",
      "name": "The Invalides, Paris",
      "imageSrc": "level2/2_15.jpg",
      "cutSrc": "level2/cut/2_15.jpg",
      "author": "CANELLA, Giuseppe",
      "year": "1830",
    },
    {
      "id": "2_16",
      "name": "View of Ariccia with the Sea in the Background",
      "imageSrc": "level2/2_16.jpg",
      "cutSrc": "level2/cut/2_16.jpg",
      "author": "CATEL, Franz Ludwig",
      "year": "1821-25",
    },
    {
      "id": "2_17",
      "name": "The Miracles of the Penitent St Mary",
      "imageSrc": "level2/2_17.jpg",
      "cutSrc": "level2/cut/2_17.jpg",
      "author": "CHAMPAIGNE, Philippe de",
      "year": "1656",
    },
    {
      "id": "2_18",
      "name": "Autumn",
      "imageSrc": "level2/2_18.jpg",
      "cutSrc": "level2/cut/2_18.jpg",
      "author": "CHURCH, Frederic Edwin",
      "year": "1875",
    },
    {
      "id": "2_19",
      "name": "Landscape with Merchants",
      "imageSrc": "level2/2_19.jpg",
      "cutSrc": "level2/cut/2_19.jpg",
      "author": "CLAUDE LORRAIN",
      "year": "1630",
    },
    {
      "id": "2_20",
      "name": "Landscape with Shepherds",
      "imageSrc": "level2/2_20.jpg",
      "cutSrc": "level2/cut/2_20.jpg",
      "author": "CLAUDE LORRAIN",
      "year": "1645-46",
    },
    {
      "id": "2_21",
      "name": "The Hay-Wain",
      "imageSrc": "level2/2_21.jpg",
      "cutSrc": "level2/cut/2_21.jpg",
      "author": "CONSTABLE, John",
      "year": "1821",
    },
    {
      "id": "2_22",
      "name": "The Bridge at Mantes",
      "imageSrc": "level2/2_22.jpg",
      "cutSrc": "level2/cut/2_22.jpg",
      "author": "COROT, Jean-Baptiste Camille",
      "year": "1868-70",
    },
    {
      "id": "2_23",
      "name": "View of Frankfurt am Main",
      "imageSrc": "level2/2_23.jpg",
      "cutSrc": "level2/cut/2_23.jpg",
      "author": "COURBET, Gustave",
      "year": "1858",
    },
    {
      "id": "2_24",
      "name": "The Cliff at Étretat after the Storm",
      "imageSrc": "level2/2_24.jpg",
      "cutSrc": "level2/cut/2_24.jpg",
      "author": "COURBET, Gustave",
      "year": "1869-70",
    },
    {
      "id": "2_25",
      "name": "Greenwood Lake",
      "imageSrc": "level2/2_25.jpg",
      "cutSrc": "level2/cut/2_25.jpg",
      "author": "CROPSEY, Jasper Francis",
      "year": "1870",
    },
    {
      "id": "2_26",
      "name": "The Avenue at Meerdervoort",
      "imageSrc": "level2/2_26.jpg",
      "cutSrc": "level2/cut/2_26.jpg",
      "author": "CUYP, Aelbert",
      "year": "1650-52",
    },
    {
      "id": "2_27",
      "name": "The Valkhof at Nijmegen",
      "imageSrc": "level2/2_27.jpg",
      "cutSrc": "level2/cut/2_27.jpg",
      "author": "CUYP, Aelbert",
      "year": "1652-54",
    },
    {
      "id": "2_28",
      "name": "Morning after a Stormy Night",
      "imageSrc": "level2/2_28.jpg",
      "cutSrc": "level2/cut/2_28.jpg",
      "author": "DAHL, Johan Christian Clausen",
      "year": "1819",
    },
    {
      "id": "2_29",
      "name": "Eruption of the Vesuvius",
      "imageSrc": "level2/2_29.jpg",
      "cutSrc": "level2/cut/2_29.jpg",
      "author": "DAHL, Johan Christian Clausen",
      "year": "1823",
    },
    {
      "id": "2_30",
      "name": "Landscape with Shepherds",
      "imageSrc": "level2/2_30.jpg",
      "cutSrc": "level2/cut/2_30.jpg",
      "author": "DALEM, Cornelis van",
      "year": "1550-60",
    },
    {
      "id": "2_31",
      "name": "The Barges",
      "imageSrc": "level2/2_31.jpg",
      "cutSrc": "level2/cut/2_31.jpg",
      "author": "DAUBIGNY, Charles-François",
      "year": "1865",
    },
    {
      "id": "2_32",
      "name": "The Sea from the Heights of Dieppe",
      "imageSrc": "level2/2_32.jpg",
      "cutSrc": "level2/cut/2_32.jpg",
      "author": "DELACROIX, Eugène",
      "year": "1852",
    },
    {
      "id": "2_33",
      "name": "Architectural Capriccio with Jephthah and His Daughter",
      "imageSrc": "level2/2_33.jpg",
      "cutSrc": "level2/cut/2_33.jpg",
      "author": "DELEN, Dirck van",
      "year": "1633",
    },
    {
      "id": "2_34",
      "name": "The Pont Neuf and the Quai des Orfèvres, from the Place du Pont Neuf",
      "imageSrc": "level2/2_34.jpg",
      "cutSrc": "level2/cut/2_34.jpg",
      "author": "DELPY, Hippolyte-Camille",
      "year": "1875",
    },
    {
      "id": "2_35",
      "name": "Houses at a Millrace",
      "imageSrc": "level2/2_35.jpg",
      "cutSrc": "level2/cut/2_35.jpg",
      "author": "DEPPE, Ludwig",
      "year": "1820",
    },
    {
      "id": "2_36",
      "name": "The Forest in Fontainebleau",
      "imageSrc": "level2/2_36.jpg",
      "cutSrc": "level2/cut/2_36.jpg",
      "author": "DIAZ DE LA PEÑA, Narcisse Virgile",
      "year": "1867",
    },
    {
      "id": "2_37",
      "name": "View from the Giudecca, Venice",
      "imageSrc": "level2/2_37.jpg",
      "cutSrc": "level2/cut/2_37.jpg",
      "author": "DOMENICHINI, Apollonio",
      "year": "1744",
    },
    {
      "id": "2_38",
      "name": "Landscape with Ford",
      "imageSrc": "level2/2_38.jpg",
      "cutSrc": "level2/cut/2_38.jpg",
      "author": "DOMENICHINO",
      "year": "1603",
    },
    {
      "id": "2_39",
      "name": "Gorge",
      "imageSrc": "level2/2_39.jpg",
      "cutSrc": "level2/cut/2_39.jpg",
      "author": "DORÉ, Gustave",
      "year": "1878",
    },
    {
      "id": "2_40",
      "name": "Dolmen on Brandsø",
      "imageSrc": "level2/2_40.jpg",
      "cutSrc": "level2/cut/2_40.jpg",
      "author": "DREYER, Dankvart",
      "year": "1842",
    },
    {
      "id": "2_41",
      "name": "Village Scene",
      "imageSrc": "level2/2_41.jpg",
      "cutSrc": "level2/cut/2_41.jpg",
      "author": "DROOCHSLOOT, Joost Cornelisz.",
      "year": "1623",
    },
  ],
  level3: [
    {
      "id": "3_01",
      "name": "Return from the Falcon Hunt",
      "imageSrc": "level3/3_01.jpg",
      "cutSrc": "level3/cut/3_01.jpg",
      "author": "BERCHEM, Nicolaes",
      "year": "1650"
    },
    {
      "id": "3_02",
      "name": "Rocky Landscape with Antique Ruins",
      "imageSrc": "level3/3_02.jpg",
      "cutSrc": "level3/cut/3_02.jpg",
      "author": "BERCHEM, Nicolaes",
      "year": "1657"
    },
    {
      "id": "3_03",
      "name": "The Banks of the Manzanares River",
      "imageSrc": "level3/3_03.jpg",
      "cutSrc": "level3/cut/3_03.jpg",
      "author": "BERUETE, Aureliano",
      "year": "1878"
    },
    {
      "id": "3_04",
      "name": "The Augustan Bridge",
      "imageSrc": "level3/3_04.jpg",
      "cutSrc": "level3/cut/3_04.jpg",
      "author": "BIDAULD, Jean-Joseph-Xavier",
      "year": "1790"
    },
    {
      "id": "3_05",
      "name": "Landscape with Sarcophagus",
      "imageSrc": "level3/3_05.jpg",
      "cutSrc": "level3/cut/3_05.jpg",
      "author": "BLANCHET, Thomas",
      "year": "1650-1652"
    },
    {
      "id": "3_06",
      "name": "Building the Devil's Bridge",
      "imageSrc": "level3/3_06.jpg",
      "cutSrc": "level3/cut/3_06.jpg",
      "author": "BLECHEN, Karl",
      "year": "1833"
    },
    {
      "id": "3_07",
      "name": "Stag Hunting in the Dunes",
      "imageSrc": "level3/3_07.jpg",
      "cutSrc": "level3/cut/3_07.jpg",
      "author": "BLEKER, Gerrit Claesz",
      "year": "1625-1629"
    },
    {
      "id": "3_08",
      "name": "Landscape with the Prophet Elijah in the Desert",
      "imageSrc": "level3/3_08.jpg",
      "cutSrc": "level3/cut/3_08.jpg",
      "author": "BLOEMAERT, Abraham",
      "year": "1610"
    },
    {
      "id": "3_09",
      "name": "River Landscape with a Town and Fortified Tower",
      "imageSrc": "level3/3_09.jpg",
      "cutSrc": "level3/cut/3_09.jpg",
      "author": "GOYEN, Jan van",
      "year": "1633"
    },
    {
      "id": "3_10",
      "name": "The Champion Single Sculls (Max Schmitt in a Single Scull)",
      "imageSrc": "level3/3_10.jpg",
      "cutSrc": "level3/cut/3_10.jpg",
      "author": "EAKINS, Thomas",
      "year": "1871"
    },
    {
      "id": "3_11",
      "name": "A Frigate, Calm Seas",
      "imageSrc": "level3/3_11.jpg",
      "cutSrc": "level3/cut/3_11.jpg",
      "author": "ECKARDT, Christian Frederik Emil",
      "year": "1867"
    },
    {
      "id": "3_12",
      "name": "A Brig under Sail in Fair Weather",
      "imageSrc": "level3/3_12.jpg",
      "cutSrc": "level3/cut/3_12.jpg",
      "author": "ECKERSBERG, Christoffer Wilhelm",
      "year": "1844-1845"
    },
    {
      "id": "3_13",
      "name": "The Cloisters, San Lorenzo fuori le mura",
      "imageSrc": "level3/3_13.jpg",
      "cutSrc": "level3/cut/3_13.jpg",
      "author": "ECKERSBERG, Christoffer Wilhelm",
      "year": "1824"
    },
    {
      "id": "3_14",
      "name": "View of Amsterdam",
      "imageSrc": "level3/3_14.jpg",
      "cutSrc": "level3/cut/3_14.jpg",
      "author": "EKELS, Jan the Elder",
      "year": "1750-1780"
    },
    {
      "id": "3_15",
      "name": "View of the Zuidsingel, Amersfoort",
      "imageSrc": "level3/3_15.jpg",
      "cutSrc": "level3/cut/3_15.jpg",
      "author": "EKELS, Jan the Elder",
      "year": "1760-1780"
    },
    {
      "id": "3_16",
      "name": "Seascape",
      "imageSrc": "level3/3_16.jpg",
      "cutSrc": "level3/cut/3_16.jpg",
      "author": "EYCK, Gaspard van",
      "year": "1650"
    },
    {
      "id": "3_17",
      "name": "Southern Pastoral",
      "imageSrc": "level3/3_17.jpg",
      "cutSrc": "level3/cut/3_17.jpg",
      "author": "BERCHEM, Nicolaes",
      "year": "1658"
    },
    {
      "id": "3_18",
      "name": "Winter Landscape",
      "imageSrc": "level3/3_18.jpg",
      "cutSrc": "level3/cut/3_18.jpg",
      "author": "BERGHE, Christoffel van den",
      "year": "1615-1620"
    },
    {
      "id": "3_19",
      "name": "The Silver Seascape",
      "imageSrc": "level3/3_19.jpg",
      "cutSrc": "level3/cut/3_19.jpg",
      "author": "BEYEREN, Abraham van",
      "year": "1640-1650"
    },
    {
      "id": "3_20",
      "name": "View of the Isle of Sora",
      "imageSrc": "level3/3_20.jpg",
      "cutSrc": "level3/cut/3_20.jpg",
      "author": "BIDAULD, Jean-Joseph-Xavier",
      "year": "1793"
    },
    {
      "id": "3_21",
      "name": "Cavalry Battle Scene",
      "imageSrc": "level3/3_21.jpg",
      "cutSrc": "level3/cut/3_21.jpg",
      "author": "BLEKER, Gerrit Claesz",
      "year": "1656"
    },
    {
      "id": "3_22",
      "name": "Landscape with the Parable of the Tares among the Wheat",
      "imageSrc": "level3/3_22.jpg",
      "cutSrc": "level3/cut/3_22.jpg",
      "author": "BLOEMAERT, Abraham",
      "year": "1624"
    },
    {
      "id": "3_23",
      "name": "A Scene in the Roman Campagna",
      "imageSrc": "level3/3_23.jpg",
      "cutSrc": "level3/cut/3_23.jpg",
      "author": "BLOEMEN, Jan Frans van",
      "year": "1736"
    },
    {
      "id": "3_24",
      "name": "Naples, a View of Mergellina",
      "imageSrc": "level3/3_24.jpg",
      "cutSrc": "level3/cut/3_24.jpg",
      "author": "BLOEMEN, Jan Frans van",
      "year": "1777"
    },
    {
      "id": "3_25",
      "name": "River Landscape",
      "imageSrc": "level3/3_25.jpg",
      "cutSrc": "level3/cut/3_25.jpg",
      "author": "GAINSBOROUGH, Thomas",
      "year": "1768-1770"
    },
    {
      "id": "3_26",
      "name": "The Seine in Paris between the Pont d'Iéna and Pont de Grenelle",
      "imageSrc": "level3/3_26.jpg",
      "cutSrc": "level3/cut/3_26.jpg",
      "author": "GAUGUIN, Paul",
      "year": "1875"
    },
    {
      "id": "3_27",
      "name": "A Corroboree in Van Diemen's Land",
      "imageSrc": "level3/3_27.jpg",
      "cutSrc": "level3/cut/3_27.jpg",
      "author": "GLOVER, John",
      "year": "1840"
    },
    {
      "id": "3_28",
      "name": "Beach at Scheveningen in Stormy Weather",
      "imageSrc": "level3/3_28.jpg",
      "cutSrc": "level3/cut/3_28.jpg",
      "author": "GOGH, Vincent van",
      "year": "1882"
    },
    {
      "id": "3_29",
      "name": "Farmhouses among Trees",
      "imageSrc": "level3/3_29.jpg",
      "cutSrc": "level3/cut/3_29.jpg",
      "author": "GOGH, Vincent van",
      "year": "1883"
    },
    {
      "id": "3_30",
      "name": "Two Peasant Women in the Peat Field",
      "imageSrc": "level3/3_30.jpg",
      "cutSrc": "level3/cut/3_30.jpg",
      "author": "GOGH, Vincent van",
      "year": "1883"
    },
    {
      "id": "3_31",
      "name": "The Parsonage Garden at Nuenen in Spring",
      "imageSrc": "level3/3_31.jpg",
      "cutSrc": "level3/cut/3_31.jpg",
      "author": "GOGH, Vincent van",
      "year": "1884"
    },
    {
      "id": "3_32",
      "name": "In the Jardin du Luxembourg",
      "imageSrc": "level3/3_32.jpg",
      "cutSrc": "level3/cut/3_32.jpg",
      "author": "GOGH, Vincent van",
      "year": "1886"
    },
    {
      "id": "3_33",
      "name": "View of Paris from Montmartre",
      "imageSrc": "level3/3_33.jpg",
      "cutSrc": "level3/cut/3_33.jpg",
      "author": "GOGH, Vincent van",
      "year": "1886"
    },
    {
      "id": "3_34",
      "name": "Olive Picking",
      "imageSrc": "level3/3_34.jpg",
      "cutSrc": "level3/cut/3_34.jpg",
      "author": "GOGH, Vincent van",
      "year": "1889"
    },
    {
      "id": "3_35",
      "name": "Landscape with Carriage and Train in the Background",
      "imageSrc": "level3/3_35.jpg",
      "cutSrc": "level3/cut/3_35.jpg",
      "author": "GOGH, Vincent van",
      "year": "1890"
    },
    {
      "id": "3_36",
      "name": "Wheat Field under Clouded Sky",
      "imageSrc": "level3/3_36.jpg",
      "cutSrc": "level3/cut/3_36.jpg",
      "author": "GOGH, Vincent van",
      "year": "1890"
    },
    {
      "id": "3_37",
      "name": "Wheat Field with Crows",
      "imageSrc": "level3/3_37.jpg",
      "cutSrc": "level3/cut/3_37.jpg",
      "author": "GOGH, Vincent van",
      "year": "1890"
    },
    {
      "id": "3_38",
      "name": "The Meadow of San Isidro on his Feast Day",
      "imageSrc": "level3/3_38.jpg",
      "cutSrc": "level3/cut/3_38.jpg",
      "author": "GOYA Y LUCIENTES, Francisco de",
      "year": "1788"
    },
    {
      "id": "3_39",
      "name": "Dune Landscape",
      "imageSrc": "level3/3_39.jpg",
      "cutSrc": "level3/cut/3_39.jpg",
      "author": "GOYEN, Jan van",
      "year": "1631"
    },
    {
      "id": "3_40",
      "name": "Haymaking",
      "imageSrc": "level3/3_40.jpg",
      "cutSrc": "level3/cut/3_40.jpg",
      "author": "GOYEN, Jan van",
      "year": "1630"
    },
  ],
  level4: [
    {
      "id": "4_01",
      "name": "The Korte Vijverberg at The Hague Seen from the Tournooiveld",
      "imageSrc": "level4/4_01.jpg",
      "cutSrc": "level4/cut/4_01.jpg",
      "author": "FARGUE, Jacob Elias La",
      "year": "1761"
    },
    {
      "id": "4_02",
      "name": "Ideal Landscape near Rocca Canterana",
      "imageSrc": "level4/4_02.jpg",
      "cutSrc": "level4/cut/4_02.jpg",
      "author": "FOHR, Carl Philipp",
      "year": "1818"
    },
    {
      "id": "4_03",
      "name": "Young Woman and a Herdsman in a Landscape",
      "imageSrc": "level4/4_03.jpg",
      "cutSrc": "level4/cut/4_03.jpg",
      "author": "FRAGONARD, Jean-Honore",
      "year": "1765"
    },
    {
      "id": "4_04",
      "name": "View of the Falls at Tivoli",
      "imageSrc": "level4/4_04.jpg",
      "cutSrc": "level4/cut/4_04.jpg",
      "author": "FREY, Johannes Jakob",
      "year": "1840s"
    },
    {
      "id": "4_05",
      "name": "Village Landscape in Morning Light (The Lone Tree)",
      "imageSrc": "level4/4_05.jpg",
      "cutSrc": "level4/cut/4_05.jpg",
      "author": "FRIEDRICH, Caspar David",
      "year": "1822"
    },
    {
      "id": "4_06",
      "name": "Dolmen in the Snow",
      "imageSrc": "level4/4_06.jpg",
      "cutSrc": "level4/cut/4_06.jpg",
      "author": "FRIEDRICH, Caspar David",
      "year": "1807"
    },
    {
      "id": "4_07",
      "name": "The Liris Waterfalls near Isola di Sora",
      "imageSrc": "level4/4_07.jpg",
      "cutSrc": "level4/cut/4_07.jpg",
      "author": "FRIES, Ernst",
      "year": "1830"
    },
    {
      "id": "4_08",
      "name": "River Landscape",
      "imageSrc": "level4/4_08.jpg",
      "cutSrc": "level4/cut/4_08.jpg",
      "author": "GAINSBOROUGH, Thomas",
      "year": "1770"
    },
    {
      "id": "4_09",
      "name": "Marine View (Seascape with Porpoises)",
      "imageSrc": "level4/4_09.jpg",
      "cutSrc": "level4/cut/4_09.jpg",
      "author": "MANET, Edouard",
      "year": "1864"
    },
    {
      "id": "4_10",
      "name": "Country House in Rueil",
      "imageSrc": "level4/4_10.jpg",
      "cutSrc": "level4/cut/4_10.jpg",
      "author": "MANET, Edouard",
      "year": "1882"
    },
    {
      "id": "4_11",
      "name": "The Rialto Bridge from the Riva del Vin",
      "imageSrc": "level4/4_11.jpg",
      "cutSrc": "level4/cut/4_11.jpg",
      "author": "MARIESCHI, Michele",
      "year": "1740s"
    },
    {
      "id": "4_12",
      "name": "Santa Maria della Salute, Venice",
      "imageSrc": "level4/4_12.jpg",
      "cutSrc": "level4/cut/4_12.jpg",
      "author": "MARIESCHI, Michele",
      "year": "1740"
    },
    {
      "id": "4_13",
      "name": "Landscape with Charcoal Burners",
      "imageSrc": "level4/4_13.jpg",
      "cutSrc": "level4/cut/4_13.jpg",
      "author": "MARKÓ, András",
      "year": "1861"
    },
    {
      "id": "4_14",
      "name": "Italian Landscape with Viaduct and Rainbow",
      "imageSrc": "level4/4_14.jpg",
      "cutSrc": "level4/cut/4_14.jpg",
      "author": "MARKÓ, Károly the Elder",
      "year": "1838"
    },
    {
      "id": "4_15",
      "name": "In the Vicinity of Pisa",
      "imageSrc": "level4/4_15.jpg",
      "cutSrc": "level4/cut/4_15.jpg",
      "author": "MARKÓ, Károly the Younger",
      "year": "1878"
    },
    {
      "id": "4_16",
      "name": "Ile de Bréhat",
      "imageSrc": "level4/4_16.jpg",
      "cutSrc": "level4/cut/4_16.jpg",
      "author": "MAUFRA, Maxime",
      "year": "1892"
    },
    {
      "id": "4_17",
      "name": "Kilchurn Castle, Loch Awe",
      "imageSrc": "level4/4_17.jpg",
      "cutSrc": "level4/cut/4_17.jpg",
      "author": "MCCULLOCH, Horatio",
      "year": "1854"
    },
    {
      "id": "4_18",
      "name": "Under the Cross",
      "imageSrc": "level4/4_18.jpg",
      "cutSrc": "level4/cut/4_18.jpg",
      "author": "MEDNYÁNSZKY, László",
      "year": "1892"
    },
    {
      "id": "4_19",
      "name": "Landscape Inspired by the View of Frascati",
      "imageSrc": "level4/4_19.jpg",
      "cutSrc": "level4/cut/4_19.jpg",
      "author": "MICHALLON, Achille-Etna",
      "year": "1822"
    },
    {
      "id": "4_20",
      "name": "The Handelskom at Bruges",
      "imageSrc": "level4/4_20.jpg",
      "cutSrc": "level4/cut/4_20.jpg",
      "author": "MINDERHOUT, Hendrik van",
      "year": "1665"
    },
    {
      "id": "4_21",
      "name": "Extensive Rhenish Landscape",
      "imageSrc": "level4/4_21.jpg",
      "cutSrc": "level4/cut/4_21.jpg",
      "author": "MINDERHOUT, Hendrik van",
      "year": "1653"
    },
    {
      "id": "4_22",
      "name": "River Landscape",
      "imageSrc": "level4/4_22.jpg",
      "cutSrc": "level4/cut/4_22.jpg",
      "author": "MIROU, Anton",
      "year": "1610s"
    },
    {
      "id": "4_23",
      "name": "Woman in the Garden",
      "imageSrc": "level4/4_23.jpg",
      "cutSrc": "level4/cut/4_23.jpg",
      "author": "MONET, Claude",
      "year": "1866"
    },
    {
      "id": "4_24",
      "name": "On the Bank of the Seine, Bennecourt",
      "imageSrc": "level4/4_24.jpg",
      "cutSrc": "level4/cut/4_24.jpg",
      "author": "MONET, Claude",
      "year": "1868"
    },
    {
      "id": "4_25",
      "name": "Monet's Garden at Argenteuil",
      "imageSrc": "level4/4_25.jpg",
      "cutSrc": "level4/cut/4_25.jpg",
      "author": "MONET, Claude",
      "year": "1873"
    },
    {
      "id": "4_26",
      "name": "Three Fishing Boats",
      "imageSrc": "level4/4_26.jpg",
      "cutSrc": "level4/cut/4_26.jpg",
      "author": "MONET, Claude",
      "year": "1886"
    },
    {
      "id": "4_27",
      "name": "Haystacks at Giverny",
      "imageSrc": "level4/4_27.jpg",
      "cutSrc": "level4/cut/4_27.jpg",
      "author": "MONET, Claude",
      "year": "1886"
    },
    {
      "id": "4_28",
      "name": "Water Lily Pond, Harmony in Rose",
      "imageSrc": "level4/4_28.jpg",
      "cutSrc": "level4/cut/4_28.jpg",
      "author": "MONET, Claude",
      "year": "1900"
    },
    {
      "id": "4_29",
      "name": "Water Lilies",
      "imageSrc": "level4/4_29.jpg",
      "cutSrc": "level4/cut/4_29.jpg",
      "author": "MONET, Claude",
      "year": "1914"
    },
  ],
  level5: [
    {
      "id": "5_01",
      "name": "A Garden Party",
      "imageSrc": "level5/5_01.jpg",
      "cutSrc": "level5/cut/5_01.jpg",
      "author": "HALS, Dirck",
      "year": "1627"
    },
    {
      "id": "5_02",
      "name": "Family Group in a Landscape",
      "imageSrc": "level5/5_02.jpg",
      "cutSrc": "level5/cut/5_02.jpg",
      "author": "HALS, Frans",
      "year": "c. 1648"
    },
    {
      "id": "5_03",
      "name": "View of the Island of Capri",
      "imageSrc": "level5/5_03.jpg",
      "cutSrc": "level5/cut/5_03.jpg",
      "author": "HARPIGNIES, Henri-Joseph",
      "year": "1853"
    },
    {
      "id": "5_04",
      "name": "The Return from the War",
      "imageSrc": "level5/5_04.jpg",
      "cutSrc": "level5/cut/5_04.jpg",
      "author": "HARPIGNIES, Henri-Joseph",
      "year": "1859"
    },
    {
      "id": "5_05",
      "name": "River Landscape with a Village in the Background",
      "imageSrc": "level5/5_05.jpg",
      "cutSrc": "level5/cut/5_05.jpg",
      "author": "HARPIGNIES, Henri-Joseph",
      "year": "1877"
    },
    {
      "id": "5_06",
      "name": "River Banks, Auvergne",
      "imageSrc": "level5/5_06.jpg",
      "cutSrc": "level5/cut/5_06.jpg",
      "author": "HARPIGNIES, Henri-Joseph",
      "year": "1860"
    },
    {
      "id": "5_07",
      "name": "On Riviera",
      "imageSrc": "level5/5_07.jpg",
      "cutSrc": "level5/cut/5_07.jpg",
      "author": "HARPIGNIES, Henri-Joseph",
      "year": "1891"
    },
    {
      "id": "5_08",
      "name": "The Courtyard of the Customs House",
      "imageSrc": "level5/5_08.jpg",
      "cutSrc": "level5/cut/5_08.jpg",
      "author": "LÉPICIÉ, Nicolas-Bernard",
      "year": "1775"
    },
    {
      "id": "5_09",
      "name": "Still-Life",
      "imageSrc": "level5/5_09.jpg",
      "cutSrc": "level5/cut/5_09.jpg",
      "author": "HEEM, Jan Davidsz. de",
      "year": "1653"
    },
    {
      "id": "5_10",
      "name": "View from the Prater towards the Suburbs of Vienna",
      "imageSrc": "level5/5_10.jpg",
      "cutSrc": "level5/cut/5_10.jpg",
      "author": "HEIDELOFF, Josef",
      "year": "1781"
    },
    {
      "id": "5_11",
      "name": "The Bull Hunt in Campo San Polo",
      "imageSrc": "level5/5_11.jpg",
      "cutSrc": "level5/cut/5_11.jpg",
      "author": "HEINTZ, Joseph the Younger",
      "year": "1648"
    },
    {
      "id": "5_12",
      "name": "The Steeplechase",
      "imageSrc": "level5/5_12.jpg",
      "cutSrc": "level5/cut/5_12.jpg",
      "author": "HERRING, Benjamin Jr.",
      "year": "1869"
    },
    {
      "id": "5_13",
      "name": "The Entry of King Othon of Greece in Athens",
      "imageSrc": "level5/5_13.jpg",
      "cutSrc": "level5/cut/5_13.jpg",
      "author": "HESS, Peter von",
      "year": "1839"
    },
    {
      "id": "5_14",
      "name": "Landscape",
      "imageSrc": "level5/5_14.jpg",
      "cutSrc": "level5/cut/5_14.jpg",
      "author": "HONDECOETER, Gillis Claesz. d'",
      "year": "1620-22"
    },
    {
      "id": "5_15",
      "name": "View of the Monastery of El Escorial",
      "imageSrc": "level5/5_15.jpg",
      "cutSrc": "level5/cut/5_15.jpg",
      "author": "HOUASSE, Michel-Ange",
      "year": "1723"
    },
    {
      "id": "5_16",
      "name": "The Grand Odalisque",
      "imageSrc": "level5/5_16.jpg",
      "cutSrc": "level5/cut/5_16.jpg",
      "author": "INGRES, Jean-Auguste-Dominique",
      "year": "1814"
    },
    {
      "id": "5_17",
      "name": "After a Storm",
      "imageSrc": "level5/5_17.jpg",
      "cutSrc": "level5/cut/5_17.jpg",
      "author": "ISABEY, Eugène",
      "year": "1869"
    },
    {
      "id": "5_18",
      "name": "View of La Iglesia y la Plaza de San Antonio, Aranjuez",
      "imageSrc": "level5/5_18.jpg",
      "cutSrc": "level5/cut/5_18.jpg",
      "author": "JOLI, Antonio",
      "year": "1753-54"
    },
    {
      "id": "5_19",
      "name": "Washington Crossing the Delaware",
      "imageSrc": "level5/5_19.jpg",
      "cutSrc": "level5/cut/5_19.jpg",
      "author": "LEUTZE, Emanuel Gottlieb",
      "year": "1851"
    },
    {
      "id": "5_20",
      "name": "The Royal Procession to the Church of Santa Maria di Piedigrotta",
      "imageSrc": "level5/5_20.jpg",
      "cutSrc": "level5/cut/5_20.jpg",
      "author": "JOLI, Antonio",
      "year": "c. 1770"
    },
    {
      "id": "5_21",
      "name": "Landscape with Cephalus and Procris",
      "imageSrc": "level5/5_21.jpg",
      "cutSrc": "level5/cut/5_21.jpg",
      "author": "KEIRINCKX, Alexander",
      "year": "c. 1620"
    },
    {
      "id": "5_22",
      "name": "Under the Birch Trees",
      "imageSrc": "level5/5_22.jpg",
      "cutSrc": "level5/cut/5_22.jpg",
      "author": "KLODT, Mikhail Konstantinovich",
      "year": "1874"
    },
    {
      "id": "5_23",
      "name": "The Musicians' Brawl",
      "imageSrc": "level5/5_23.jpg",
      "cutSrc": "level5/cut/5_23.jpg",
      "author": "LA TOUR, Georges de",
      "year": "1625-30"
    },
    {
      "id": "5_24",
      "name": "Engagement between Sir George Brydges Rodney and the Spanish Squadron",
      "imageSrc": "level5/5_24.jpg",
      "cutSrc": "level5/cut/5_24.jpg",
      "author": "LUNY, Thomas",
      "year": "1782"
    },
    {
      "id": "5_25",
      "name": "Rinaldo's Farewell to Armida",
      "imageSrc": "level5/5_25.jpg",
      "cutSrc": "level5/cut/5_25.jpg",
      "author": "LANFRANCO, Giovanni",
      "year": "1614"
    },
    {
      "id": "5_26",
      "name": "The Excommunication of Robert the Pious",
      "imageSrc": "level5/5_26.jpg",
      "cutSrc": "level5/cut/5_26.jpg",
      "author": "LAURENS, Jean-Paul",
      "year": "1875"
    },
    {
      "id": "5_27",
      "name": "Bacchanal",
      "imageSrc": "level5/5_27.jpg",
      "cutSrc": "level5/cut/5_27.jpg",
      "author": "LAURI, Filippo",
      "year": "1675"
    },
    {
      "id": "5_28",
      "name": "Venus and Adonis",
      "imageSrc": "level5/5_28.jpg",
      "cutSrc": "level5/cut/5_28.jpg",
      "author": "LAURI, Filippo",
      "year": "1650s"
    },
    {
      "id": "5_29",
      "name": "View of Florence from Villa San Firenze, near San Miniato",
      "imageSrc": "level5/5_29.jpg",
      "cutSrc": "level5/cut/5_29.jpg",
      "author": "LEAR, Edward",
      "year": "1864"
    },
  ],
  level6: [
    {
      "id": "6_01",
      "name": "River in Winter",
      "imageSrc": "level6/6_01.jpg",
      "cutSrc": "level6/cut/6_01.jpg",
      "author": "NEER, Aert van der",
      "year": "c. 1645"
    },
    {
      "id": "6_02",
      "name": "Card-Sharpers",
      "imageSrc": "level6/6_02.jpg",
      "cutSrc": "level6/cut/6_02.jpg",
      "author": "OOST, Jacob van, the Elder",
      "year": "1634"
    },
    {
      "id": "6_03",
      "name": "Farmhouse",
      "imageSrc": "level6/6_03.jpg",
      "cutSrc": "level6/cut/6_03.jpg",
      "author": "OUDRY, Jean-Baptiste",
      "year": "1750"
    },
    {
      "id": "6_04",
      "name": "An Elegant Company in an Interior",
      "imageSrc": "level6/6_04.jpg",
      "cutSrc": "level6/cut/6_04.jpg",
      "author": "PALAMEDESZ., Anthonie",
      "year": "1632-34"
    },
    {
      "id": "6_05",
      "name": "View of the Forum Looking towards the Capitol",
      "imageSrc": "level6/6_05.jpg",
      "cutSrc": "level6/cut/6_05.jpg",
      "author": "PANNINI, Giovanni Paolo",
      "year": "1751"
    },
    {
      "id": "6_06",
      "name": "Allegory of Life and Death",
      "imageSrc": "level6/6_06.jpg",
      "cutSrc": "level6/cut/6_06.jpg",
      "author": "PAOLINI, Pietro",
      "year": "1628-32"
    },
    {
      "id": "6_07",
      "name": "View of a Southern Coast",
      "imageSrc": "level6/6_07.jpg",
      "cutSrc": "level6/cut/6_07.jpg",
      "author": "PEETERS, Bonaventura",
      "year": "1652"
    },
    {
      "id": "6_08",
      "name": "A Cowherd at Pontoise",
      "imageSrc": "level6/6_08.jpg",
      "cutSrc": "level6/cut/6_08.jpg",
      "author": "PISSARRO, Camille",
      "year": "1874"
    },
    {
      "id": "6_09",
      "name": "Lordship Lane Station, Dulwich",
      "imageSrc": "level6/6_09.jpg",
      "cutSrc": "level6/cut/6_09.jpg",
      "author": "PISSARRO, Camille",
      "year": "1871"
    },
    {
      "id": "6_10",
      "name": "Children of Frederick V Prince Elector of Pfalz and King of Bohemia",
      "imageSrc": "level6/6_10.jpg",
      "cutSrc": "level6/cut/6_10.jpg",
      "author": "POELENBURGH, Cornelis van",
      "year": "1628"
    },
    {
      "id": "6_11",
      "name": "Capriccio View of Rome with the Martyrdom of St Lawrence",
      "imageSrc": "level6/6_11.jpg",
      "cutSrc": "level6/cut/6_11.jpg",
      "author": "POELENBURGH, Cornelis van",
      "year": "1622-25"
    },
    {
      "id": "6_12",
      "name": "Landscape with Shepherdess and Shepherd Playing Flute",
      "imageSrc": "level6/6_12.jpg",
      "cutSrc": "level6/cut/6_12.jpg",
      "author": "POTTER, Paulus",
      "year": "c. 1643"
    },
    {
      "id": "6_13",
      "name": "Fisherwomen by the Shore",
      "imageSrc": "level6/6_13.jpg",
      "cutSrc": "level6/cut/6_13.jpg",
      "author": "RASMUSSEN, Georg Anton",
      "year": "1883"
    },
    {
      "id": "6_14",
      "name": "Fjord in Norway",
      "imageSrc": "level6/6_14.jpg",
      "cutSrc": "level6/cut/6_14.jpg",
      "author": "RASMUSSEN, Georg Anton",
      "year": "1891"
    },
    {
      "id": "6_15",
      "name": "The Pont des Arts, Paris",
      "imageSrc": "level6/6_15.jpg",
      "cutSrc": "level6/cut/6_15.jpg",
      "author": "RENOIR, Pierre-Auguste",
      "year": "1867"
    },
    {
      "id": "6_16",
      "name": "A Capriccio Landscape with a Domed Church",
      "imageSrc": "level6/6_16.jpg",
      "cutSrc": "level6/cut/6_16.jpg",
      "author": "RICCI, Marco",
      "year": "1710s"
    },
    {
      "id": "6_17",
      "name": "Architectural Capriccio",
      "imageSrc": "level6/6_17.jpg",
      "cutSrc": "level6/cut/6_17.jpg",
      "author": "RICCI, Marco",
      "year": "c. 1725"
    },
    {
      "id": "6_18",
      "name": "Bridal Procession in a Spring Landscape",
      "imageSrc": "level6/6_18.jpg",
      "cutSrc": "level6/cut/6_18.jpg",
      "author": "RICHTER, Adrian Ludwig",
      "year": "1847"
    },
    {
      "id": "6_19",
      "name": "Venice, Approach to the Grand Canal",
      "imageSrc": "level6/6_19.jpg",
      "cutSrc": "level6/cut/6_19.jpg",
      "author": "ROBERTS, David",
      "year": "1855"
    },
    {
      "id": "6_20",
      "name": "A Battle Scene",
      "imageSrc": "level6/6_20.jpg",
      "cutSrc": "level6/cut/6_20.jpg",
      "author": "ROSA, Salvator",
      "year": "1640s"
    },
    {
      "id": "6_21",
      "name": "Heroic Battle",
      "imageSrc": "level6/6_21.jpg",
      "cutSrc": "level6/cut/6_21.jpg",
      "author": "ROSA, Salvator",
      "year": "1652-64"
    },
    {
      "id": "6_22",
      "name": "An Autumn Landscape with a View of Het Steen",
      "imageSrc": "level6/6_22.jpg",
      "cutSrc": "level6/cut/6_22.jpg",
      "author": "RUBENS, Peter Paul",
      "year": "c. 1635"
    },
    {
      "id": "6_23",
      "name": "Landscape with a Rainbow",
      "imageSrc": "level6/6_23.jpg",
      "cutSrc": "level6/cut/6_23.jpg",
      "author": "RUBENS, Peter Paul",
      "year": "c. 1638"
    },
    {
      "id": "6_24",
      "name": "View of the Town of Alkmaar",
      "imageSrc": "level6/6_24.jpg",
      "cutSrc": "level6/cut/6_24.jpg",
      "author": "RUYSDAEL, Salomon van",
      "year": "1645-50"
    },
    {
      "id": "6_25",
      "name": "Painter's Studio",
      "imageSrc": "level6/6_25.jpg",
      "cutSrc": "level6/cut/6_25.jpg",
      "author": "RYCKAERT, David the Younger",
      "year": "1638"
    },
  ],
};

