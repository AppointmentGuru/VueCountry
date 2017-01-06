'''
usage: python generate.py [iso]
'''
import pytz, sys, pycountry, json
from babel.numbers import get_territory_currencies, get_currency_name, get_currency_symbol
from phonenumbers import COUNTRY_CODE_TO_REGION_CODE

def get_timezones(iso):
	timezones = []
	try:
		timezones = pytz.country_timezones[iso]
	except KeyError as e:
		print ('no tz for: %s' . format (iso))
	return timezones

def get_currencies(iso):
	return [{'name': get_currency_name(currency), 'symbol': get_currency_symbol(currency), 'abbr': currency } for currency in get_territory_currencies(iso)]

def get_calling_code(iso):
	for code, isos in COUNTRY_CODE_TO_REGION_CODE.items():
		if iso.upper() in isos:
			return code
	return None

def get_country_info(iso):
	return pycountry.countries.get(alpha_2=iso.upper()).__dict__.get('_fields', {})

def main(isos = pytz.country_names.keys()):
	country_info = {}
	for iso in isos:
		info = {
			'info': get_country_info(iso),
			'timezones': get_timezones(iso),
			'currencies': get_currencies(iso),
			'callingCode': get_calling_code(iso)
		}
		country_info[iso] = info
	print (json.dumps(country_info,indent=2))

if __name__ == "__main__":
	if len(sys.argv) == 2:
		main([sys.argv[1]])
	else:
		main()