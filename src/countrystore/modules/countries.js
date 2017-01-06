/* eslint-disable quotes */
import moment from 'moment-timezone'

export default {
  moment,
  state: {
    indexes: {
      tz: {"Atlantic/Canary": "ES", "Europe/Lisbon": "PT", "Antarctica/Mawson": "AQ", "America/Nipigon": "CA", "America/Miquelon": "PM", "Indian/Reunion": "RE", "America/Fort_Nelson": "CA", "Europe/Skopje": "MK", "Asia/Dhaka": "BD", "America/St_Lucia": "LC", "America/Phoenix": "US", "Europe/Kaliningrad": "RU", "Asia/Hong_Kong": "HK", "Arctic/Longyearbyen": "SJ", "Europe/Guernsey": "GG", "Europe/Paris": "FR", "Europe/Stockholm": "SE", "Pacific/Fiji": "FJ", "Pacific/Apia": "WS", "Pacific/Pago_Pago": "AS", "Asia/Rangoon": "MM", "America/Mexico_City": "MX", "America/Puerto_Rico": "PR", "Indian/Mauritius": "MU", "Europe/Berlin": "DE", "Europe/Zurich": "CH", "Africa/Casablanca": "MA", "Antarctica/Davis": "AQ", "Asia/Krasnoyarsk": "RU", "Atlantic/Bermuda": "BM", "America/Araguaina": "BR", "Asia/Tehran": "IR", "Asia/Baku": "AZ", "America/St_Barthelemy": "BL", "America/Santarem": "BR", "America/Danmarkshavn": "GL", "America/Scoresbysund": "GL", "America/Eirunepe": "BR", "America/Caracas": "VE", "Asia/Baghdad": "IQ", "Africa/Monrovia": "LR", "America/St_Vincent": "VC", "America/Vancouver": "CA", "Asia/Ho_Chi_Minh": "VN", "Europe/Busingen": "DE", "Asia/Thimphu": "BT", "Africa/Accra": "GH", "America/Belize": "BZ", "America/Port_of_Spain": "TT", "Asia/Tashkent": "UZ", "Asia/Tokyo": "JP", "Pacific/Kiritimati": "KI", "Australia/Sydney": "AU", "Europe/Riga": "LV", "Asia/Dili": "TL", "Africa/Mbabane": "SZ", "Asia/Oral": "KZ", "Asia/Aden": "YE", "Europe/Isle_of_Man": "IM", "Europe/Istanbul": "TR", "Africa/Abidjan": "CI", "Australia/Lindeman": "AU", "Pacific/Galapagos": "EC", "America/Bogota": "CO", "America/Dawson": "CA", "America/Chicago": "US", "Pacific/Kwajalein": "MH", "Australia/Broken_Hill": "AU", "America/Cuiaba": "BR", "Indian/Christmas": "CX", "Asia/Jayapura": "ID", "Europe/Brussels": "BE", "America/Argentina/Cordoba": "AR", "America/Noronha": "BR", "Europe/Podgorica": "ME", "Africa/Algiers": "DZ", "Africa/Harare": "ZW", "Africa/Ndjamena": "TD", "America/Costa_Rica": "CR", "Europe/Ljubljana": "SI", "Indian/Mayotte": "YT", "Asia/Phnom_Penh": "KH", "America/Managua": "NI", "Asia/Brunei": "BN", "America/Tijuana": "MX", "Pacific/Fakaofo": "TK", "America/Adak": "US", "America/Antigua": "AG", "America/Indiana/Indianapolis": "US", "America/Argentina/La_Rioja": "AR", "Pacific/Tahiti": "PF", "America/Pangnirtung": "CA", "Europe/Zagreb": "HR", "America/Asuncion": "PY", "Europe/Vienna": "AT", "Australia/Hobart": "AU", "America/Juneau": "US", "America/Inuvik": "CA", "America/Ojinaga": "MX", "Europe/Astrakhan": "RU", "Asia/Seoul": "KR", "Indian/Comoro": "KM", "Antarctica/Rothera": "AQ", "Europe/Tallinn": "EE", "Indian/Mahe": "SC", "America/Argentina/Jujuy": "AR", "America/Creston": "CA", "America/Martinique": "MQ", "Asia/Singapore": "SG", "Africa/Nairobi": "KE", "Asia/Pontianak": "ID", "America/Maceio": "BR", "Africa/Cairo": "EG", "Europe/Moscow": "RU", "Antarctica/Palmer": "AQ", "Asia/Ulaanbaatar": "MN", "America/Rainy_River": "CA", "Indian/Maldives": "MV", "Asia/Colombo": "LK", "Australia/Adelaide": "AU", "America/Cambridge_Bay": "CA", "Africa/Luanda": "AO", "Pacific/Chatham": "NZ", "America/Indiana/Winamac": "US", "Asia/Tbilisi": "GE", "Europe/Gibraltar": "GI", "Asia/Karachi": "PK", "Australia/Lord_Howe": "AU", "America/Bahia_Banderas": "MX", "America/Boa_Vista": "BR", "America/Lima": "PE", "Pacific/Wallis": "WF", "Atlantic/Stanley": "FK", "Asia/Srednekolymsk": "RU", "America/Blanc-Sablon": "CA", "Antarctica/Syowa": "AQ", "America/Jamaica": "JM", "Europe/Kiev": "UA", "Europe/Budapest": "HU", "Pacific/Midway": "UM", "America/Goose_Bay": "CA", "Asia/Amman": "JO", "Asia/Sakhalin": "RU", "Africa/Windhoek": "NA", "Asia/Makassar": "ID", "America/Sitka": "US", "America/Guyana": "GY", "Pacific/Pohnpei": "FM", "America/Sao_Paulo": "BR", "America/Lower_Princes": "SX", "Australia/Perth": "AU", "Africa/Djibouti": "DJ", "Asia/Jakarta": "ID", "Asia/Pyongyang": "KP", "Africa/Johannesburg": "ZA", "Antarctica/Troll": "AQ", "Asia/Irkutsk": "RU", "Africa/Niamey": "NE", "America/Belem": "BR", "Asia/Bishkek": "KG", "Africa/Nouakchott": "MR", "Europe/Vilnius": "LT", "America/Cayenne": "GF", "Africa/Mogadishu": "SO", "America/Kentucky/Monticello": "US", "America/Rio_Branco": "BR", "America/Cancun": "MX", "America/Havana": "CU", "Pacific/Guam": "GU", "Antarctica/Macquarie": "AU", "Atlantic/Azores": "PT", "Australia/Eucla": "AU", "Asia/Shanghai": "CN", "America/Rankin_Inlet": "CA", "Asia/Beirut": "LB", "Africa/Maputo": "MZ", "Asia/Bahrain": "BH", "Asia/Ashgabat": "TM", "Asia/Riyadh": "SA", "Europe/London": "GB", "Europe/Warsaw": "PL", "America/Anguilla": "AI", "Asia/Damascus": "SY", "America/North_Dakota/Center": "US", "America/Indiana/Vevay": "US", "Atlantic/St_Helena": "SH", "America/Barbados": "BB", "Europe/Vatican": "VA", "America/Indiana/Vincennes": "US", "Asia/Almaty": "KZ", "America/Santo_Domingo": "DO", "Africa/Brazzaville": "CG", "America/Nome": "US", "Asia/Taipei": "TW", "America/Yakutat": "US", "America/Argentina/Mendoza": "AR", "America/Tortola": "VG", "Europe/Vaduz": "LI", "Europe/Minsk": "BY", "Asia/Kolkata": "IN", "Africa/Maseru": "LS", "America/Atikokan": "CA", "Asia/Kuching": "MY", "Africa/Libreville": "GA", "Africa/Freetown": "SL", "Africa/Bissau": "GW", "Europe/Samara": "RU", "Europe/Amsterdam": "NL", "Europe/Tirane": "AL", "Pacific/Saipan": "MP", "Asia/Magadan": "RU", "Europe/Zaporozhye": "UA", "America/El_Salvador": "SV", "Europe/Madrid": "ES", "Africa/Juba": "SS", "America/Santiago": "CL", "America/Argentina/Buenos_Aires": "AR", "America/Argentina/San_Luis": "AR", "America/Aruba": "AW", "America/Regina": "CA", "Pacific/Chuuk": "FM", "Asia/Khandyga": "RU", "Pacific/Funafuti": "TV", "America/Merida": "MX", "America/Guatemala": "GT", "Africa/Lome": "TG", "Africa/Sao_Tome": "ST", "Asia/Tomsk": "RU", "Pacific/Kosrae": "FM", "Africa/Bujumbura": "BI", "Europe/Chisinau": "MD", "America/Monterrey": "MX", "Asia/Yekaterinburg": "RU", "Antarctica/Casey": "AQ", "Pacific/Enderbury": "KI", "America/Thule": "GL", "America/St_Johns": "CA", "America/Moncton": "CA", "Europe/Helsinki": "FI", "Atlantic/Cape_Verde": "CV", "America/Tegucigalpa": "HN", "Indian/Cocos": "CC", "America/Boise": "US", "America/Guadeloupe": "GP", "America/Nassau": "BS", "Europe/Prague": "CZ", "America/Halifax": "CA", "Asia/Hovd": "MN", "America/Manaus": "BR", "America/Godthab": "GL", "America/North_Dakota/Beulah": "US", "America/Chihuahua": "MX", "America/Iqaluit": "CA", "America/Argentina/Rio_Gallegos": "AR", "Pacific/Gambier": "PF", "Europe/Volgograd": "RU", "Africa/Bamako": "ML", "Asia/Novokuznetsk": "RU", "Europe/Uzhgorod": "UA", "Africa/Banjul": "GM", "Asia/Aqtau": "KZ", "Africa/Malabo": "GQ", "Atlantic/Madeira": "PT", "Pacific/Noumea": "NC", "Africa/Kinshasa": "CD", "Europe/Malta": "MT", "America/Argentina/Ushuaia": "AR", "Asia/Bangkok": "TH", "Pacific/Niue": "NU", "Australia/Brisbane": "AU", "America/Recife": "BR", "Asia/Yerevan": "AM", "America/La_Paz": "BO", "Asia/Urumqi": "CN", "Africa/Lusaka": "ZM", "Pacific/Guadalcanal": "SB", "America/Yellowknife": "CA", "Asia/Vientiane": "LA", "Asia/Kuwait": "KW", "Africa/Conakry": "GN", "America/Argentina/Tucuman": "AR", "Asia/Chita": "RU", "Asia/Hebron": "PS", "Europe/Oslo": "NO", "Australia/Currie": "AU", "America/St_Kitts": "KN", "America/Panama": "PA", "Africa/Gaborone": "BW", "Pacific/Palau": "PW", "America/Guayaquil": "EC", "Asia/Kuala_Lumpur": "MY", "America/Menominee": "US", "Asia/Kamchatka": "RU", "Asia/Vladivostok": "RU", "America/Matamoros": "MX", "Asia/Qatar": "QA", "Asia/Dubai": "AE", "Asia/Yakutsk": "RU", "Asia/Omsk": "RU", "Africa/Bangui": "CF", "America/Paramaribo": "SR", "Africa/Lubumbashi": "CD", "Pacific/Marquesas": "PF", "Europe/Bratislava": "SK", "Asia/Anadyr": "RU", "America/New_York": "US", "Pacific/Norfolk": "NF", "Pacific/Rarotonga": "CK", "America/Dominica": "DM", "Africa/Porto-Novo": "BJ", "Asia/Samarkand": "UZ", "America/Kentucky/Louisville": "US", "America/Toronto": "CA", "America/Bahia": "BR", "Africa/Kampala": "UG", "Africa/Ouagadougou": "BF", "Asia/Muscat": "OM", "America/Edmonton": "CA", "Pacific/Wake": "UM", "America/Indiana/Tell_City": "US", "Australia/Darwin": "AU", "America/Whitehorse": "CA", "America/Swift_Current": "CA", "Europe/Copenhagen": "DK", "America/Argentina/Salta": "AR", "America/Montserrat": "MS", "Europe/Simferopol": "RU", "Africa/Blantyre": "MW", "America/Detroit": "US", "America/Grenada": "GD", "Atlantic/Faroe": "FO", "America/Indiana/Petersburg": "US", "Asia/Kathmandu": "NP", "Asia/Dushanbe": "TJ", "Europe/Athens": "GR", "America/Port-au-Prince": "HT", "America/Cayman": "KY", "Africa/Dar_es_Salaam": "TZ", "America/Curacao": "CW", "Indian/Kerguelen": "TF", "Africa/Khartoum": "SD", "Asia/Manila": "PH", "Europe/Sarajevo": "BA", "Africa/Douala": "CM", "Europe/Rome": "IT", "America/Argentina/San_Juan": "AR", "America/North_Dakota/New_Salem": "US", "America/Kralendijk": "BQ", "Pacific/Port_Moresby": "PG", "Europe/Jersey": "JE", "Europe/Andorra": "AD", "Europe/Luxembourg": "LU", "Pacific/Honolulu": "US", "America/St_Thomas": "VI", "Pacific/Majuro": "MH", "America/Mazatlan": "MX", "Asia/Macau": "MO", "Europe/Belgrade": "RS", "Asia/Choibalsan": "MN", "Europe/Mariehamn": "AX", "Antarctica/McMurdo": "AQ", "America/Thunder_Bay": "CA", "America/Los_Angeles": "US", "Asia/Kabul": "AF", "Indian/Antananarivo": "MG", "Atlantic/Reykjavik": "IS", "Asia/Nicosia": "CY", "Asia/Barnaul": "RU", "Pacific/Tongatapu": "TO", "America/Marigot": "MF", "Pacific/Pitcairn": "PN", "Pacific/Easter": "CL", "Atlantic/South_Georgia": "GS", "Africa/El_Aaiun": "EH", "Europe/Kirov": "RU", "America/Campo_Grande": "BR", "America/Dawson_Creek": "CA", "Antarctica/Vostok": "AQ", "Europe/Bucharest": "RO", "America/Porto_Velho": "BR", "Europe/Monaco": "MC", "America/Indiana/Marengo": "US", "Africa/Ceuta": "ES", "America/Winnipeg": "CA", "Asia/Aqtobe": "KZ", "Africa/Dakar": "SN", "America/Fortaleza": "BR", "Pacific/Tarawa": "KI", "Africa/Asmara": "ER", "Africa/Addis_Ababa": "ET", "Pacific/Efate": "VU", "Pacific/Johnston": "UM", "Asia/Qyzylorda": "KZ", "Europe/San_Marino": "SM", "Asia/Jerusalem": "IL", "Pacific/Auckland": "NZ", "America/Metlakatla": "US", "America/Denver": "US", "Indian/Chagos": "IO", "America/Glace_Bay": "CA", "Pacific/Bougainville": "PG", "America/Hermosillo": "MX", "Africa/Tunis": "TN", "Europe/Ulyanovsk": "RU", "America/Montevideo": "UY", "Asia/Ust-Nera": "RU", "America/Resolute": "CA", "Australia/Melbourne": "AU", "Asia/Gaza": "PS", "Europe/Dublin": "IE", "Antarctica/DumontDUrville": "AQ", "America/Argentina/Catamarca": "AR", "America/Indiana/Knox": "US", "Asia/Novosibirsk": "RU", "Africa/Kigali": "RW", "America/Grand_Turk": "TC", "Africa/Lagos": "NG", "Europe/Sofia": "BG", "Africa/Tripoli": "LY", "America/Anchorage": "US", "Pacific/Nauru": "NR"}
    },
    timezones: moment.tz.names(),
    data: {
      "BD": {
        "info": {
          "numeric": "050",
          "alpha_2": "BD",
          "alpha_3": "BGD",
          "official_name": "People's Republic of Bangladesh",
          "name": "Bangladesh"
        },
        "timezones": ["Asia/Dhaka"],
        "currencies": [{
          "symbol": "\u09f3",
          "name": "Bangladeshi Taka",
          "abbr": "BDT"
        }],
        "callingCode": 880
      },
      "BE": {
        "info": {
          "numeric": "056",
          "alpha_2": "BE",
          "alpha_3": "BEL",
          "official_name": "Kingdom of Belgium",
          "name": "Belgium"
        },
        "timezones": ["Europe/Brussels"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 32
      },
      "BF": {
        "info": {
          "alpha_2": "BF",
          "alpha_3": "BFA",
          "numeric": "854",
          "name": "Burkina Faso"
        },
        "timezones": ["Africa/Ouagadougou"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 226
      },
      "BG": {
        "info": {
          "numeric": "100",
          "alpha_2": "BG",
          "alpha_3": "BGR",
          "official_name": "Republic of Bulgaria",
          "name": "Bulgaria"
        },
        "timezones": ["Europe/Sofia"],
        "currencies": [{
          "symbol": "BGN",
          "name": "Bulgarian Lev",
          "abbr": "BGN"
        }],
        "callingCode": 359
      },
      "BA": {
        "info": {
          "numeric": "070",
          "alpha_2": "BA",
          "alpha_3": "BIH",
          "official_name": "Republic of Bosnia and Herzegovina",
          "name": "Bosnia and Herzegovina"
        },
        "timezones": ["Europe/Sarajevo"],
        "currencies": [{
          "symbol": "KM",
          "name": "Bosnia-Herzegovina Convertible Mark",
          "abbr": "BAM"
        }],
        "callingCode": 387
      },
      "BB": {
        "info": {
          "alpha_2": "BB",
          "alpha_3": "BRB",
          "numeric": "052",
          "name": "Barbados"
        },
        "timezones": ["America/Barbados"],
        "currencies": [{
          "symbol": "$",
          "name": "Barbadian Dollar",
          "abbr": "BBD"
        }],
        "callingCode": 1
      },
      "WF": {
        "info": {
          "alpha_2": "WF",
          "alpha_3": "WLF",
          "numeric": "876",
          "name": "Wallis and Futuna"
        },
        "timezones": ["Pacific/Wallis"],
        "currencies": [{
          "symbol": "CFPF",
          "name": "CFP Franc",
          "abbr": "XPF"
        }],
        "callingCode": 681
      },
      "BL": {
        "info": {
          "alpha_2": "BL",
          "alpha_3": "BLM",
          "numeric": "652",
          "name": "Saint Barth\u00e9lemy"
        },
        "timezones": ["America/St_Barthelemy"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 590
      },
      "BM": {
        "info": {
          "alpha_2": "BM",
          "alpha_3": "BMU",
          "numeric": "060",
          "name": "Bermuda"
        },
        "timezones": ["Atlantic/Bermuda"],
        "currencies": [{
          "symbol": "$",
          "name": "Bermudan Dollar",
          "abbr": "BMD"
        }],
        "callingCode": 1
      },
      "BN": {
        "info": {
          "alpha_2": "BN",
          "alpha_3": "BRN",
          "numeric": "096",
          "name": "Brunei Darussalam"
        },
        "timezones": ["Asia/Brunei"],
        "currencies": [{
          "symbol": "$",
          "name": "Brunei Dollar",
          "abbr": "BND"
        }],
        "callingCode": 673
      },
      "BO": {
        "info": {
          "name": "Bolivia, Plurinational State of",
          "numeric": "068",
          "alpha_2": "BO",
          "official_name": "Plurinational State of Bolivia",
          "common_name": "Bolivia",
          "alpha_3": "BOL"
        },
        "timezones": ["America/La_Paz"],
        "currencies": [{
          "symbol": "Bs",
          "name": "Bolivian Boliviano",
          "abbr": "BOB"
        }],
        "callingCode": 591
      },
      "BH": {
        "info": {
          "numeric": "048",
          "alpha_2": "BH",
          "alpha_3": "BHR",
          "official_name": "Kingdom of Bahrain",
          "name": "Bahrain"
        },
        "timezones": ["Asia/Bahrain"],
        "currencies": [{
          "symbol": "BHD",
          "name": "Bahraini Dinar",
          "abbr": "BHD"
        }],
        "callingCode": 973
      },
      "BI": {
        "info": {
          "numeric": "108",
          "alpha_2": "BI",
          "alpha_3": "BDI",
          "official_name": "Republic of Burundi",
          "name": "Burundi"
        },
        "timezones": ["Africa/Bujumbura"],
        "currencies": [{
          "symbol": "BIF",
          "name": "Burundian Franc",
          "abbr": "BIF"
        }],
        "callingCode": 257
      },
      "BJ": {
        "info": {
          "numeric": "204",
          "alpha_2": "BJ",
          "alpha_3": "BEN",
          "official_name": "Republic of Benin",
          "name": "Benin"
        },
        "timezones": ["Africa/Porto-Novo"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 229
      },
      "BT": {
        "info": {
          "numeric": "064",
          "alpha_2": "BT",
          "alpha_3": "BTN",
          "official_name": "Kingdom of Bhutan",
          "name": "Bhutan"
        },
        "timezones": ["Asia/Thimphu"],
        "currencies": [{
          "symbol": "\u20b9",
          "name": "Indian Rupee",
          "abbr": "INR"
        }, {
          "symbol": "BTN",
          "name": "Bhutanese Ngultrum",
          "abbr": "BTN"
        }],
        "callingCode": 975
      },
      "JM": {
        "info": {
          "alpha_2": "JM",
          "alpha_3": "JAM",
          "numeric": "388",
          "name": "Jamaica"
        },
        "timezones": ["America/Jamaica"],
        "currencies": [{
          "symbol": "$",
          "name": "Jamaican Dollar",
          "abbr": "JMD"
        }],
        "callingCode": 1
      },
      "BV": {
        "info": {
          "alpha_2": "BV",
          "alpha_3": "BVT",
          "numeric": "074",
          "name": "Bouvet Island"
        },
        "timezones": [],
        "currencies": [{
          "symbol": "kr",
          "name": "Norwegian Krone",
          "abbr": "NOK"
        }],
        "callingCode": null
      },
      "BW": {
        "info": {
          "numeric": "072",
          "alpha_2": "BW",
          "alpha_3": "BWA",
          "official_name": "Republic of Botswana",
          "name": "Botswana"
        },
        "timezones": ["Africa/Gaborone"],
        "currencies": [{
          "symbol": "P",
          "name": "Botswanan Pula",
          "abbr": "BWP"
        }],
        "callingCode": 267
      },
      "WS": {
        "info": {
          "numeric": "882",
          "alpha_2": "WS",
          "alpha_3": "WSM",
          "official_name": "Independent State of Samoa",
          "name": "Samoa"
        },
        "timezones": ["Pacific/Apia"],
        "currencies": [{
          "symbol": "WST",
          "name": "Samoan Tala",
          "abbr": "WST"
        }],
        "callingCode": 685
      },
      "BQ": {
        "info": {
          "numeric": "535",
          "alpha_2": "BQ",
          "alpha_3": "BES",
          "official_name": "Bonaire, Sint Eustatius and Saba",
          "name": "Bonaire, Sint Eustatius and Saba"
        },
        "timezones": ["America/Kralendijk"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 599
      },
      "BR": {
        "info": {
          "numeric": "076",
          "alpha_2": "BR",
          "alpha_3": "BRA",
          "official_name": "Federative Republic of Brazil",
          "name": "Brazil"
        },
        "timezones": ["America/Noronha", "America/Belem", "America/Fortaleza", "America/Recife", "America/Araguaina", "America/Maceio", "America/Bahia", "America/Sao_Paulo", "America/Campo_Grande", "America/Cuiaba", "America/Santarem", "America/Porto_Velho", "America/Boa_Vista", "America/Manaus", "America/Eirunepe", "America/Rio_Branco"],
        "currencies": [{
          "symbol": "R$",
          "name": "Brazilian Real",
          "abbr": "BRL"
        }],
        "callingCode": 55
      },
      "BS": {
        "info": {
          "numeric": "044",
          "alpha_2": "BS",
          "alpha_3": "BHS",
          "official_name": "Commonwealth of the Bahamas",
          "name": "Bahamas"
        },
        "timezones": ["America/Nassau"],
        "currencies": [{
          "symbol": "$",
          "name": "Bahamian Dollar",
          "abbr": "BSD"
        }],
        "callingCode": 1
      },
      "JE": {
        "info": {
          "alpha_2": "JE",
          "alpha_3": "JEY",
          "numeric": "832",
          "name": "Jersey"
        },
        "timezones": ["Europe/Jersey"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "British Pound",
          "abbr": "GBP"
        }],
        "callingCode": 44
      },
      "BY": {
        "info": {
          "numeric": "112",
          "alpha_2": "BY",
          "alpha_3": "BLR",
          "official_name": "Republic of Belarus",
          "name": "Belarus"
        },
        "timezones": ["Europe/Minsk"],
        "currencies": [{
          "symbol": "\u0440.",
          "name": "Belarusian Ruble",
          "abbr": "BYR"
        }],
        "callingCode": 375
      },
      "BZ": {
        "info": {
          "alpha_2": "BZ",
          "alpha_3": "BLZ",
          "numeric": "084",
          "name": "Belize"
        },
        "timezones": ["America/Belize"],
        "currencies": [{
          "symbol": "$",
          "name": "Belize Dollar",
          "abbr": "BZD"
        }],
        "callingCode": 501
      },
      "RU": {
        "info": {
          "alpha_2": "RU",
          "alpha_3": "RUS",
          "numeric": "643",
          "name": "Russian Federation"
        },
        "timezones": ["Europe/Kaliningrad", "Europe/Moscow", "Europe/Simferopol", "Europe/Volgograd", "Europe/Kirov", "Europe/Astrakhan", "Europe/Samara", "Europe/Ulyanovsk", "Asia/Yekaterinburg", "Asia/Omsk", "Asia/Novosibirsk", "Asia/Barnaul", "Asia/Tomsk", "Asia/Novokuznetsk", "Asia/Krasnoyarsk", "Asia/Irkutsk", "Asia/Chita", "Asia/Yakutsk", "Asia/Khandyga", "Asia/Vladivostok", "Asia/Ust-Nera", "Asia/Magadan", "Asia/Sakhalin", "Asia/Srednekolymsk", "Asia/Kamchatka", "Asia/Anadyr"],
        "currencies": [{
          "symbol": "\u20bd",
          "name": "Russian Ruble",
          "abbr": "RUB"
        }],
        "callingCode": 7
      },
      "RW": {
        "info": {
          "numeric": "646",
          "alpha_2": "RW",
          "alpha_3": "RWA",
          "official_name": "Rwandese Republic",
          "name": "Rwanda"
        },
        "timezones": ["Africa/Kigali"],
        "currencies": [{
          "symbol": "RF",
          "name": "Rwandan Franc",
          "abbr": "RWF"
        }],
        "callingCode": 250
      },
      "RS": {
        "info": {
          "numeric": "688",
          "alpha_2": "RS",
          "alpha_3": "SRB",
          "official_name": "Republic of Serbia",
          "name": "Serbia"
        },
        "timezones": ["Europe/Belgrade"],
        "currencies": [{
          "symbol": "RSD",
          "name": "Serbian Dinar",
          "abbr": "RSD"
        }],
        "callingCode": 381
      },
      "LT": {
        "info": {
          "numeric": "440",
          "alpha_2": "LT",
          "alpha_3": "LTU",
          "official_name": "Republic of Lithuania",
          "name": "Lithuania"
        },
        "timezones": ["Europe/Vilnius"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 370
      },
      "RE": {
        "info": {
          "alpha_2": "RE",
          "alpha_3": "REU",
          "numeric": "638",
          "name": "R\u00e9union"
        },
        "timezones": ["Indian/Reunion"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 262
      },
      "LU": {
        "info": {
          "numeric": "442",
          "alpha_2": "LU",
          "alpha_3": "LUX",
          "official_name": "Grand Duchy of Luxembourg",
          "name": "Luxembourg"
        },
        "timezones": ["Europe/Luxembourg"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 352
      },
      "LR": {
        "info": {
          "numeric": "430",
          "alpha_2": "LR",
          "alpha_3": "LBR",
          "official_name": "Republic of Liberia",
          "name": "Liberia"
        },
        "timezones": ["Africa/Monrovia"],
        "currencies": [{
          "symbol": "$",
          "name": "Liberian Dollar",
          "abbr": "LRD"
        }],
        "callingCode": 231
      },
      "RO": {
        "info": {
          "alpha_2": "RO",
          "alpha_3": "ROU",
          "numeric": "642",
          "name": "Romania"
        },
        "timezones": ["Europe/Bucharest"],
        "currencies": [{
          "symbol": "RON",
          "name": "Romanian Leu",
          "abbr": "RON"
        }],
        "callingCode": 40
      },
      "LS": {
        "info": {
          "numeric": "426",
          "alpha_2": "LS",
          "alpha_3": "LSO",
          "official_name": "Kingdom of Lesotho",
          "name": "Lesotho"
        },
        "timezones": ["Africa/Maseru"],
        "currencies": [{
          "symbol": "R",
          "name": "South African Rand",
          "abbr": "ZAR"
        }, {
          "symbol": "LSL",
          "name": "Lesotho Loti",
          "abbr": "LSL"
        }],
        "callingCode": 266
      },
      "GW": {
        "info": {
          "numeric": "624",
          "alpha_2": "GW",
          "alpha_3": "GNB",
          "official_name": "Republic of Guinea-Bissau",
          "name": "Guinea-Bissau"
        },
        "timezones": ["Africa/Bissau"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 245
      },
      "GU": {
        "info": {
          "alpha_2": "GU",
          "alpha_3": "GUM",
          "numeric": "316",
          "name": "Guam"
        },
        "timezones": ["Pacific/Guam"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "GT": {
        "info": {
          "numeric": "320",
          "alpha_2": "GT",
          "alpha_3": "GTM",
          "official_name": "Republic of Guatemala",
          "name": "Guatemala"
        },
        "timezones": ["America/Guatemala"],
        "currencies": [{
          "symbol": "Q",
          "name": "Guatemalan Quetzal",
          "abbr": "GTQ"
        }],
        "callingCode": 502
      },
      "GS": {
        "info": {
          "alpha_2": "GS",
          "alpha_3": "SGS",
          "numeric": "239",
          "name": "South Georgia and the South Sandwich Islands"
        },
        "timezones": ["Atlantic/South_Georgia"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "British Pound",
          "abbr": "GBP"
        }],
        "callingCode": null
      },
      "GR": {
        "info": {
          "numeric": "300",
          "alpha_2": "GR",
          "alpha_3": "GRC",
          "official_name": "Hellenic Republic",
          "name": "Greece"
        },
        "timezones": ["Europe/Athens"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 30
      },
      "GQ": {
        "info": {
          "numeric": "226",
          "alpha_2": "GQ",
          "alpha_3": "GNQ",
          "official_name": "Republic of Equatorial Guinea",
          "name": "Equatorial Guinea"
        },
        "timezones": ["Africa/Malabo"],
        "currencies": [{
          "symbol": "FCFA",
          "name": "Central African CFA Franc",
          "abbr": "XAF"
        }],
        "callingCode": 240
      },
      "GP": {
        "info": {
          "alpha_2": "GP",
          "alpha_3": "GLP",
          "numeric": "312",
          "name": "Guadeloupe"
        },
        "timezones": ["America/Guadeloupe"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 590
      },
      "JP": {
        "info": {
          "alpha_2": "JP",
          "alpha_3": "JPN",
          "numeric": "392",
          "name": "Japan"
        },
        "timezones": ["Asia/Tokyo"],
        "currencies": [{
          "symbol": "\u00a5",
          "name": "Japanese Yen",
          "abbr": "JPY"
        }],
        "callingCode": 81
      },
      "GY": {
        "info": {
          "numeric": "328",
          "alpha_2": "GY",
          "alpha_3": "GUY",
          "official_name": "Republic of Guyana",
          "name": "Guyana"
        },
        "timezones": ["America/Guyana"],
        "currencies": [{
          "symbol": "$",
          "name": "Guyanaese Dollar",
          "abbr": "GYD"
        }],
        "callingCode": 592
      },
      "GG": {
        "info": {
          "alpha_2": "GG",
          "alpha_3": "GGY",
          "numeric": "831",
          "name": "Guernsey"
        },
        "timezones": ["Europe/Guernsey"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "British Pound",
          "abbr": "GBP"
        }],
        "callingCode": 44
      },
      "GF": {
        "info": {
          "alpha_2": "GF",
          "alpha_3": "GUF",
          "numeric": "254",
          "name": "French Guiana"
        },
        "timezones": ["America/Cayenne"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 594
      },
      "GE": {
        "info": {
          "alpha_2": "GE",
          "alpha_3": "GEO",
          "numeric": "268",
          "name": "Georgia"
        },
        "timezones": ["Asia/Tbilisi"],
        "currencies": [{
          "symbol": "\u20be",
          "name": "Georgian Lari",
          "abbr": "GEL"
        }],
        "callingCode": 995
      },
      "GD": {
        "info": {
          "alpha_2": "GD",
          "alpha_3": "GRD",
          "numeric": "308",
          "name": "Grenada"
        },
        "timezones": ["America/Grenada"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "GB": {
        "info": {
          "numeric": "826",
          "alpha_2": "GB",
          "alpha_3": "GBR",
          "official_name": "United Kingdom of Great Britain and Northern Ireland",
          "name": "United Kingdom"
        },
        "timezones": ["Europe/London"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "British Pound",
          "abbr": "GBP"
        }],
        "callingCode": 44
      },
      "GA": {
        "info": {
          "numeric": "266",
          "alpha_2": "GA",
          "alpha_3": "GAB",
          "official_name": "Gabonese Republic",
          "name": "Gabon"
        },
        "timezones": ["Africa/Libreville"],
        "currencies": [{
          "symbol": "FCFA",
          "name": "Central African CFA Franc",
          "abbr": "XAF"
        }],
        "callingCode": 241
      },
      "GN": {
        "info": {
          "numeric": "324",
          "alpha_2": "GN",
          "alpha_3": "GIN",
          "official_name": "Republic of Guinea",
          "name": "Guinea"
        },
        "timezones": ["Africa/Conakry"],
        "currencies": [{
          "symbol": "FG",
          "name": "Guinean Franc",
          "abbr": "GNF"
        }],
        "callingCode": 224
      },
      "GM": {
        "info": {
          "numeric": "270",
          "alpha_2": "GM",
          "alpha_3": "GMB",
          "official_name": "Islamic Republic of the Gambia",
          "name": "Gambia"
        },
        "timezones": ["Africa/Banjul"],
        "currencies": [{
          "symbol": "GMD",
          "name": "Gambian Dalasi",
          "abbr": "GMD"
        }],
        "callingCode": 220
      },
      "GL": {
        "info": {
          "alpha_2": "GL",
          "alpha_3": "GRL",
          "numeric": "304",
          "name": "Greenland"
        },
        "timezones": ["America/Godthab", "America/Danmarkshavn", "America/Scoresbysund", "America/Thule"],
        "currencies": [{
          "symbol": "kr",
          "name": "Danish Krone",
          "abbr": "DKK"
        }],
        "callingCode": 299
      },
      "KW": {
        "info": {
          "numeric": "414",
          "alpha_2": "KW",
          "alpha_3": "KWT",
          "official_name": "State of Kuwait",
          "name": "Kuwait"
        },
        "timezones": ["Asia/Kuwait"],
        "currencies": [{
          "symbol": "KWD",
          "name": "Kuwaiti Dinar",
          "abbr": "KWD"
        }],
        "callingCode": 965
      },
      "GI": {
        "info": {
          "alpha_2": "GI",
          "alpha_3": "GIB",
          "numeric": "292",
          "name": "Gibraltar"
        },
        "timezones": ["Europe/Gibraltar"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "Gibraltar Pound",
          "abbr": "GIP"
        }],
        "callingCode": 350
      },
      "GH": {
        "info": {
          "numeric": "288",
          "alpha_2": "GH",
          "alpha_3": "GHA",
          "official_name": "Republic of Ghana",
          "name": "Ghana"
        },
        "timezones": ["Africa/Accra"],
        "currencies": [{
          "symbol": "GHS",
          "name": "Ghanaian Cedi",
          "abbr": "GHS"
        }],
        "callingCode": 233
      },
      "OM": {
        "info": {
          "numeric": "512",
          "alpha_2": "OM",
          "alpha_3": "OMN",
          "official_name": "Sultanate of Oman",
          "name": "Oman"
        },
        "timezones": ["Asia/Muscat"],
        "currencies": [{
          "symbol": "OMR",
          "name": "Omani Rial",
          "abbr": "OMR"
        }],
        "callingCode": 968
      },
      "JO": {
        "info": {
          "numeric": "400",
          "alpha_2": "JO",
          "alpha_3": "JOR",
          "official_name": "Hashemite Kingdom of Jordan",
          "name": "Jordan"
        },
        "timezones": ["Asia/Amman"],
        "currencies": [{
          "symbol": "JOD",
          "name": "Jordanian Dinar",
          "abbr": "JOD"
        }],
        "callingCode": 962
      },
      "HR": {
        "info": {
          "numeric": "191",
          "alpha_2": "HR",
          "alpha_3": "HRV",
          "official_name": "Republic of Croatia",
          "name": "Croatia"
        },
        "timezones": ["Europe/Zagreb"],
        "currencies": [{
          "symbol": "kn",
          "name": "Croatian Kuna",
          "abbr": "HRK"
        }],
        "callingCode": 385
      },
      "HT": {
        "info": {
          "numeric": "332",
          "alpha_2": "HT",
          "alpha_3": "HTI",
          "official_name": "Republic of Haiti",
          "name": "Haiti"
        },
        "timezones": ["America/Port-au-Prince"],
        "currencies": [{
          "symbol": "HTG",
          "name": "Haitian Gourde",
          "abbr": "HTG"
        }, {
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 509
      },
      "HU": {
        "info": {
          "numeric": "348",
          "alpha_2": "HU",
          "alpha_3": "HUN",
          "official_name": "Hungary",
          "name": "Hungary"
        },
        "timezones": ["Europe/Budapest"],
        "currencies": [{
          "symbol": "Ft",
          "name": "Hungarian Forint",
          "abbr": "HUF"
        }],
        "callingCode": 36
      },
      "HK": {
        "info": {
          "numeric": "344",
          "alpha_2": "HK",
          "alpha_3": "HKG",
          "official_name": "Hong Kong Special Administrative Region of China",
          "name": "Hong Kong"
        },
        "timezones": ["Asia/Hong_Kong"],
        "currencies": [{
          "symbol": "HK$",
          "name": "Hong Kong Dollar",
          "abbr": "HKD"
        }],
        "callingCode": 852
      },
      "HN": {
        "info": {
          "numeric": "340",
          "alpha_2": "HN",
          "alpha_3": "HND",
          "official_name": "Republic of Honduras",
          "name": "Honduras"
        },
        "timezones": ["America/Tegucigalpa"],
        "currencies": [{
          "symbol": "L",
          "name": "Honduran Lempira",
          "abbr": "HNL"
        }],
        "callingCode": 504
      },
      "HM": {
        "info": {
          "alpha_2": "HM",
          "alpha_3": "HMD",
          "numeric": "334",
          "name": "Heard Island and McDonald Islands"
        },
        "timezones": [],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": null
      },
      "KR": {
        "info": {
          "alpha_2": "KR",
          "alpha_3": "KOR",
          "numeric": "410",
          "name": "Korea, Republic of"
        },
        "timezones": ["Asia/Seoul"],
        "currencies": [{
          "symbol": "\u20a9",
          "name": "South Korean Won",
          "abbr": "KRW"
        }],
        "callingCode": 82
      },
      "AD": {
        "info": {
          "numeric": "020",
          "alpha_2": "AD",
          "alpha_3": "AND",
          "official_name": "Principality of Andorra",
          "name": "Andorra"
        },
        "timezones": ["Europe/Andorra"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 376
      },
      "PR": {
        "info": {
          "alpha_2": "PR",
          "alpha_3": "PRI",
          "numeric": "630",
          "name": "Puerto Rico"
        },
        "timezones": ["America/Puerto_Rico"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "PS": {
        "info": {
          "numeric": "275",
          "alpha_2": "PS",
          "alpha_3": "PSE",
          "official_name": "the State of Palestine",
          "name": "Palestine, State of"
        },
        "timezones": ["Asia/Gaza", "Asia/Hebron"],
        "currencies": [{
          "symbol": "\u20aa",
          "name": "Israeli New Sheqel",
          "abbr": "ILS"
        }, {
          "symbol": "JOD",
          "name": "Jordanian Dinar",
          "abbr": "JOD"
        }],
        "callingCode": 970
      },
      "PW": {
        "info": {
          "numeric": "585",
          "alpha_2": "PW",
          "alpha_3": "PLW",
          "official_name": "Republic of Palau",
          "name": "Palau"
        },
        "timezones": ["Pacific/Palau"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 680
      },
      "PT": {
        "info": {
          "numeric": "620",
          "alpha_2": "PT",
          "alpha_3": "PRT",
          "official_name": "Portuguese Republic",
          "name": "Portugal"
        },
        "timezones": ["Europe/Lisbon", "Atlantic/Madeira", "Atlantic/Azores"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 351
      },
      "KN": {
        "info": {
          "alpha_2": "KN",
          "alpha_3": "KNA",
          "numeric": "659",
          "name": "Saint Kitts and Nevis"
        },
        "timezones": ["America/St_Kitts"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "PY": {
        "info": {
          "numeric": "600",
          "alpha_2": "PY",
          "alpha_3": "PRY",
          "official_name": "Republic of Paraguay",
          "name": "Paraguay"
        },
        "timezones": ["America/Asuncion"],
        "currencies": [{
          "symbol": "\u20b2",
          "name": "Paraguayan Guarani",
          "abbr": "PYG"
        }],
        "callingCode": 595
      },
      "AI": {
        "info": {
          "alpha_2": "AI",
          "alpha_3": "AIA",
          "numeric": "660",
          "name": "Anguilla"
        },
        "timezones": ["America/Anguilla"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "PA": {
        "info": {
          "numeric": "591",
          "alpha_2": "PA",
          "alpha_3": "PAN",
          "official_name": "Republic of Panama",
          "name": "Panama"
        },
        "timezones": ["America/Panama"],
        "currencies": [{
          "symbol": "PAB",
          "name": "Panamanian Balboa",
          "abbr": "PAB"
        }, {
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 507
      },
      "PF": {
        "info": {
          "alpha_2": "PF",
          "alpha_3": "PYF",
          "numeric": "258",
          "name": "French Polynesia"
        },
        "timezones": ["Pacific/Tahiti", "Pacific/Marquesas", "Pacific/Gambier"],
        "currencies": [{
          "symbol": "CFPF",
          "name": "CFP Franc",
          "abbr": "XPF"
        }],
        "callingCode": 689
      },
      "PG": {
        "info": {
          "numeric": "598",
          "alpha_2": "PG",
          "alpha_3": "PNG",
          "official_name": "Independent State of Papua New Guinea",
          "name": "Papua New Guinea"
        },
        "timezones": ["Pacific/Port_Moresby", "Pacific/Bougainville"],
        "currencies": [{
          "symbol": "PGK",
          "name": "Papua New Guinean Kina",
          "abbr": "PGK"
        }],
        "callingCode": 675
      },
      "PE": {
        "info": {
          "numeric": "604",
          "alpha_2": "PE",
          "alpha_3": "PER",
          "official_name": "Republic of Peru",
          "name": "Peru"
        },
        "timezones": ["America/Lima"],
        "currencies": [{
          "symbol": "PEN",
          "name": "Peruvian Nuevo Sol",
          "abbr": "PEN"
        }],
        "callingCode": 51
      },
      "PK": {
        "info": {
          "numeric": "586",
          "alpha_2": "PK",
          "alpha_3": "PAK",
          "official_name": "Islamic Republic of Pakistan",
          "name": "Pakistan"
        },
        "timezones": ["Asia/Karachi"],
        "currencies": [{
          "symbol": "Rs",
          "name": "Pakistani Rupee",
          "abbr": "PKR"
        }],
        "callingCode": 92
      },
      "PH": {
        "info": {
          "numeric": "608",
          "alpha_2": "PH",
          "alpha_3": "PHL",
          "official_name": "Republic of the Philippines",
          "name": "Philippines"
        },
        "timezones": ["Asia/Manila"],
        "currencies": [{
          "symbol": "\u20b1",
          "name": "Philippine Peso",
          "abbr": "PHP"
        }],
        "callingCode": 63
      },
      "PN": {
        "info": {
          "alpha_2": "PN",
          "alpha_3": "PCN",
          "numeric": "612",
          "name": "Pitcairn"
        },
        "timezones": ["Pacific/Pitcairn"],
        "currencies": [{
          "symbol": "NZ$",
          "name": "New Zealand Dollar",
          "abbr": "NZD"
        }],
        "callingCode": null
      },
      "PL": {
        "info": {
          "numeric": "616",
          "alpha_2": "PL",
          "alpha_3": "POL",
          "official_name": "Republic of Poland",
          "name": "Poland"
        },
        "timezones": ["Europe/Warsaw"],
        "currencies": [{
          "symbol": "z\u0142",
          "name": "Polish Zloty",
          "abbr": "PLN"
        }],
        "callingCode": 48
      },
      "PM": {
        "info": {
          "alpha_2": "PM",
          "alpha_3": "SPM",
          "numeric": "666",
          "name": "Saint Pierre and Miquelon"
        },
        "timezones": ["America/Miquelon"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 508
      },
      "ZM": {
        "info": {
          "numeric": "894",
          "alpha_2": "ZM",
          "alpha_3": "ZMB",
          "official_name": "Republic of Zambia",
          "name": "Zambia"
        },
        "timezones": ["Africa/Lusaka"],
        "currencies": [{
          "symbol": "ZK",
          "name": "Zambian Kwacha",
          "abbr": "ZMW"
        }],
        "callingCode": 260
      },
      "EH": {
        "info": {
          "alpha_2": "EH",
          "alpha_3": "ESH",
          "numeric": "732",
          "name": "Western Sahara"
        },
        "timezones": ["Africa/El_Aaiun"],
        "currencies": [{
          "symbol": "MAD",
          "name": "Moroccan Dirham",
          "abbr": "MAD"
        }],
        "callingCode": 212
      },
      "EE": {
        "info": {
          "numeric": "233",
          "alpha_2": "EE",
          "alpha_3": "EST",
          "official_name": "Republic of Estonia",
          "name": "Estonia"
        },
        "timezones": ["Europe/Tallinn"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 372
      },
      "EG": {
        "info": {
          "numeric": "818",
          "alpha_2": "EG",
          "alpha_3": "EGY",
          "official_name": "Arab Republic of Egypt",
          "name": "Egypt"
        },
        "timezones": ["Africa/Cairo"],
        "currencies": [{
          "symbol": "E\u00a3",
          "name": "Egyptian Pound",
          "abbr": "EGP"
        }],
        "callingCode": 20
      },
      "ZA": {
        "info": {
          "numeric": "710",
          "alpha_2": "ZA",
          "alpha_3": "ZAF",
          "official_name": "Republic of South Africa",
          "name": "South Africa"
        },
        "timezones": ["Africa/Johannesburg"],
        "currencies": [{
          "symbol": "R",
          "name": "South African Rand",
          "abbr": "ZAR"
        }],
        "callingCode": 27
      },
      "EC": {
        "info": {
          "numeric": "218",
          "alpha_2": "EC",
          "alpha_3": "ECU",
          "official_name": "Republic of Ecuador",
          "name": "Ecuador"
        },
        "timezones": ["America/Guayaquil", "Pacific/Galapagos"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 593
      },
      "AL": {
        "info": {
          "numeric": "008",
          "alpha_2": "AL",
          "alpha_3": "ALB",
          "official_name": "Republic of Albania",
          "name": "Albania"
        },
        "timezones": ["Europe/Tirane"],
        "currencies": [{
          "symbol": "ALL",
          "name": "Albanian Lek",
          "abbr": "ALL"
        }],
        "callingCode": 355
      },
      "AO": {
        "info": {
          "numeric": "024",
          "alpha_2": "AO",
          "alpha_3": "AGO",
          "official_name": "Republic of Angola",
          "name": "Angola"
        },
        "timezones": ["Africa/Luanda"],
        "currencies": [{
          "symbol": "Kz",
          "name": "Angolan Kwanza",
          "abbr": "AOA"
        }],
        "callingCode": 244
      },
      "KZ": {
        "info": {
          "numeric": "398",
          "alpha_2": "KZ",
          "alpha_3": "KAZ",
          "official_name": "Republic of Kazakhstan",
          "name": "Kazakhstan"
        },
        "timezones": ["Asia/Almaty", "Asia/Qyzylorda", "Asia/Aqtobe", "Asia/Aqtau", "Asia/Oral"],
        "currencies": [{
          "symbol": "\u20b8",
          "name": "Kazakhstani Tenge",
          "abbr": "KZT"
        }],
        "callingCode": 7
      },
      "ET": {
        "info": {
          "numeric": "231",
          "alpha_2": "ET",
          "alpha_3": "ETH",
          "official_name": "Federal Democratic Republic of Ethiopia",
          "name": "Ethiopia"
        },
        "timezones": ["Africa/Addis_Ababa"],
        "currencies": [{
          "symbol": "ETB",
          "name": "Ethiopian Birr",
          "abbr": "ETB"
        }],
        "callingCode": 251
      },
      "ZW": {
        "info": {
          "numeric": "716",
          "alpha_2": "ZW",
          "alpha_3": "ZWE",
          "official_name": "Republic of Zimbabwe",
          "name": "Zimbabwe"
        },
        "timezones": ["Africa/Harare"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 263
      },
      "KY": {
        "info": {
          "alpha_2": "KY",
          "alpha_3": "CYM",
          "numeric": "136",
          "name": "Cayman Islands"
        },
        "timezones": ["America/Cayman"],
        "currencies": [{
          "symbol": "$",
          "name": "Cayman Islands Dollar",
          "abbr": "KYD"
        }],
        "callingCode": 1
      },
      "ES": {
        "info": {
          "numeric": "724",
          "alpha_2": "ES",
          "alpha_3": "ESP",
          "official_name": "Kingdom of Spain",
          "name": "Spain"
        },
        "timezones": ["Europe/Madrid", "Africa/Ceuta", "Atlantic/Canary"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 34
      },
      "ER": {
        "info": {
          "numeric": "232",
          "alpha_2": "ER",
          "alpha_3": "ERI",
          "official_name": "the State of Eritrea",
          "name": "Eritrea"
        },
        "timezones": ["Africa/Asmara"],
        "currencies": [{
          "symbol": "ERN",
          "name": "Eritrean Nakfa",
          "abbr": "ERN"
        }],
        "callingCode": 291
      },
      "ME": {
        "info": {
          "numeric": "499",
          "alpha_2": "ME",
          "alpha_3": "MNE",
          "official_name": "Montenegro",
          "name": "Montenegro"
        },
        "timezones": ["Europe/Podgorica"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 382
      },
      "MD": {
        "info": {
          "name": "Moldova, Republic of",
          "numeric": "498",
          "alpha_2": "MD",
          "official_name": "Republic of Moldova",
          "common_name": "Moldova",
          "alpha_3": "MDA"
        },
        "timezones": ["Europe/Chisinau"],
        "currencies": [{
          "symbol": "MDL",
          "name": "Moldovan Leu",
          "abbr": "MDL"
        }],
        "callingCode": 373
      },
      "MG": {
        "info": {
          "numeric": "450",
          "alpha_2": "MG",
          "alpha_3": "MDG",
          "official_name": "Republic of Madagascar",
          "name": "Madagascar"
        },
        "timezones": ["Indian/Antananarivo"],
        "currencies": [{
          "symbol": "Ar",
          "name": "Malagasy Ariary",
          "abbr": "MGA"
        }],
        "callingCode": 261
      },
      "MF": {
        "info": {
          "alpha_2": "MF",
          "alpha_3": "MAF",
          "numeric": "663",
          "name": "Saint Martin (French part)"
        },
        "timezones": ["America/Marigot"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 590
      },
      "MA": {
        "info": {
          "numeric": "504",
          "alpha_2": "MA",
          "alpha_3": "MAR",
          "official_name": "Kingdom of Morocco",
          "name": "Morocco"
        },
        "timezones": ["Africa/Casablanca"],
        "currencies": [{
          "symbol": "MAD",
          "name": "Moroccan Dirham",
          "abbr": "MAD"
        }],
        "callingCode": 212
      },
      "MC": {
        "info": {
          "numeric": "492",
          "alpha_2": "MC",
          "alpha_3": "MCO",
          "official_name": "Principality of Monaco",
          "name": "Monaco"
        },
        "timezones": ["Europe/Monaco"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 377
      },
      "UZ": {
        "info": {
          "numeric": "860",
          "alpha_2": "UZ",
          "alpha_3": "UZB",
          "official_name": "Republic of Uzbekistan",
          "name": "Uzbekistan"
        },
        "timezones": ["Asia/Samarkand", "Asia/Tashkent"],
        "currencies": [{
          "symbol": "UZS",
          "name": "Uzbekistani Som",
          "abbr": "UZS"
        }],
        "callingCode": 998
      },
      "MM": {
        "info": {
          "numeric": "104",
          "alpha_2": "MM",
          "alpha_3": "MMR",
          "official_name": "Republic of Myanmar",
          "name": "Myanmar"
        },
        "timezones": ["Asia/Rangoon"],
        "currencies": [{
          "symbol": "K",
          "name": "Myanmar Kyat",
          "abbr": "MMK"
        }],
        "callingCode": 95
      },
      "ML": {
        "info": {
          "numeric": "466",
          "alpha_2": "ML",
          "alpha_3": "MLI",
          "official_name": "Republic of Mali",
          "name": "Mali"
        },
        "timezones": ["Africa/Bamako"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 223
      },
      "MO": {
        "info": {
          "numeric": "446",
          "alpha_2": "MO",
          "alpha_3": "MAC",
          "official_name": "Macao Special Administrative Region of China",
          "name": "Macao"
        },
        "timezones": ["Asia/Macau"],
        "currencies": [{
          "symbol": "MOP",
          "name": "Macanese Pataca",
          "abbr": "MOP"
        }],
        "callingCode": 853
      },
      "MN": {
        "info": {
          "alpha_2": "MN",
          "alpha_3": "MNG",
          "numeric": "496",
          "name": "Mongolia"
        },
        "timezones": ["Asia/Ulaanbaatar", "Asia/Hovd", "Asia/Choibalsan"],
        "currencies": [{
          "symbol": "\u20ae",
          "name": "Mongolian Tugrik",
          "abbr": "MNT"
        }],
        "callingCode": 976
      },
      "MH": {
        "info": {
          "numeric": "584",
          "alpha_2": "MH",
          "alpha_3": "MHL",
          "official_name": "Republic of the Marshall Islands",
          "name": "Marshall Islands"
        },
        "timezones": ["Pacific/Majuro", "Pacific/Kwajalein"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 692
      },
      "MK": {
        "info": {
          "numeric": "807",
          "alpha_2": "MK",
          "alpha_3": "MKD",
          "official_name": "The Former Yugoslav Republic of Macedonia",
          "name": "Macedonia, Republic of"
        },
        "timezones": ["Europe/Skopje"],
        "currencies": [{
          "symbol": "MKD",
          "name": "Macedonian Denar",
          "abbr": "MKD"
        }],
        "callingCode": 389
      },
      "MU": {
        "info": {
          "numeric": "480",
          "alpha_2": "MU",
          "alpha_3": "MUS",
          "official_name": "Republic of Mauritius",
          "name": "Mauritius"
        },
        "timezones": ["Indian/Mauritius"],
        "currencies": [{
          "symbol": "Rs",
          "name": "Mauritian Rupee",
          "abbr": "MUR"
        }],
        "callingCode": 230
      },
      "MT": {
        "info": {
          "numeric": "470",
          "alpha_2": "MT",
          "alpha_3": "MLT",
          "official_name": "Republic of Malta",
          "name": "Malta"
        },
        "timezones": ["Europe/Malta"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 356
      },
      "MW": {
        "info": {
          "numeric": "454",
          "alpha_2": "MW",
          "alpha_3": "MWI",
          "official_name": "Republic of Malawi",
          "name": "Malawi"
        },
        "timezones": ["Africa/Blantyre"],
        "currencies": [{
          "symbol": "MWK",
          "name": "Malawian Kwacha",
          "abbr": "MWK"
        }],
        "callingCode": 265
      },
      "MV": {
        "info": {
          "numeric": "462",
          "alpha_2": "MV",
          "alpha_3": "MDV",
          "official_name": "Republic of Maldives",
          "name": "Maldives"
        },
        "timezones": ["Indian/Maldives"],
        "currencies": [{
          "symbol": "MVR",
          "name": "Maldivian Rufiyaa",
          "abbr": "MVR"
        }],
        "callingCode": 960
      },
      "MQ": {
        "info": {
          "alpha_2": "MQ",
          "alpha_3": "MTQ",
          "numeric": "474",
          "name": "Martinique"
        },
        "timezones": ["America/Martinique"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 596
      },
      "MP": {
        "info": {
          "numeric": "580",
          "alpha_2": "MP",
          "alpha_3": "MNP",
          "official_name": "Commonwealth of the Northern Mariana Islands",
          "name": "Northern Mariana Islands"
        },
        "timezones": ["Pacific/Saipan"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "MS": {
        "info": {
          "alpha_2": "MS",
          "alpha_3": "MSR",
          "numeric": "500",
          "name": "Montserrat"
        },
        "timezones": ["America/Montserrat"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "MR": {
        "info": {
          "numeric": "478",
          "alpha_2": "MR",
          "alpha_3": "MRT",
          "official_name": "Islamic Republic of Mauritania",
          "name": "Mauritania"
        },
        "timezones": ["Africa/Nouakchott"],
        "currencies": [{
          "symbol": "MRO",
          "name": "Mauritanian Ouguiya",
          "abbr": "MRO"
        }],
        "callingCode": 222
      },
      "AU": {
        "info": {
          "alpha_2": "AU",
          "alpha_3": "AUS",
          "numeric": "036",
          "name": "Australia"
        },
        "timezones": ["Australia/Lord_Howe", "Antarctica/Macquarie", "Australia/Hobart", "Australia/Currie", "Australia/Melbourne", "Australia/Sydney", "Australia/Broken_Hill", "Australia/Brisbane", "Australia/Lindeman", "Australia/Adelaide", "Australia/Darwin", "Australia/Perth", "Australia/Eucla"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 61
      },
      "UG": {
        "info": {
          "numeric": "800",
          "alpha_2": "UG",
          "alpha_3": "UGA",
          "official_name": "Republic of Uganda",
          "name": "Uganda"
        },
        "timezones": ["Africa/Kampala"],
        "currencies": [{
          "symbol": "UGX",
          "name": "Ugandan Shilling",
          "abbr": "UGX"
        }],
        "callingCode": 256
      },
      "MY": {
        "info": {
          "alpha_2": "MY",
          "alpha_3": "MYS",
          "numeric": "458",
          "name": "Malaysia"
        },
        "timezones": ["Asia/Kuala_Lumpur", "Asia/Kuching"],
        "currencies": [{
          "symbol": "RM",
          "name": "Malaysian Ringgit",
          "abbr": "MYR"
        }],
        "callingCode": 60
      },
      "MX": {
        "info": {
          "numeric": "484",
          "alpha_2": "MX",
          "alpha_3": "MEX",
          "official_name": "United Mexican States",
          "name": "Mexico"
        },
        "timezones": ["America/Mexico_City", "America/Cancun", "America/Merida", "America/Monterrey", "America/Matamoros", "America/Mazatlan", "America/Chihuahua", "America/Ojinaga", "America/Hermosillo", "America/Tijuana", "America/Bahia_Banderas"],
        "currencies": [{
          "symbol": "MX$",
          "name": "Mexican Peso",
          "abbr": "MXN"
        }],
        "callingCode": 52
      },
      "VU": {
        "info": {
          "numeric": "548",
          "alpha_2": "VU",
          "alpha_3": "VUT",
          "official_name": "Republic of Vanuatu",
          "name": "Vanuatu"
        },
        "timezones": ["Pacific/Efate"],
        "currencies": [{
          "symbol": "VUV",
          "name": "Vanuatu Vatu",
          "abbr": "VUV"
        }],
        "callingCode": 678
      },
      "FR": {
        "info": {
          "numeric": "250",
          "alpha_2": "FR",
          "alpha_3": "FRA",
          "official_name": "French Republic",
          "name": "France"
        },
        "timezones": ["Europe/Paris"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 33
      },
      "AW": {
        "info": {
          "alpha_2": "AW",
          "alpha_3": "ABW",
          "numeric": "533",
          "name": "Aruba"
        },
        "timezones": ["America/Aruba"],
        "currencies": [{
          "symbol": "AWG",
          "name": "Aruban Florin",
          "abbr": "AWG"
        }],
        "callingCode": 297
      },
      "AF": {
        "info": {
          "numeric": "004",
          "alpha_2": "AF",
          "alpha_3": "AFG",
          "official_name": "Islamic Republic of Afghanistan",
          "name": "Afghanistan"
        },
        "timezones": ["Asia/Kabul"],
        "currencies": [{
          "symbol": "AFN",
          "name": "Afghan Afghani",
          "abbr": "AFN"
        }],
        "callingCode": 93
      },
      "AX": {
        "info": {
          "alpha_2": "AX",
          "alpha_3": "ALA",
          "numeric": "248",
          "name": "\u00c5land Islands"
        },
        "timezones": ["Europe/Mariehamn"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 358
      },
      "FI": {
        "info": {
          "numeric": "246",
          "alpha_2": "FI",
          "alpha_3": "FIN",
          "official_name": "Republic of Finland",
          "name": "Finland"
        },
        "timezones": ["Europe/Helsinki"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 358
      },
      "FJ": {
        "info": {
          "numeric": "242",
          "alpha_2": "FJ",
          "alpha_3": "FJI",
          "official_name": "Republic of Fiji",
          "name": "Fiji"
        },
        "timezones": ["Pacific/Fiji"],
        "currencies": [{
          "symbol": "$",
          "name": "Fijian Dollar",
          "abbr": "FJD"
        }],
        "callingCode": 679
      },
      "FK": {
        "info": {
          "alpha_2": "FK",
          "alpha_3": "FLK",
          "numeric": "238",
          "name": "Falkland Islands (Malvinas)"
        },
        "timezones": ["Atlantic/Stanley"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "Falkland Islands Pound",
          "abbr": "FKP"
        }],
        "callingCode": 500
      },
      "FM": {
        "info": {
          "numeric": "583",
          "alpha_2": "FM",
          "alpha_3": "FSM",
          "official_name": "Federated States of Micronesia",
          "name": "Micronesia, Federated States of"
        },
        "timezones": ["Pacific/Chuuk", "Pacific/Pohnpei", "Pacific/Kosrae"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 691
      },
      "FO": {
        "info": {
          "alpha_2": "FO",
          "alpha_3": "FRO",
          "numeric": "234",
          "name": "Faroe Islands"
        },
        "timezones": ["Atlantic/Faroe"],
        "currencies": [{
          "symbol": "kr",
          "name": "Danish Krone",
          "abbr": "DKK"
        }],
        "callingCode": 298
      },
      "NI": {
        "info": {
          "numeric": "558",
          "alpha_2": "NI",
          "alpha_3": "NIC",
          "official_name": "Republic of Nicaragua",
          "name": "Nicaragua"
        },
        "timezones": ["America/Managua"],
        "currencies": [{
          "symbol": "C$",
          "name": "Nicaraguan C\u00f3rdoba",
          "abbr": "NIO"
        }],
        "callingCode": 505
      },
      "NL": {
        "info": {
          "numeric": "528",
          "alpha_2": "NL",
          "alpha_3": "NLD",
          "official_name": "Kingdom of the Netherlands",
          "name": "Netherlands"
        },
        "timezones": ["Europe/Amsterdam"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 31
      },
      "NO": {
        "info": {
          "numeric": "578",
          "alpha_2": "NO",
          "alpha_3": "NOR",
          "official_name": "Kingdom of Norway",
          "name": "Norway"
        },
        "timezones": ["Europe/Oslo"],
        "currencies": [{
          "symbol": "kr",
          "name": "Norwegian Krone",
          "abbr": "NOK"
        }],
        "callingCode": 47
      },
      "NA": {
        "info": {
          "numeric": "516",
          "alpha_2": "NA",
          "alpha_3": "NAM",
          "official_name": "Republic of Namibia",
          "name": "Namibia"
        },
        "timezones": ["Africa/Windhoek"],
        "currencies": [{
          "symbol": "R",
          "name": "South African Rand",
          "abbr": "ZAR"
        }, {
          "symbol": "$",
          "name": "Namibian Dollar",
          "abbr": "NAD"
        }],
        "callingCode": 264
      },
      "NC": {
        "info": {
          "alpha_2": "NC",
          "alpha_3": "NCL",
          "numeric": "540",
          "name": "New Caledonia"
        },
        "timezones": ["Pacific/Noumea"],
        "currencies": [{
          "symbol": "CFPF",
          "name": "CFP Franc",
          "abbr": "XPF"
        }],
        "callingCode": 687
      },
      "NE": {
        "info": {
          "numeric": "562",
          "alpha_2": "NE",
          "alpha_3": "NER",
          "official_name": "Republic of the Niger",
          "name": "Niger"
        },
        "timezones": ["Africa/Niamey"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 227
      },
      "NF": {
        "info": {
          "alpha_2": "NF",
          "alpha_3": "NFK",
          "numeric": "574",
          "name": "Norfolk Island"
        },
        "timezones": ["Pacific/Norfolk"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 672
      },
      "NG": {
        "info": {
          "numeric": "566",
          "alpha_2": "NG",
          "alpha_3": "NGA",
          "official_name": "Federal Republic of Nigeria",
          "name": "Nigeria"
        },
        "timezones": ["Africa/Lagos"],
        "currencies": [{
          "symbol": "\u20a6",
          "name": "Nigerian Naira",
          "abbr": "NGN"
        }],
        "callingCode": 234
      },
      "NZ": {
        "info": {
          "alpha_2": "NZ",
          "alpha_3": "NZL",
          "numeric": "554",
          "name": "New Zealand"
        },
        "timezones": ["Pacific/Auckland", "Pacific/Chatham"],
        "currencies": [{
          "symbol": "NZ$",
          "name": "New Zealand Dollar",
          "abbr": "NZD"
        }],
        "callingCode": 64
      },
      "NP": {
        "info": {
          "numeric": "524",
          "alpha_2": "NP",
          "alpha_3": "NPL",
          "official_name": "Federal Democratic Republic of Nepal",
          "name": "Nepal"
        },
        "timezones": ["Asia/Kathmandu"],
        "currencies": [{
          "symbol": "Rs",
          "name": "Nepalese Rupee",
          "abbr": "NPR"
        }],
        "callingCode": 977
      },
      "NR": {
        "info": {
          "numeric": "520",
          "alpha_2": "NR",
          "alpha_3": "NRU",
          "official_name": "Republic of Nauru",
          "name": "Nauru"
        },
        "timezones": ["Pacific/Nauru"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 674
      },
      "NU": {
        "info": {
          "numeric": "570",
          "alpha_2": "NU",
          "alpha_3": "NIU",
          "official_name": "Niue",
          "name": "Niue"
        },
        "timezones": ["Pacific/Niue"],
        "currencies": [{
          "symbol": "NZ$",
          "name": "New Zealand Dollar",
          "abbr": "NZD"
        }],
        "callingCode": 683
      },
      "CK": {
        "info": {
          "alpha_2": "CK",
          "alpha_3": "COK",
          "numeric": "184",
          "name": "Cook Islands"
        },
        "timezones": ["Pacific/Rarotonga"],
        "currencies": [{
          "symbol": "NZ$",
          "name": "New Zealand Dollar",
          "abbr": "NZD"
        }],
        "callingCode": 682
      },
      "CI": {
        "info": {
          "numeric": "384",
          "alpha_2": "CI",
          "alpha_3": "CIV",
          "official_name": "Republic of C\u00f4te d'Ivoire",
          "name": "C\u00f4te d'Ivoire"
        },
        "timezones": ["Africa/Abidjan"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 225
      },
      "CH": {
        "info": {
          "numeric": "756",
          "alpha_2": "CH",
          "alpha_3": "CHE",
          "official_name": "Swiss Confederation",
          "name": "Switzerland"
        },
        "timezones": ["Europe/Zurich"],
        "currencies": [{
          "symbol": "CHF",
          "name": "Swiss Franc",
          "abbr": "CHF"
        }],
        "callingCode": 41
      },
      "CO": {
        "info": {
          "numeric": "170",
          "alpha_2": "CO",
          "alpha_3": "COL",
          "official_name": "Republic of Colombia",
          "name": "Colombia"
        },
        "timezones": ["America/Bogota"],
        "currencies": [{
          "symbol": "$",
          "name": "Colombian Peso",
          "abbr": "COP"
        }],
        "callingCode": 57
      },
      "CN": {
        "info": {
          "numeric": "156",
          "alpha_2": "CN",
          "alpha_3": "CHN",
          "official_name": "People's Republic of China",
          "name": "China"
        },
        "timezones": ["Asia/Shanghai", "Asia/Urumqi"],
        "currencies": [{
          "symbol": "CN\u00a5",
          "name": "Chinese Yuan",
          "abbr": "CNY"
        }],
        "callingCode": 86
      },
      "CM": {
        "info": {
          "numeric": "120",
          "alpha_2": "CM",
          "alpha_3": "CMR",
          "official_name": "Republic of Cameroon",
          "name": "Cameroon"
        },
        "timezones": ["Africa/Douala"],
        "currencies": [{
          "symbol": "FCFA",
          "name": "Central African CFA Franc",
          "abbr": "XAF"
        }],
        "callingCode": 237
      },
      "CL": {
        "info": {
          "numeric": "152",
          "alpha_2": "CL",
          "alpha_3": "CHL",
          "official_name": "Republic of Chile",
          "name": "Chile"
        },
        "timezones": ["America/Santiago", "Pacific/Easter"],
        "currencies": [{
          "symbol": "$",
          "name": "Chilean Peso",
          "abbr": "CLP"
        }],
        "callingCode": 56
      },
      "CC": {
        "info": {
          "alpha_2": "CC",
          "alpha_3": "CCK",
          "numeric": "166",
          "name": "Cocos (Keeling) Islands"
        },
        "timezones": ["Indian/Cocos"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 61
      },
      "CA": {
        "info": {
          "alpha_2": "CA",
          "alpha_3": "CAN",
          "numeric": "124",
          "name": "Canada"
        },
        "timezones": ["America/St_Johns", "America/Halifax", "America/Glace_Bay", "America/Moncton", "America/Goose_Bay", "America/Blanc-Sablon", "America/Toronto", "America/Nipigon", "America/Thunder_Bay", "America/Iqaluit", "America/Pangnirtung", "America/Atikokan", "America/Winnipeg", "America/Rainy_River", "America/Resolute", "America/Rankin_Inlet", "America/Regina", "America/Swift_Current", "America/Edmonton", "America/Cambridge_Bay", "America/Yellowknife", "America/Inuvik", "America/Creston", "America/Dawson_Creek", "America/Fort_Nelson", "America/Vancouver", "America/Whitehorse", "America/Dawson"],
        "currencies": [{
          "symbol": "CA$",
          "name": "Canadian Dollar",
          "abbr": "CAD"
        }],
        "callingCode": 1
      },
      "CG": {
        "info": {
          "numeric": "178",
          "alpha_2": "CG",
          "alpha_3": "COG",
          "official_name": "Republic of the Congo",
          "name": "Congo"
        },
        "timezones": ["Africa/Brazzaville"],
        "currencies": [{
          "symbol": "FCFA",
          "name": "Central African CFA Franc",
          "abbr": "XAF"
        }],
        "callingCode": 242
      },
      "CF": {
        "info": {
          "alpha_2": "CF",
          "alpha_3": "CAF",
          "numeric": "140",
          "name": "Central African Republic"
        },
        "timezones": ["Africa/Bangui"],
        "currencies": [{
          "symbol": "FCFA",
          "name": "Central African CFA Franc",
          "abbr": "XAF"
        }],
        "callingCode": 236
      },
      "CD": {
        "info": {
          "alpha_2": "CD",
          "alpha_3": "COD",
          "numeric": "180",
          "name": "Congo, The Democratic Republic of the"
        },
        "timezones": ["Africa/Kinshasa", "Africa/Lubumbashi"],
        "currencies": [{
          "symbol": "CDF",
          "name": "Congolese Franc",
          "abbr": "CDF"
        }],
        "callingCode": 243
      },
      "CZ": {
        "info": {
          "numeric": "203",
          "alpha_2": "CZ",
          "alpha_3": "CZE",
          "official_name": "Czech Republic",
          "name": "Czechia"
        },
        "timezones": ["Europe/Prague"],
        "currencies": [{
          "symbol": "K\u010d",
          "name": "Czech Republic Koruna",
          "abbr": "CZK"
        }],
        "callingCode": 420
      },
      "CY": {
        "info": {
          "numeric": "196",
          "alpha_2": "CY",
          "alpha_3": "CYP",
          "official_name": "Republic of Cyprus",
          "name": "Cyprus"
        },
        "timezones": ["Asia/Nicosia"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 357
      },
      "CX": {
        "info": {
          "alpha_2": "CX",
          "alpha_3": "CXR",
          "numeric": "162",
          "name": "Christmas Island"
        },
        "timezones": ["Indian/Christmas"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 61
      },
      "CR": {
        "info": {
          "numeric": "188",
          "alpha_2": "CR",
          "alpha_3": "CRI",
          "official_name": "Republic of Costa Rica",
          "name": "Costa Rica"
        },
        "timezones": ["America/Costa_Rica"],
        "currencies": [{
          "symbol": "\u20a1",
          "name": "Costa Rican Col\u00f3n",
          "abbr": "CRC"
        }],
        "callingCode": 506
      },
      "KP": {
        "info": {
          "numeric": "408",
          "alpha_2": "KP",
          "alpha_3": "PRK",
          "official_name": "Democratic People's Republic of Korea",
          "name": "Korea, Democratic People's Republic of"
        },
        "timezones": ["Asia/Pyongyang"],
        "currencies": [{
          "symbol": "\u20a9",
          "name": "North Korean Won",
          "abbr": "KPW"
        }],
        "callingCode": 850
      },
      "CW": {
        "info": {
          "numeric": "531",
          "alpha_2": "CW",
          "alpha_3": "CUW",
          "official_name": "Cura\u00e7ao",
          "name": "Cura\u00e7ao"
        },
        "timezones": ["America/Curacao"],
        "currencies": [{
          "symbol": "ANG",
          "name": "Netherlands Antillean Guilder",
          "abbr": "ANG"
        }],
        "callingCode": 599
      },
      "CV": {
        "info": {
          "numeric": "132",
          "alpha_2": "CV",
          "alpha_3": "CPV",
          "official_name": "Republic of Cabo Verde",
          "name": "Cabo Verde"
        },
        "timezones": ["Atlantic/Cape_Verde"],
        "currencies": [{
          "symbol": "CVE",
          "name": "Cape Verdean Escudo",
          "abbr": "CVE"
        }],
        "callingCode": 238
      },
      "CU": {
        "info": {
          "numeric": "192",
          "alpha_2": "CU",
          "alpha_3": "CUB",
          "official_name": "Republic of Cuba",
          "name": "Cuba"
        },
        "timezones": ["America/Havana"],
        "currencies": [{
          "symbol": "$",
          "name": "Cuban Peso",
          "abbr": "CUP"
        }, {
          "symbol": "$",
          "name": "Cuban Convertible Peso",
          "abbr": "CUC"
        }],
        "callingCode": 53
      },
      "SZ": {
        "info": {
          "numeric": "748",
          "alpha_2": "SZ",
          "alpha_3": "SWZ",
          "official_name": "Kingdom of Swaziland",
          "name": "Swaziland"
        },
        "timezones": ["Africa/Mbabane"],
        "currencies": [{
          "symbol": "SZL",
          "name": "Swazi Lilangeni",
          "abbr": "SZL"
        }],
        "callingCode": 268
      },
      "SY": {
        "info": {
          "alpha_2": "SY",
          "alpha_3": "SYR",
          "numeric": "760",
          "name": "Syrian Arab Republic"
        },
        "timezones": ["Asia/Damascus"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "Syrian Pound",
          "abbr": "SYP"
        }],
        "callingCode": 963
      },
      "SX": {
        "info": {
          "numeric": "534",
          "alpha_2": "SX",
          "alpha_3": "SXM",
          "official_name": "Sint Maarten (Dutch part)",
          "name": "Sint Maarten (Dutch part)"
        },
        "timezones": ["America/Lower_Princes"],
        "currencies": [{
          "symbol": "ANG",
          "name": "Netherlands Antillean Guilder",
          "abbr": "ANG"
        }],
        "callingCode": 1
      },
      "KG": {
        "info": {
          "numeric": "417",
          "alpha_2": "KG",
          "alpha_3": "KGZ",
          "official_name": "Kyrgyz Republic",
          "name": "Kyrgyzstan"
        },
        "timezones": ["Asia/Bishkek"],
        "currencies": [{
          "symbol": "KGS",
          "name": "Kyrgystani Som",
          "abbr": "KGS"
        }],
        "callingCode": 996
      },
      "KE": {
        "info": {
          "numeric": "404",
          "alpha_2": "KE",
          "alpha_3": "KEN",
          "official_name": "Republic of Kenya",
          "name": "Kenya"
        },
        "timezones": ["Africa/Nairobi"],
        "currencies": [{
          "symbol": "KES",
          "name": "Kenyan Shilling",
          "abbr": "KES"
        }],
        "callingCode": 254
      },
      "SS": {
        "info": {
          "numeric": "728",
          "alpha_2": "SS",
          "alpha_3": "SSD",
          "official_name": "Republic of South Sudan",
          "name": "South Sudan"
        },
        "timezones": ["Africa/Juba"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "South Sudanese Pound",
          "abbr": "SSP"
        }],
        "callingCode": 211
      },
      "SR": {
        "info": {
          "numeric": "740",
          "alpha_2": "SR",
          "alpha_3": "SUR",
          "official_name": "Republic of Suriname",
          "name": "Suriname"
        },
        "timezones": ["America/Paramaribo"],
        "currencies": [{
          "symbol": "$",
          "name": "Surinamese Dollar",
          "abbr": "SRD"
        }],
        "callingCode": 597
      },
      "KI": {
        "info": {
          "numeric": "296",
          "alpha_2": "KI",
          "alpha_3": "KIR",
          "official_name": "Republic of Kiribati",
          "name": "Kiribati"
        },
        "timezones": ["Pacific/Tarawa", "Pacific/Enderbury", "Pacific/Kiritimati"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 686
      },
      "KH": {
        "info": {
          "numeric": "116",
          "alpha_2": "KH",
          "alpha_3": "KHM",
          "official_name": "Kingdom of Cambodia",
          "name": "Cambodia"
        },
        "timezones": ["Asia/Phnom_Penh"],
        "currencies": [{
          "symbol": "\u17db",
          "name": "Cambodian Riel",
          "abbr": "KHR"
        }],
        "callingCode": 855
      },
      "SV": {
        "info": {
          "numeric": "222",
          "alpha_2": "SV",
          "alpha_3": "SLV",
          "official_name": "Republic of El Salvador",
          "name": "El Salvador"
        },
        "timezones": ["America/El_Salvador"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 503
      },
      "KM": {
        "info": {
          "numeric": "174",
          "alpha_2": "KM",
          "alpha_3": "COM",
          "official_name": "Union of the Comoros",
          "name": "Comoros"
        },
        "timezones": ["Indian/Comoro"],
        "currencies": [{
          "symbol": "CF",
          "name": "Comorian Franc",
          "abbr": "KMF"
        }],
        "callingCode": 269
      },
      "ST": {
        "info": {
          "numeric": "678",
          "alpha_2": "ST",
          "alpha_3": "STP",
          "official_name": "Democratic Republic of Sao Tome and Principe",
          "name": "Sao Tome and Principe"
        },
        "timezones": ["Africa/Sao_Tome"],
        "currencies": [{
          "symbol": "Db",
          "name": "S\u00e3o Tom\u00e9 & Pr\u00edncipe Dobra",
          "abbr": "STD"
        }],
        "callingCode": 239
      },
      "SK": {
        "info": {
          "numeric": "703",
          "alpha_2": "SK",
          "alpha_3": "SVK",
          "official_name": "Slovak Republic",
          "name": "Slovakia"
        },
        "timezones": ["Europe/Bratislava"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 421
      },
      "SJ": {
        "info": {
          "alpha_2": "SJ",
          "alpha_3": "SJM",
          "numeric": "744",
          "name": "Svalbard and Jan Mayen"
        },
        "timezones": ["Arctic/Longyearbyen"],
        "currencies": [{
          "symbol": "kr",
          "name": "Norwegian Krone",
          "abbr": "NOK"
        }],
        "callingCode": 47
      },
      "SI": {
        "info": {
          "numeric": "705",
          "alpha_2": "SI",
          "alpha_3": "SVN",
          "official_name": "Republic of Slovenia",
          "name": "Slovenia"
        },
        "timezones": ["Europe/Ljubljana"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 386
      },
      "SH": {
        "info": {
          "alpha_2": "SH",
          "alpha_3": "SHN",
          "numeric": "654",
          "name": "Saint Helena, Ascension and Tristan da Cunha"
        },
        "timezones": ["Atlantic/St_Helena"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "St. Helena Pound",
          "abbr": "SHP"
        }],
        "callingCode": 290
      },
      "SO": {
        "info": {
          "numeric": "706",
          "alpha_2": "SO",
          "alpha_3": "SOM",
          "official_name": "Federal Republic of Somalia",
          "name": "Somalia"
        },
        "timezones": ["Africa/Mogadishu"],
        "currencies": [{
          "symbol": "SOS",
          "name": "Somali Shilling",
          "abbr": "SOS"
        }],
        "callingCode": 252
      },
      "SN": {
        "info": {
          "numeric": "686",
          "alpha_2": "SN",
          "alpha_3": "SEN",
          "official_name": "Republic of Senegal",
          "name": "Senegal"
        },
        "timezones": ["Africa/Dakar"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 221
      },
      "SM": {
        "info": {
          "numeric": "674",
          "alpha_2": "SM",
          "alpha_3": "SMR",
          "official_name": "Republic of San Marino",
          "name": "San Marino"
        },
        "timezones": ["Europe/San_Marino"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 378
      },
      "SL": {
        "info": {
          "numeric": "694",
          "alpha_2": "SL",
          "alpha_3": "SLE",
          "official_name": "Republic of Sierra Leone",
          "name": "Sierra Leone"
        },
        "timezones": ["Africa/Freetown"],
        "currencies": [{
          "symbol": "SLL",
          "name": "Sierra Leonean Leone",
          "abbr": "SLL"
        }],
        "callingCode": 232
      },
      "SC": {
        "info": {
          "numeric": "690",
          "alpha_2": "SC",
          "alpha_3": "SYC",
          "official_name": "Republic of Seychelles",
          "name": "Seychelles"
        },
        "timezones": ["Indian/Mahe"],
        "currencies": [{
          "symbol": "SCR",
          "name": "Seychellois Rupee",
          "abbr": "SCR"
        }],
        "callingCode": 248
      },
      "SB": {
        "info": {
          "alpha_2": "SB",
          "alpha_3": "SLB",
          "numeric": "090",
          "name": "Solomon Islands"
        },
        "timezones": ["Pacific/Guadalcanal"],
        "currencies": [{
          "symbol": "$",
          "name": "Solomon Islands Dollar",
          "abbr": "SBD"
        }],
        "callingCode": 677
      },
      "SA": {
        "info": {
          "numeric": "682",
          "alpha_2": "SA",
          "alpha_3": "SAU",
          "official_name": "Kingdom of Saudi Arabia",
          "name": "Saudi Arabia"
        },
        "timezones": ["Asia/Riyadh"],
        "currencies": [{
          "symbol": "SAR",
          "name": "Saudi Riyal",
          "abbr": "SAR"
        }],
        "callingCode": 966
      },
      "SG": {
        "info": {
          "numeric": "702",
          "alpha_2": "SG",
          "alpha_3": "SGP",
          "official_name": "Republic of Singapore",
          "name": "Singapore"
        },
        "timezones": ["Asia/Singapore"],
        "currencies": [{
          "symbol": "$",
          "name": "Singapore Dollar",
          "abbr": "SGD"
        }],
        "callingCode": 65
      },
      "SE": {
        "info": {
          "numeric": "752",
          "alpha_2": "SE",
          "alpha_3": "SWE",
          "official_name": "Kingdom of Sweden",
          "name": "Sweden"
        },
        "timezones": ["Europe/Stockholm"],
        "currencies": [{
          "symbol": "kr",
          "name": "Swedish Krona",
          "abbr": "SEK"
        }],
        "callingCode": 46
      },
      "SD": {
        "info": {
          "numeric": "729",
          "alpha_2": "SD",
          "alpha_3": "SDN",
          "official_name": "Republic of the Sudan",
          "name": "Sudan"
        },
        "timezones": ["Africa/Khartoum"],
        "currencies": [{
          "symbol": "SDG",
          "name": "Sudanese Pound",
          "abbr": "SDG"
        }],
        "callingCode": 249
      },
      "DO": {
        "info": {
          "alpha_2": "DO",
          "alpha_3": "DOM",
          "numeric": "214",
          "name": "Dominican Republic"
        },
        "timezones": ["America/Santo_Domingo"],
        "currencies": [{
          "symbol": "$",
          "name": "Dominican Peso",
          "abbr": "DOP"
        }],
        "callingCode": 1
      },
      "DM": {
        "info": {
          "numeric": "212",
          "alpha_2": "DM",
          "alpha_3": "DMA",
          "official_name": "Commonwealth of Dominica",
          "name": "Dominica"
        },
        "timezones": ["America/Dominica"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "DJ": {
        "info": {
          "numeric": "262",
          "alpha_2": "DJ",
          "alpha_3": "DJI",
          "official_name": "Republic of Djibouti",
          "name": "Djibouti"
        },
        "timezones": ["Africa/Djibouti"],
        "currencies": [{
          "symbol": "DJF",
          "name": "Djiboutian Franc",
          "abbr": "DJF"
        }],
        "callingCode": 253
      },
      "DK": {
        "info": {
          "numeric": "208",
          "alpha_2": "DK",
          "alpha_3": "DNK",
          "official_name": "Kingdom of Denmark",
          "name": "Denmark"
        },
        "timezones": ["Europe/Copenhagen"],
        "currencies": [{
          "symbol": "kr",
          "name": "Danish Krone",
          "abbr": "DKK"
        }],
        "callingCode": 45
      },
      "DE": {
        "info": {
          "numeric": "276",
          "alpha_2": "DE",
          "alpha_3": "DEU",
          "official_name": "Federal Republic of Germany",
          "name": "Germany"
        },
        "timezones": ["Europe/Berlin", "Europe/Busingen"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 49
      },
      "YE": {
        "info": {
          "numeric": "887",
          "alpha_2": "YE",
          "alpha_3": "YEM",
          "official_name": "Republic of Yemen",
          "name": "Yemen"
        },
        "timezones": ["Asia/Aden"],
        "currencies": [{
          "symbol": "YER",
          "name": "Yemeni Rial",
          "abbr": "YER"
        }],
        "callingCode": 967
      },
      "AT": {
        "info": {
          "numeric": "040",
          "alpha_2": "AT",
          "alpha_3": "AUT",
          "official_name": "Republic of Austria",
          "name": "Austria"
        },
        "timezones": ["Europe/Vienna"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 43
      },
      "DZ": {
        "info": {
          "numeric": "012",
          "alpha_2": "DZ",
          "alpha_3": "DZA",
          "official_name": "People's Democratic Republic of Algeria",
          "name": "Algeria"
        },
        "timezones": ["Africa/Algiers"],
        "currencies": [{
          "symbol": "DZD",
          "name": "Algerian Dinar",
          "abbr": "DZD"
        }],
        "callingCode": 213
      },
      "US": {
        "info": {
          "numeric": "840",
          "alpha_2": "US",
          "alpha_3": "USA",
          "official_name": "United States of America",
          "name": "United States"
        },
        "timezones": ["America/New_York", "America/Detroit", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Indiana/Indianapolis", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Vevay", "America/Chicago", "America/Indiana/Tell_City", "America/Indiana/Knox", "America/Menominee", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/North_Dakota/Beulah", "America/Denver", "America/Boise", "America/Phoenix", "America/Los_Angeles", "America/Anchorage", "America/Juneau", "America/Sitka", "America/Metlakatla", "America/Yakutat", "America/Nome", "America/Adak", "Pacific/Honolulu"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "LV": {
        "info": {
          "numeric": "428",
          "alpha_2": "LV",
          "alpha_3": "LVA",
          "official_name": "Republic of Latvia",
          "name": "Latvia"
        },
        "timezones": ["Europe/Riga"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 371
      },
      "UY": {
        "info": {
          "numeric": "858",
          "alpha_2": "UY",
          "alpha_3": "URY",
          "official_name": "Eastern Republic of Uruguay",
          "name": "Uruguay"
        },
        "timezones": ["America/Montevideo"],
        "currencies": [{
          "symbol": "$",
          "name": "Uruguayan Peso",
          "abbr": "UYU"
        }],
        "callingCode": 598
      },
      "YT": {
        "info": {
          "alpha_2": "YT",
          "alpha_3": "MYT",
          "numeric": "175",
          "name": "Mayotte"
        },
        "timezones": ["Indian/Mayotte"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 262
      },
      "UM": {
        "info": {
          "alpha_2": "UM",
          "alpha_3": "UMI",
          "numeric": "581",
          "name": "United States Minor Outlying Islands"
        },
        "timezones": ["Pacific/Johnston", "Pacific/Midway", "Pacific/Wake"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": null
      },
      "TZ": {
        "info": {
          "name": "Tanzania, United Republic of",
          "numeric": "834",
          "alpha_2": "TZ",
          "official_name": "United Republic of Tanzania",
          "common_name": "Tanzania",
          "alpha_3": "TZA"
        },
        "timezones": ["Africa/Dar_es_Salaam"],
        "currencies": [{
          "symbol": "TZS",
          "name": "Tanzanian Shilling",
          "abbr": "TZS"
        }],
        "callingCode": 255
      },
      "LC": {
        "info": {
          "alpha_2": "LC",
          "alpha_3": "LCA",
          "numeric": "662",
          "name": "Saint Lucia"
        },
        "timezones": ["America/St_Lucia"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "LA": {
        "info": {
          "alpha_2": "LA",
          "alpha_3": "LAO",
          "numeric": "418",
          "name": "Lao People's Democratic Republic"
        },
        "timezones": ["Asia/Vientiane"],
        "currencies": [{
          "symbol": "\u20ad",
          "name": "Laotian Kip",
          "abbr": "LAK"
        }],
        "callingCode": 856
      },
      "TV": {
        "info": {
          "alpha_2": "TV",
          "alpha_3": "TUV",
          "numeric": "798",
          "name": "Tuvalu"
        },
        "timezones": ["Pacific/Funafuti"],
        "currencies": [{
          "symbol": "A$",
          "name": "Australian Dollar",
          "abbr": "AUD"
        }],
        "callingCode": 688
      },
      "TW": {
        "info": {
          "name": "Taiwan, Province of China",
          "numeric": "158",
          "alpha_2": "TW",
          "official_name": "Taiwan, Province of China",
          "common_name": "Taiwan",
          "alpha_3": "TWN"
        },
        "timezones": ["Asia/Taipei"],
        "currencies": [{
          "symbol": "NT$",
          "name": "New Taiwan Dollar",
          "abbr": "TWD"
        }],
        "callingCode": 886
      },
      "TT": {
        "info": {
          "numeric": "780",
          "alpha_2": "TT",
          "alpha_3": "TTO",
          "official_name": "Republic of Trinidad and Tobago",
          "name": "Trinidad and Tobago"
        },
        "timezones": ["America/Port_of_Spain"],
        "currencies": [{
          "symbol": "$",
          "name": "Trinidad & Tobago Dollar",
          "abbr": "TTD"
        }],
        "callingCode": 1
      },
      "TR": {
        "info": {
          "numeric": "792",
          "alpha_2": "TR",
          "alpha_3": "TUR",
          "official_name": "Republic of Turkey",
          "name": "Turkey"
        },
        "timezones": ["Europe/Istanbul"],
        "currencies": [{
          "symbol": "\u20ba",
          "name": "Turkish Lira",
          "abbr": "TRY"
        }],
        "callingCode": 90
      },
      "LK": {
        "info": {
          "numeric": "144",
          "alpha_2": "LK",
          "alpha_3": "LKA",
          "official_name": "Democratic Socialist Republic of Sri Lanka",
          "name": "Sri Lanka"
        },
        "timezones": ["Asia/Colombo"],
        "currencies": [{
          "symbol": "Rs",
          "name": "Sri Lankan Rupee",
          "abbr": "LKR"
        }],
        "callingCode": 94
      },
      "LI": {
        "info": {
          "numeric": "438",
          "alpha_2": "LI",
          "alpha_3": "LIE",
          "official_name": "Principality of Liechtenstein",
          "name": "Liechtenstein"
        },
        "timezones": ["Europe/Vaduz"],
        "currencies": [{
          "symbol": "CHF",
          "name": "Swiss Franc",
          "abbr": "CHF"
        }],
        "callingCode": 423
      },
      "TN": {
        "info": {
          "numeric": "788",
          "alpha_2": "TN",
          "alpha_3": "TUN",
          "official_name": "Republic of Tunisia",
          "name": "Tunisia"
        },
        "timezones": ["Africa/Tunis"],
        "currencies": [{
          "symbol": "TND",
          "name": "Tunisian Dinar",
          "abbr": "TND"
        }],
        "callingCode": 216
      },
      "TO": {
        "info": {
          "numeric": "776",
          "alpha_2": "TO",
          "alpha_3": "TON",
          "official_name": "Kingdom of Tonga",
          "name": "Tonga"
        },
        "timezones": ["Pacific/Tongatapu"],
        "currencies": [{
          "symbol": "T$",
          "name": "Tongan Pa\u02bbanga",
          "abbr": "TOP"
        }],
        "callingCode": 676
      },
      "TL": {
        "info": {
          "numeric": "626",
          "alpha_2": "TL",
          "alpha_3": "TLS",
          "official_name": "Democratic Republic of Timor-Leste",
          "name": "Timor-Leste"
        },
        "timezones": ["Asia/Dili"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 670
      },
      "TM": {
        "info": {
          "alpha_2": "TM",
          "alpha_3": "TKM",
          "numeric": "795",
          "name": "Turkmenistan"
        },
        "timezones": ["Asia/Ashgabat"],
        "currencies": [{
          "symbol": "TMT",
          "name": "Turkmenistani Manat",
          "abbr": "TMT"
        }],
        "callingCode": 993
      },
      "TJ": {
        "info": {
          "numeric": "762",
          "alpha_2": "TJ",
          "alpha_3": "TJK",
          "official_name": "Republic of Tajikistan",
          "name": "Tajikistan"
        },
        "timezones": ["Asia/Dushanbe"],
        "currencies": [{
          "symbol": "TJS",
          "name": "Tajikistani Somoni",
          "abbr": "TJS"
        }],
        "callingCode": 992
      },
      "TK": {
        "info": {
          "alpha_2": "TK",
          "alpha_3": "TKL",
          "numeric": "772",
          "name": "Tokelau"
        },
        "timezones": ["Pacific/Fakaofo"],
        "currencies": [{
          "symbol": "NZ$",
          "name": "New Zealand Dollar",
          "abbr": "NZD"
        }],
        "callingCode": 690
      },
      "TH": {
        "info": {
          "numeric": "764",
          "alpha_2": "TH",
          "alpha_3": "THA",
          "official_name": "Kingdom of Thailand",
          "name": "Thailand"
        },
        "timezones": ["Asia/Bangkok"],
        "currencies": [{
          "symbol": "\u0e3f",
          "name": "Thai Baht",
          "abbr": "THB"
        }],
        "callingCode": 66
      },
      "TF": {
        "info": {
          "alpha_2": "TF",
          "alpha_3": "ATF",
          "numeric": "260",
          "name": "French Southern Territories"
        },
        "timezones": ["Indian/Kerguelen"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": null
      },
      "TG": {
        "info": {
          "numeric": "768",
          "alpha_2": "TG",
          "alpha_3": "TGO",
          "official_name": "Togolese Republic",
          "name": "Togo"
        },
        "timezones": ["Africa/Lome"],
        "currencies": [{
          "symbol": "CFA",
          "name": "West African CFA Franc",
          "abbr": "XOF"
        }],
        "callingCode": 228
      },
      "TD": {
        "info": {
          "numeric": "148",
          "alpha_2": "TD",
          "alpha_3": "TCD",
          "official_name": "Republic of Chad",
          "name": "Chad"
        },
        "timezones": ["Africa/Ndjamena"],
        "currencies": [{
          "symbol": "FCFA",
          "name": "Central African CFA Franc",
          "abbr": "XAF"
        }],
        "callingCode": 235
      },
      "TC": {
        "info": {
          "alpha_2": "TC",
          "alpha_3": "TCA",
          "numeric": "796",
          "name": "Turks and Caicos Islands"
        },
        "timezones": ["America/Grand_Turk"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "LY": {
        "info": {
          "numeric": "434",
          "alpha_2": "LY",
          "alpha_3": "LBY",
          "official_name": "Libya",
          "name": "Libya"
        },
        "timezones": ["Africa/Tripoli"],
        "currencies": [{
          "symbol": "LYD",
          "name": "Libyan Dinar",
          "abbr": "LYD"
        }],
        "callingCode": 218
      },
      "VA": {
        "info": {
          "alpha_2": "VA",
          "alpha_3": "VAT",
          "numeric": "336",
          "name": "Holy See (Vatican City State)"
        },
        "timezones": ["Europe/Vatican"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 39
      },
      "VC": {
        "info": {
          "alpha_2": "VC",
          "alpha_3": "VCT",
          "numeric": "670",
          "name": "Saint Vincent and the Grenadines"
        },
        "timezones": ["America/St_Vincent"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "AE": {
        "info": {
          "alpha_2": "AE",
          "alpha_3": "ARE",
          "numeric": "784",
          "name": "United Arab Emirates"
        },
        "timezones": ["Asia/Dubai"],
        "currencies": [{
          "symbol": "AED",
          "name": "United Arab Emirates Dirham",
          "abbr": "AED"
        }],
        "callingCode": 971
      },
      "VE": {
        "info": {
          "name": "Venezuela, Bolivarian Republic of",
          "numeric": "862",
          "alpha_2": "VE",
          "official_name": "Bolivarian Republic of Venezuela",
          "common_name": "Venezuela",
          "alpha_3": "VEN"
        },
        "timezones": ["America/Caracas"],
        "currencies": [{
          "symbol": "Bs",
          "name": "Venezuelan Bol\u00edvar",
          "abbr": "VEF"
        }],
        "callingCode": 58
      },
      "AG": {
        "info": {
          "alpha_2": "AG",
          "alpha_3": "ATG",
          "numeric": "028",
          "name": "Antigua and Barbuda"
        },
        "timezones": ["America/Antigua"],
        "currencies": [{
          "symbol": "EC$",
          "name": "East Caribbean Dollar",
          "abbr": "XCD"
        }],
        "callingCode": 1
      },
      "VG": {
        "info": {
          "numeric": "092",
          "alpha_2": "VG",
          "alpha_3": "VGB",
          "official_name": "British Virgin Islands",
          "name": "Virgin Islands, British"
        },
        "timezones": ["America/Tortola"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "IQ": {
        "info": {
          "numeric": "368",
          "alpha_2": "IQ",
          "alpha_3": "IRQ",
          "official_name": "Republic of Iraq",
          "name": "Iraq"
        },
        "timezones": ["Asia/Baghdad"],
        "currencies": [{
          "symbol": "IQD",
          "name": "Iraqi Dinar",
          "abbr": "IQD"
        }],
        "callingCode": 964
      },
      "VI": {
        "info": {
          "numeric": "850",
          "alpha_2": "VI",
          "alpha_3": "VIR",
          "official_name": "Virgin Islands of the United States",
          "name": "Virgin Islands, U.S."
        },
        "timezones": ["America/St_Thomas"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "IS": {
        "info": {
          "numeric": "352",
          "alpha_2": "IS",
          "alpha_3": "ISL",
          "official_name": "Republic of Iceland",
          "name": "Iceland"
        },
        "timezones": ["Atlantic/Reykjavik"],
        "currencies": [{
          "symbol": "kr",
          "name": "Icelandic Kr\u00f3na",
          "abbr": "ISK"
        }],
        "callingCode": 354
      },
      "IR": {
        "info": {
          "numeric": "364",
          "alpha_2": "IR",
          "alpha_3": "IRN",
          "official_name": "Islamic Republic of Iran",
          "name": "Iran, Islamic Republic of"
        },
        "timezones": ["Asia/Tehran"],
        "currencies": [{
          "symbol": "IRR",
          "name": "Iranian Rial",
          "abbr": "IRR"
        }],
        "callingCode": 98
      },
      "AM": {
        "info": {
          "numeric": "051",
          "alpha_2": "AM",
          "alpha_3": "ARM",
          "official_name": "Republic of Armenia",
          "name": "Armenia"
        },
        "timezones": ["Asia/Yerevan"],
        "currencies": [{
          "symbol": "AMD",
          "name": "Armenian Dram",
          "abbr": "AMD"
        }],
        "callingCode": 374
      },
      "IT": {
        "info": {
          "numeric": "380",
          "alpha_2": "IT",
          "alpha_3": "ITA",
          "official_name": "Italian Republic",
          "name": "Italy"
        },
        "timezones": ["Europe/Rome"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 39
      },
      "VN": {
        "info": {
          "numeric": "704",
          "alpha_2": "VN",
          "alpha_3": "VNM",
          "official_name": "Socialist Republic of Viet Nam",
          "name": "Viet Nam"
        },
        "timezones": ["Asia/Ho_Chi_Minh"],
        "currencies": [{
          "symbol": "\u20ab",
          "name": "Vietnamese Dong",
          "abbr": "VND"
        }],
        "callingCode": 84
      },
      "AQ": {
        "info": {
          "alpha_2": "AQ",
          "alpha_3": "ATA",
          "numeric": "010",
          "name": "Antarctica"
        },
        "timezones": ["Antarctica/McMurdo", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Mawson", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok"],
        "currencies": [],
        "callingCode": null
      },
      "AS": {
        "info": {
          "alpha_2": "AS",
          "alpha_3": "ASM",
          "numeric": "016",
          "name": "American Samoa"
        },
        "timezones": ["Pacific/Pago_Pago"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 1
      },
      "AR": {
        "info": {
          "numeric": "032",
          "alpha_2": "AR",
          "alpha_3": "ARG",
          "official_name": "Argentine Republic",
          "name": "Argentina"
        },
        "timezones": ["America/Argentina/Buenos_Aires", "America/Argentina/Cordoba", "America/Argentina/Salta", "America/Argentina/Jujuy", "America/Argentina/Tucuman", "America/Argentina/Catamarca", "America/Argentina/La_Rioja", "America/Argentina/San_Juan", "America/Argentina/Mendoza", "America/Argentina/San_Luis", "America/Argentina/Rio_Gallegos", "America/Argentina/Ushuaia"],
        "currencies": [{
          "symbol": "$",
          "name": "Argentine Peso",
          "abbr": "ARS"
        }],
        "callingCode": 54
      },
      "IM": {
        "info": {
          "alpha_2": "IM",
          "alpha_3": "IMN",
          "numeric": "833",
          "name": "Isle of Man"
        },
        "timezones": ["Europe/Isle_of_Man"],
        "currencies": [{
          "symbol": "\u00a3",
          "name": "British Pound",
          "abbr": "GBP"
        }],
        "callingCode": 44
      },
      "IL": {
        "info": {
          "numeric": "376",
          "alpha_2": "IL",
          "alpha_3": "ISR",
          "official_name": "State of Israel",
          "name": "Israel"
        },
        "timezones": ["Asia/Jerusalem"],
        "currencies": [{
          "symbol": "\u20aa",
          "name": "Israeli New Sheqel",
          "abbr": "ILS"
        }],
        "callingCode": 972
      },
      "IO": {
        "info": {
          "alpha_2": "IO",
          "alpha_3": "IOT",
          "numeric": "086",
          "name": "British Indian Ocean Territory"
        },
        "timezones": ["Indian/Chagos"],
        "currencies": [{
          "symbol": "$",
          "name": "US Dollar",
          "abbr": "USD"
        }],
        "callingCode": 246
      },
      "IN": {
        "info": {
          "numeric": "356",
          "alpha_2": "IN",
          "alpha_3": "IND",
          "official_name": "Republic of India",
          "name": "India"
        },
        "timezones": ["Asia/Kolkata"],
        "currencies": [{
          "symbol": "\u20b9",
          "name": "Indian Rupee",
          "abbr": "INR"
        }],
        "callingCode": 91
      },
      "LB": {
        "info": {
          "numeric": "422",
          "alpha_2": "LB",
          "alpha_3": "LBN",
          "official_name": "Lebanese Republic",
          "name": "Lebanon"
        },
        "timezones": ["Asia/Beirut"],
        "currencies": [{
          "symbol": "L\u00a3",
          "name": "Lebanese Pound",
          "abbr": "LBP"
        }],
        "callingCode": 961
      },
      "AZ": {
        "info": {
          "numeric": "031",
          "alpha_2": "AZ",
          "alpha_3": "AZE",
          "official_name": "Republic of Azerbaijan",
          "name": "Azerbaijan"
        },
        "timezones": ["Asia/Baku"],
        "currencies": [{
          "symbol": "AZN",
          "name": "Azerbaijani Manat",
          "abbr": "AZN"
        }],
        "callingCode": 994
      },
      "IE": {
        "info": {
          "alpha_2": "IE",
          "alpha_3": "IRL",
          "numeric": "372",
          "name": "Ireland"
        },
        "timezones": ["Europe/Dublin"],
        "currencies": [{
          "symbol": "\u20ac",
          "name": "Euro",
          "abbr": "EUR"
        }],
        "callingCode": 353
      },
      "ID": {
        "info": {
          "numeric": "360",
          "alpha_2": "ID",
          "alpha_3": "IDN",
          "official_name": "Republic of Indonesia",
          "name": "Indonesia"
        },
        "timezones": ["Asia/Jakarta", "Asia/Pontianak", "Asia/Makassar", "Asia/Jayapura"],
        "currencies": [{
          "symbol": "Rp",
          "name": "Indonesian Rupiah",
          "abbr": "IDR"
        }],
        "callingCode": 62
      },
      "UA": {
        "info": {
          "alpha_2": "UA",
          "alpha_3": "UKR",
          "numeric": "804",
          "name": "Ukraine"
        },
        "timezones": ["Europe/Kiev", "Europe/Uzhgorod", "Europe/Zaporozhye"],
        "currencies": [{
          "symbol": "\u20b4",
          "name": "Ukrainian Hryvnia",
          "abbr": "UAH"
        }],
        "callingCode": 380
      },
      "QA": {
        "info": {
          "numeric": "634",
          "alpha_2": "QA",
          "alpha_3": "QAT",
          "official_name": "State of Qatar",
          "name": "Qatar"
        },
        "timezones": ["Asia/Qatar"],
        "currencies": [{
          "symbol": "QAR",
          "name": "Qatari Rial",
          "abbr": "QAR"
        }],
        "callingCode": 974
      },
      "MZ": {
        "info": {
          "numeric": "508",
          "alpha_2": "MZ",
          "alpha_3": "MOZ",
          "official_name": "Republic of Mozambique",
          "name": "Mozambique"
        },
        "timezones": ["Africa/Maputo"],
        "currencies": [{
          "symbol": "MZN",
          "name": "Mozambican Metical",
          "abbr": "MZN"
        }],
        "callingCode": 258
      }
    }
  }
}
