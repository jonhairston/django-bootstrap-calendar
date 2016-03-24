// If you want to suggest a new language you can use this file as a template.
// To reduce the file size you should remove the comment lines (the ones that start with // )
if(!window.calendar_languages) {
	window.calendar_languages = {};
}
// Here you define the language and Country code. Replace en-US with your own.
// First letters: the language code (lower case). See http://www.loc.gov/standards/iso639-2/php/code_list.php
// Last letters: the Country code (upper case). See http://www.iso.org/iso/home/standards/country_codes/country_names_and_code_elements.htm
window.calendar_languages['en-US'] = {
	error_noview: 'Calendar: View {0} not found',
	error_dateformat: 'Calendar: Wrong date format {0}. Should be either "now" or "yyyy-mm-dd"',
	error_loadurl: 'Calendar: Event URL is not set',
	error_where: 'Calendar: Wrong navigation direction {0}. Can be only "next" or "prev" or "today"',
	error_timedevide: 'Calendar: Time split parameter should divide 60 without decimals. Something like 10, 15, 30',

	no_events_in_day: 'No events in this day.',

	// {0} will be replaced with the year (example: 2013)
	title_year: '{0}',
	// {0} will be replaced with the month name (example: September)
	// {1} will be replaced with the year (example: 2013)
	title_month: '{0} {1}',
	// {0} will be replaced with the week number (example: 37)
	// {1} will be replaced with the year (example: 2013)
	title_week: 'week {0} of {1}',
	// {0} will be replaced with the weekday name (example: Thursday)
	// {1} will be replaced with the day of the month (example: 12)
	// {2} will be replaced with the month name (example: September)
	// {3} will be replaced with the year (example: 2013)
	title_day: '{0} {1} {2}, {3}',

	week:'Week {0}',
	all_day:     'All day',
	time:        'Time',
	events:      'Events',
	before_time: 'Ends before timeline',
	after_time:  'Starts after timeline',

	m0: 'January',
	m1: 'February',
	m2: 'March',
	m3: 'April',
	m4: 'May',
	m5: 'June',
	m6: 'July',
	m7: 'August',
	m8: 'September',
	m9: 'October',
	m10: 'November',
	m11: 'December',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mar',
	ms3: 'Apr',
	ms4: 'May',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Aug',
	ms8: 'Sep',
	ms9: 'Oct',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Sunday',
	d1: 'Monday',
	d2: 'Tuesday',
	d3: 'Wednesday',
	d4: 'Thursday',
	d5: 'Friday',
	d6: 'Saturday',

	// Which is the first day of the week (2 for sunday, 1 for monday)
	first_day: 2,
	// Week numbering according to ISO 8601 (if false, week 1 starts with January 1st)
	week_numbers_iso_8601: false,

	// The list of the holidays.
	// Each holiday has a date definition and a name (in your language)
	// For instance:
	// holidays: {
	// 	'date': 'name',
	// 	'date': 'name',
	// 	...
	//   'date': 'name' //No ending comma for the last holiday
	// }
	// The format of the date may be one of the following:
	// # For a holiday recurring every year in the same day: 'dd-mm' (dd is the day of the month, mm is the month). For example: '25-12'.
	// # For a holiday that exists only in one specific year: 'dd-mm-yyyy' (dd is the day of the month, mm is the month, yyyy is the year). For example: '31-01-2013'
	// # For Easter: use simply 'easter'
	// # For holidays that are based on the Easter date: 'easter+offset in days'.
	//   Some examples:
	//   - 'easter-2' is Good Friday (2 days before Easter)
	//   - 'easter+1' is Easter Monday (1 day after Easter)
	//   - 'easter+39' is the Ascension Day
	//   - 'easter+49' is Pentecost
	// # For holidays that are on a specific weekday after the beginning of a month: 'mm+n*w', where 'mm' is the month, 'n' is the ordinal position, 'w' is the weekday being 0: Sunday, 1: Monday, ..., 6: Saturnday
	//   For example:
	//   - Second (2) Monday (1) in October (10): '10+2*1'
	// # For holidays that are on a specific weekday before the ending of a month: 'mm-n*w', where 'mm' is the month, 'n' is the ordinal position, 'w' is the weekday being 0: Sunday, 1: Monday, ..., 6: Saturnday
	//   For example:
	//   - Last (1) Saturnday (6) in Match (03): '03-1*6'
	//   - Last (1) Monday (1) in May (05): '05-1*1'
	// # You can also specify a holiday that lasts more than one day. To do that use the format 'start>end' where 'start' and 'end' are specified as above.
	//   For example:
	//   - From 1 January to 6 January: '01-01>06-01'
	//   - Easter and the day after Easter: 'easter>easter+1'
	//   Limitations: currently the multi-day holydays can't cross an year. So, for example, you can't specify a range as '30-12>01-01'; as a workaround you can specify two distinct holidays (for instance '30-12>31-12' and '01-01'). 
	holidays: {
	}
};

window.calendar_languages['ar-SA'] = {
	error_noview: 'التقويم: العرض {0} غير موجود',
	error_dateformat: 'التقويم: تنسيق خاطئ للتاريخ {0}. يجب أن يكون التاريخ "الآن" أو "yyyy-mm-dd"',
	error_loadurl: 'التقويم: لم يتم تحديد رابط الحدث',
	error_where: 'التقويم: اتجاه تصفح خاطئ {0}. يجب أن يحتوي فقط على "التالي" أو "السابق" أو "اليوم"',
	error_timedevide: 'التقويم: تقسيم الوقت يجب أن يمكن قسمة 60 عليه بدون باقي . مثل 10, 15, 30',

	no_events_in_day: 'لا يوجد أحداث في هذا اليوم',

	title_year: 'العام {0}',
	title_month: '{0} {1}',
	title_week: 'الأسبوع {0} من {1}',
	title_day: '{0} {1} {2}, {3}',

	week:'الأسبوع {0}',
	all_day:     'كامل اليوم',
	time:        'الوقت',
	events:      'الأحداث',
	before_time: 'ينتهي قبل الخط الزمني',
	after_time:  'يبدء بعد الخط الزمني',

	m0: 'يناير',
	m1: 'فبراير',
	m2: 'مارس',
	m3: 'أبريل',
	m4: 'مايو',
	m5: 'يونيو',
	m6: 'يوليو',
	m7: 'أغسطس',
	m8: 'سبتمبر',
	m9: 'أكتوبر',
	m10: 'نوفمبر',
	m11: 'ديسمبر',

	ms0: 'يناير',
	ms1: 'فبراير',
	ms2: 'مارس',
	ms3: 'أبريل',
	ms4: 'مايو',
	ms5: 'يونيو',
	ms6: 'يوليو',
	ms7: 'أغسطس',
	ms8: 'سبتمبر',
	ms9: 'أكتوبر',
	ms10: 'نوفمبر',
	ms11: 'ديسمبر',

	d0: 'الأحد',
	d1: 'الإثنين',
	d2: 'الثلاثاء',
	d3: 'الأربعاء',
	d4: 'الخميس',
	d5: 'الجمعة',
	d6: 'السبت',

	first_day: 2,

	holidays: {
	}
};

window.calendar_languages['bg-BG'] = {
	error_noview: 'Календар: Изглед {0} не беше открит',
	error_dateformat: 'Календар: Грешен формат за дата {0}. Трябва да бъде или "now", или "yyyy-mm-dd"',
	error_loadurl: 'Календар: URL адресът на събитието не е зададен',
	error_where: 'Календар: Грешна посока {0}. Може да бъде  зададено само "next", "prev", или "today"',
	error_timedevide: 'Календар: Параметърът за разделяне на времето трябва да може да се дели на 60, без остатък. Например 10, 15, 30',

	no_events_in_day: 'Няма събития за този ден.',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'Седмица {0} от {1}',
	title_day: '{0} {1} {2}, {3}',

	week:        'Седмица {0}',
	all_day:     'Цял ден',
	time:        'Часове',
	events:      'Събития',
	before_time: 'Приключва преди времевата линия',
	after_time:  'Започва след началото на времевата линия',

	m0: 'януари',
	m1: 'февруари',
	m2: 'март',
	m3: 'април',
	m4: 'май',
	m5: 'юни',
	m6: 'юли',
	m7: 'август',
	m8: 'септември',
	m9: 'октомври',
	m10: 'ноември',
	m11: 'декември',

	ms0: 'яну',
	ms1: 'фев',
	ms2: 'мар',
	ms3: 'апр',
	ms4: 'май',
	ms5: 'юни',
	ms6: 'юли',
	ms7: 'авг',
	ms8: 'сеп',
	ms9: 'окт',
	ms10: 'ное',
	ms11: 'дек',

	d0: 'неделя',
	d1: 'понеделник',
	d2: 'вторник',
	d3: 'сряда',
	d4: 'четвъртък',
	d5: 'петък',
	d6: 'събота',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
	}
};

window.calendar_languages['bs-BA'] = {
	error_noview:     'Kalendar: View {0} nije pronađen',
	error_dateformat: 'Kalendar: Pogrešan format datuma {0}. Trebao bi biti ili "now" ili "yyyy-mm-dd"',
	error_loadurl:    'Kalendar: URL za događaje nije definisan',
	error_where:      'Kalendar: Pogrešna naredba za navigaciju {0}. Dozvoljene navigacije su "next", "prev" ili "today"',
	error_timedevide: 'Kalendar: Parametar za dijeljenje vremena mora broj 60 dijeliti bez ostatka. Dozvoljeni parametri su npr. 10, 15, 30',

	no_events_in_day: 'Na ovaj dan nema događaja.',

	title_year:  '{0}. godina',
	title_month: '{0} {1}',
	title_week:  '{0}. sedmica u {1}. godini',
	title_day:   '{0}, {1}. {2} {3}.',

	week:        'Sedmica {0}',
	all_day:     'Cijeli dan',
	time:        'Vrijeme',
	events:      'Događaj',
	before_time: 'Završava prije',
	after_time:  'Započinje nakon',

	m0:  'Januar',
	m1:  'Februar',
	m2:  'Mart',
	m3:  'April',
	m4:  'Maj',
	m5:  'Juni',
	m6:  'Juli',
	m7:  'August',
	m8:  'Septembar',
	m9:  'Oktobar',
	m10: 'Novembar',
	m11: 'Decembar',

	ms0:  'Jan',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Apr',
	ms4:  'Maj',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aug',
	ms8:  'Sep',
	ms9:  'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Nedelja',
	d1: 'Ponedeljak',
	d2: 'Utorak',
	d3: 'Srijeda',
	d4: 'Četvrtak',
	d5: 'Petak',
	d6: 'Subota',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		"01-01>02-01": "Nova godina",
		"01-03":       "Dan nezavisnosti Bosne i Hercegovine",
		"01-05>02-05": "Praznik rada",
		"25-11":       "Dan državnosti Bosne i Hercegovine"
	}
};

window.calendar_languages['ca-ES'] = {
	error_noview:     'Calendari: Vista {0} no trobada',
	error_dateformat: 'Calendari: Format de data invàlid {0}. Ha de ser "now" o "yyyy-mm-dd"',
	error_loadurl:    'Calendari: URL de càrrega d\'esdeveniments no configurada',
	error_where:      'Calendari: Adreça de navegació incorrecta {0}. Els valors correctes són "next" o "prev" o "today"',
	error_timedevide: 'Calendari: paràmetre per al separador d\'hora ha de dividir 60 per un sencer. Per exemple 10, 15, 30',

	no_events_in_day: 'Avui no hi ha esdeveniments',

	title_year:  'Any {0}',
	title_month: '{0} {1}',
	title_week:  'Setmana {0} del {1}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Setmana {0}',
	all_day:     'Tot el dia',
	time:        'Temps',
	events:      'Desenvolupament',
	before_time: 'Temps abans de la línia de temps',
	after_time:  'Fi després d\'una línia de temps',

	m0:  'Gener',
	m1:  'Febrer',
	m2:  'Març',
	m3:  'Abril',
	m4:  'Maig',
	m5:  'Juny',
	m6:  'Juliol',
	m7:  'Agost',
	m8:  'Setembre',
	m9:  'Octubre',
	m10: 'Novembre',
	m11: 'Desembre',

	ms0:  'Gen',
	ms1:  'Feb',
	ms2:  'Març',
	ms3:  'Abr',
	ms4:  'Maig',
	ms5:  'Juny',
	ms6:  'Jul',
	ms7:  'Ag',
	ms8:  'Set',
	ms9:  'Oct',
	ms10: 'Nov',
	ms11: 'Des',

	d0: 'Diumenge',
	d1: 'Dilluns',
	d2: 'Dimarts',
	d3: 'Dimecres',
	d4: 'Dijous',
	d5: 'Divendres',
	d6: 'Dissabte',

	easter:       'Pasqües',
	easterMonday: 'Dilluns de Pasqües',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':    "Any nou",
		'06-01':    "Dia de Reis",
		'19-03':    "San Josep",
		'easter-3': "Dijous Sant",
		'easter-2': "Divendres Sant",
		'easter':   "Pasqua",
		'easter+1': "Dilluns de Pasqua",
		'01-05':    "Dia del Treballador",
		'15-08':    "Asunció",
		'12-10':    "Festa Nacional d'Espanya",
		'01-11':    "Dia de tots Sants",
		'06-12':    "Día de la Constitución Espanyola",
		'08-12':    "Inmaculada Concepció",
		'25-12':    "Nadal"
	}
};

window.calendar_languages['cs-CZ'] = {
	error_noview: 'Kalendář: Pohled {0} nebyl nalezen',
	error_dateformat: 'Kalendář: Chybný formát data {0}. Zvolte "now" nebo "yyyy-mm-dd"',
	error_loadurl: 'Kalendář: Není vyplněno URL události',
	error_where: 'Kalendář: Chyba navigace {0}. Can be only "next" or "prev" or "today"',
	error_timedevide: 'Kalendář: Rozdělení času musí být dělitelem 60 beze zbytku. Například 10, 15, 30',

	no_events_in_day: 'Dnes žádné události.',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'týden {0} of {1}',
	title_day: '{0} {1} {2}, {3}',

	week:        'Týden {0}',
	all_day:     'Celý den',
	time:        'Čas',
	events:      'Události',
	before_time: 'Ends before timeline',
	after_time:  'Starts after timeline',

	m0: 'Leden',
	m1: 'Únor',
	m2: 'Březen',
	m3: 'Duben',
	m4: 'Květen',
	m5: 'Červen',
	m6: 'Červenec',
	m7: 'Srpen',
	m8: 'Září',
	m9: 'Říjen',
	m10: 'Listopad',
	m11: 'Prosinec',

	ms0: 'Led',
	ms1: 'Úno',
	ms2: 'Bře',
	ms3: 'Dub',
	ms4: 'Kvě',
	ms5: 'Čer',
	ms6: 'Črv',
	ms7: 'Srp',
	ms8: 'Zář',
	ms9: 'Říj',
	ms10: 'Lis',
	ms11: 'Pro',

	d0: 'Neděle',
	d1: 'Pondělí',
	d2: 'Úterý',
	d3: 'Středa',
	d4: 'Čtvrtek',
	d5: 'Pátek',
	d6: 'Sobota',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
	}
};

window.calendar_languages['da-DK'] = {
	error_noview: 'Kalender: View {0} ikke fundet',
	error_dateformat: 'Kalender: Forkert dato format {0}. Det skal enten være "now" eller "åååå-mm-dd"',
	error_loadurl: 'Kalender: Aktivitet URL ikke angivet',
	error_where: 'Kalender: Forkert navigering {0}. Du kan kun bruge "next" eller "prev" eller "today"',
	error_timedevide: 'Kalender: Time split parameter skal være dividerbart med 60 uden decimaler. Noget ala 10, 15, 30',

	no_events_in_day: 'Ingen aktiviteret på denne dag.',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'uge {0} af {1}',
	title_day: '{0} {1} {2}, {3}',

	week:'Uge {0}',
	all_day:     'Hele dagen',
	time:        'Time',
	events:      'Aktivitet',
	before_time: 'Slutter før tidslinje',
	after_time:  'Starter efer tidslinje',

	m0: 'Januar',
	m1: 'Februar',
	m2: 'Marst',
	m3: 'April',
	m4: 'Maj',
	m5: 'Juni',
	m6: 'Juli',
	m7: 'August',
	m8: 'September',
	m9: 'Oktober',
	m10: 'November',
	m11: 'December',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mar',
	ms3: 'Apr',
	ms4: 'Maj',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Aug',
	ms8: 'Sep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Søndag',
	d1: 'Mandag',
	d2: 'Tirsdag',
	d3: 'Onsdag',
	d4: 'Torsdag',
	d5: 'Fredag',
	d6: 'Lørdag',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
	  '01-01':'Nytårsdag',
	  'easter-3':'Skærtorsdag',
	  'easter-2':'Langfredag',
	  'easter':'Påskedag',
	  'easter+1':'2. Påskedag',
	  'easter+26':'Store bededag',
	  'easter+39':'Kristi himmelfartsdag',
	  'easter+49':'Pinsedag',
	  'easter+50':'2. Pinsedag',
	  '25-12':'Juledag',
	  '26-12':'2. Juledag',
	}
};

window.calendar_languages['de-AT'] = {
	error_noview:     'Kalender: Ansicht {0} nicht gefunden',
	error_dateformat: 'Kalender: Falsches Datumsformat {0}. Sollte entweder "now" oder "yyyy-mm-dd" sein',
	error_loadurl:    'Kalender: Event-URL nicht gesetzt.',
	error_where:      'Kalender: Falsche Navigationsrichtung {0}. Nur "next", "prev" oder "today" sind erlaubt',
	error_timedevide: 'Kalender: Parameter für die Zeiteinteilung muss ein Teiler von 60 sein. Beispielsweise 10, 15, 30',

	no_events_in_day: 'Keine Ereignisse an diesem Tag.',

	title_year:  '{0}',
	title_month: '{0} {1}',
	title_week:  '{0}. Kalenderwoche {1}',
	title_day:   '{0}, der {1}. {2} {3}',

	week:        'KW {0}',
	all_day:     'Ganztägig',
	time:        'Zeit',
	events:      'Ereignisse',
	before_time: 'Endet vor Zeitspanne',
	after_time:  'Beginnt nach Zeitspanne',

	m0:  'Jänner',
	m1:  'Februar',
	m2:  'März',
	m3:  'April',
	m4:  'Mai',
	m5:  'Juni',
	m6:  'Juli',
	m7:  'August',
	m8:  'September',
	m9:  'Oktober',
	m10: 'November',
	m11: 'Dezember',

	ms0:  'Jan',
	ms1:  'Feb',
	ms2:  'Mär',
	ms3:  'Apr',
	ms4:  'Mai',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aug',
	ms8:  'Sep',
	ms9:  'Okt',
	ms10: 'Nov',
	ms11: 'Dez',

	d0: 'Sonntag',
	d1: 'Montag',
	d2: 'Dienstag',
	d3: 'Mittwoch',
	d4: 'Donnerstag',
	d5: 'Freitag',
	d6: 'Samstag',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     'Neujahr',
		'06-01':     'Heilige Drei Könige',
		'easter-2':  'Karfreitag',
		'easter+1':  'Ostermontag',
		'01-05':     'Staatsfeiertag',
		'easter+39': 'Christi Himmelfahrt',
		'easter+49': 'Pfingstsonntag',
		'easter+50': 'Pfingstmontag',
		'15-08':     'Mariä Himmelfahrt',
		'26-10':     'Nationalfeiertag',
		'01-11':     'Allerheiligen',
		'08-12':     'Mariä Empfängnis',
		'24-12':     'Heiliger Abend',
		'25-12':     'Weihnachten',
		'26-12':     'Stefanitag',
		'31-12':     'Silvester',
	}
};

window.calendar_languages['de-DE'] = {
	error_noview:     'Kalender: Ansicht {0} nicht gefunden',
	error_dateformat: 'Kalender: Falsches Datumsformat {0}. Sollte entweder "now" oder "yyyy-mm-dd" sein',
	error_loadurl:    'Kalender: Event-URL nicht gesetzt.',
	error_where:      'Kalender: Falsche Navigationsrichtung {0}. Nur "next", "prev" oder "today" sind erlaubt',
	error_timedevide: 'Kalender: Parameter für die Zeiteinteilung muss ein Teiler von 60 sein. Beispielsweise 10, 15, 30',

	no_events_in_day: 'Keine Ereignisse an diesem Tag.',

	title_year:  '{0}',
	title_month: '{0} {1}',
	title_week:  '{0}. Kalenderwoche {1}',
	title_day:   '{0}, der {1}. {2} {3}',

	week:        'KW {0}',
	all_day:     'Ganztägig',
	time:        'Zeit',
	events:      'Ereignisse',
	before_time: 'Endet vor Zeitspanne',
	after_time:  'Beginnt nach Zeitspanne',

	m0:  'Januar',
	m1:  'Februar',
	m2:  'März',
	m3:  'April',
	m4:  'Mai',
	m5:  'Juni',
	m6:  'Juli',
	m7:  'August',
	m8:  'September',
	m9:  'Oktober',
	m10: 'November',
	m11: 'Dezember',

	ms0:  'Jan',
	ms1:  'Feb',
	ms2:  'Mär',
	ms3:  'Apr',
	ms4:  'Mai',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aug',
	ms8:  'Sep',
	ms9:  'Okt',
	ms10: 'Nov',
	ms11: 'Dez',

	d0: 'Sonntag',
	d1: 'Montag',
	d2: 'Dienstag',
	d3: 'Mittwoch',
	d4: 'Donnerstag',
	d5: 'Freitag',
	d6: 'Samstag',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     'Neujahr',
		'06-01':     'Heilige Drei Könige',
		'easter-3':  'Gründonnerstag',
		'easter-2':  'Karfreitag',
		'easter':    'Ostersonntag',
		'easter+1':  'Ostermontag',
		'01-05':     'Tag der Arbeit',
		'easter+39': 'Himmelfahrt',
		'easter+49': 'Pfingstsonntag',
		'easter+50': 'Pfingstmontag',
		'15-08':     'Mariä Himmelfahrt',
		'03-10':     'Tag der Deutschen Einheit',
		'01-11':     'Allerheiligen',
		'25-12':     'Erster Weihnachtsfeiertag',
		'26-12':     'Zweiter Weihnachtsfeiertag',
	}
};

window.calendar_languages['el-GR'] = {
	error_noview:     'Ημερολόγιο: Η προβολή {0} δεν βρέθηκε',
	error_dateformat: 'Ημερολόγιο: Η μορφή της ημερομηνίας {0} δεν είναι έγκυρη. Παρακαλώ χρησιμοποιήστε "now" ή "yyyy-mm-dd"',
	error_loadurl:    'Ημερολόγιο: Η διεύθυνση λήψης των event δεν έχει καθοριστεί',
	error_where:      'Ημερολόγιο: Η μορφή κατεύθυνσης {0} δεν είναι έγκυρη. Παρακαλώ χρησιμοποιήστε μία εκ των "next", "prev" και "today"',
	error_timedevide: 'Ημερολόγιο: παράμετρος στο διαχωριστή χρόνου πρέπει να διαιρέσει το 60 με έναν ακέραιο αριθμό. Για παράδειγμα 10, 15, 30',

	no_events_in_day: 'Δεν υπάρχουν καταχωρήσεις σε αυτήν την ημέρα.',

	title_year:  'Έτος {0}',
	title_month: '{0} {1}',
	title_week:  'Εβδομάδα {0} του έτους {1}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Εβδομάδα {0}',
	all_day:     'Όλη την ημέρα',
	time:        'χρόνος',
	events:      'εξελίξεις',
	before_time: 'Ώρα πριν από το τέλος της ταινίας',
	after_time:  'Τερματισμός μετά από μια προσωρινή ταινία',

	m0:  'Ιανουάριος',
	m1:  'Φεβρουάριος',
	m2:  'Μάρτιος',
	m3:  'Απρίλιος',
	m4:  'Μάϊος',
	m5:  'Ιούνιος',
	m6:  'Ιούλιος',
	m7:  'Αύγουστος',
	m8:  'Σεπτέμβριος',
	m9:  'Οκτώβριος',
	m10: 'Νοέμβριος',
	m11: 'Δεκέμβριος',

	ms0:  'Ιαν',
	ms1:  'Φεβ',
	ms2:  'Μαρ',
	ms3:  'Απρ',
	ms4:  'Μαϊ',
	ms5:  'Ιουν',
	ms6:  'Ιουλ',
	ms7:  'Αυγ',
	ms8:  'Σεπ',
	ms9:  'Οκτ',
	ms10: 'Νοε',
	ms11: 'Δεκ',

	d0: 'Κυριακή',
	d1: 'Δευτέρα',
	d2: 'Τρίτη',
	d3: 'Τετάρτη',
	d4: 'Πέμπτη',
	d5: 'Παρασκευή',
	d6: 'Σάββατο',

	easter:       'Πάσχα',
	easterMonday: 'Δευτέρα του Πάσχα',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     "Πρωτοχρονιά",
		'06-01':     "Θεοφάνεια",
		'easter-41': "Καθαρά Δευτέρα",
		'23-03':     "Εικοστή Πέμπτη Μαρτιου",
		'easter-2':  "Μεγάλη Παρασκευή",
		'easter':    "Κυριακή του Πάσχα",
		'easter+1':  "Δευτέρα του Πάσχα",
		'01-05':     "Εργατική Πρωτομαγιά",
		'easter+49': "Πεντηκοστή",
		'easter+50': "Αγίου Πνεύματος",
		'15-08':     "Η Κοίμηση της Θεοτόκου",
		'28-10':     "Ημέρα του Όχι",
		'25-12':     "Χριστούγεννα",
		'26-12':     "Σύναξις Ὑπεραγίας Θεοτόκου Μαρίας"
	}
};

window.calendar_languages['es-CO'] = {
  error_noview:     'Calendar: Vista {0} no encontrada',
  error_dateformat: 'Calendar: Formato de Fecha Inválido {0}. Debe ser "now" o con el formato "yyyy-mm-dd"',
  error_loadurl:    'Calendar: URL de datos no definida',
  error_where:      'Calendar: Dirección de navegación errónea {0}. Valores válidos: "next" o "prev" o "today"',
  error_timedevide: 'Calendario: parámetro para el separador de hora debe dividir 60 por un entero. Por ejemplo 10, 15, 30',

  title_year:  'Año {0}',
  title_month: '{0} año {1}',
  title_week:  '{0} semana del año {1}',
  title_day:   '{0} {1} {2} año {3}',

  week:        'Semana {0}',
  all_day:     'Todo el día',
  time:        'Hora',
  events:      'Eventos',
  before_time: 'Cita antes de la hora de atención',
  after_time:  'Cita después de la hora de atención',


  m0:  'Enero',
  m1:  'Febrero',
  m2:  'Marzo',
  m3:  'Abril',
  m4:  'Mayo',
  m5:  'Junio',
  m6:  'Julio',
  m7:  'Agosto',
  m8:  'Septiembre',
  m9:  'Octubre',
  m10: 'Noviembre',
  m11: 'Diciembre',

  ms0:  'Ene',
  ms1:  'Feb',
  ms2:  'Mar',
  ms3:  'Abr',
  ms4:  'May',
  ms5:  'Jun',
  ms6:  'Jul',
  ms7:  'Ago',
  ms8:  'Sep',
  ms9:  'Oct',
  ms10: 'Nov',
  ms11: 'Dic',

  d0: 'Domingo',
  d1: 'Lunes',
  d2: 'Martes',
  d3: 'Miércoles',
  d4: 'Jueves',
  d5: 'Viernes',
  d6: 'Sábado',

  easter:       'Semana Santa',
  easterMonday: 'Lunes de Pascua',

  first_day: 1,
  week_numbers_iso_8601: true,

  holidays: {
    // for 2014
    "01-01": "Año Nuevo",
    "06-01": "Día de los Reyes Magos",
    "24-03": "Día de San José",
    "13-04": "Domingo de Ramos",
    "17-04": "Jueves Santo",
    "18-04": "Viernes Santo",
    "20-04": "Domingo de Resurrección",
    "01-05": "Día del Trabajo",
    "02-06": "Día de la Ascensión",
    "23-06": "Corpus Christi",
    "30-06": "Sagrado Corazón",
    "30-06": "San Pedro y San Pablo",
    "20-07": "Día de la Independenci",
    "07-08": "Batalla de Boyaca",
    "18-08": "La asunción de la Virgen",
    "13-10": "Día de la Raza",
    "03-11": "Todos los Santo",
    "17-11": "Independencia de Cartagena",
    "08-12": "Día de la Inmaculada Concepción",
    "25-12": "Día de Navidad"
    /* For 2015
    "01-01": "Año Nuevo",
    "12-01": "Día de los Reyes Magos",
    "23-03": "Día de San José",
    "29-03": "Domingo de Ramos",
    "02-04": "Jueves Santo",
    "03-04": "Viernes Santo",
    "05-04": "Domingo de Resurrección",
    "01-05":  "Día del Trabajo",
    "18-05": "Día de la Ascensión",
    "08-06": "Corpus Christi",
    "15-06": "Sagrado Corazón",
    "29-06": "San Pedro y San Pablo",
    "20-07": "Día de la Independencia",
    "07-08":  "Batalla de Boyacá",
    "17-08": "La asunción de la Virgen",
    "12-10": "Día de la Raza",
    "02-10": "Todos los Santos",
    "16-10": "Independencia de Cartagena",
    "08-12": "Día de la Inmaculada Concepción",
    "25-12": "Día de Navidad"
    */
  }

};

window.calendar_languages['es-ES'] = {
	error_noview:     'Calendario: Vista {0} no encontrada',
	error_dateformat: 'Calendario: Formato de fecha inválido {0}. Debe ser "now" o "yyyy-mm-dd"',
	error_loadurl:    'Calendario: URL de carga de eventos no configurada',
	error_where:      'Calendario: Dirección de navegación incorrecta {0}. Los valores correctos son "next" o "prev" o "today"',
	error_timedevide: 'Calendario: parámetro para el separador de hora debe dividir 60 por un entero. Por ejemplo 10, 15, 30',

	no_events_in_day: 'No hay eventos hoy',

	title_year:  'Año {0}',
	title_month: '{0} {1}',
	title_week:  'Semana {0} del {1}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Semana {0}',
	all_day:     'Todo el día',
	time:        'Tiempo',
	events:      'Eventos',
	before_time: 'Horas previas',
	after_time:  'Horas posteriores',

	m0:  'Enero',
	m1:  'Febrero',
	m2:  'Marzo',
	m3:  'Abril',
	m4:  'Mayo',
	m5:  'Junio',
	m6:  'Julio',
	m7:  'Agosto',
	m8:  'Septiembre',
	m9:  'Octubre',
	m10: 'Noviembre',
	m11: 'Diciembre',

	ms0:  'Ene',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Abr',
	ms4:  'May',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Ago',
	ms8:  'Sep',
	ms9:  'Oct',
	ms10: 'Nov',
	ms11: 'Dic',

	d0: 'Domingo',
	d1: 'Lunes',
	d2: 'Martes',
	d3: 'Miércoles',
	d4: 'Jueves',
	d5: 'Viernes',
	d6: 'Sábado',

	easter:       'Pascua',
	easterMonday: 'Lunes de Pascua',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':    "Año Nuevo",
		'06-01':    "Día de Reyes",
		'19-03':    "San José",
		'easter-3': "Jueves Santo",
		'easter-2': "Viernes Santo",
		'easter':   "Pascua",
		'easter+1': "Lunes de Pascua",
		'01-05':    "Día del Trabajador",
		'15-08':    "Asunción",
		'12-10':    "Fiesta Nacional de España",
		'01-11':    "Día de todos los Santos",
		'06-12':    "Día de la Constitución",
		'08-12':    "Inmaculada Concepción",
		'25-12':    "Navidad"
	}
};

window.calendar_languages['es-MX'] = {
	error_noview:     'Calendar: Vista {0} no encontrada',
	error_dateformat: 'Calendar: Formato de Fecha Inválido {0}. Debe ser "now" o con el formato "yyyy-mm-dd"',
	error_loadurl:    'Calendar: URL de datos no definida',
	error_where:      'Calendar: Dirección de navegación errónea {0}. Valores válidos: "next" o "prev" o "today"',
	error_timedevide: 'Calendario: parámetro para el separador de hora debe dividir 60 por un entero. Por ejemplo 10, 15, 30',

	title_year:  'Año {0}',
	title_month: '{0} año {1}',
	title_week:  '{0} semana del año {1}',
	title_day:   '{0} {1} {2} año {3}',

	week:        'Semana {0}',
	all_day:     'Todo el día',
	time:        'Tiempo',
	events:      'Desarrollos',
	before_time: 'Tiempo antes de la cinta final',
	after_time:  'Fin después de una cinta temporal',


	m0:  'Enero',
	m1:  'Febrero',
	m2:  'Marzo',
	m3:  'Abril',
	m4:  'Mayo',
	m5:  'Junio',
	m6:  'Julio',
	m7:  'Agosto',
	m8:  'Septiembre',
	m9:  'Octubre',
	m10: 'Noviembre',
	m11: 'Diciembre',

	ms0:  'Ene',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Abr',
	ms4:  'May',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Ago',
	ms8:  'Sep',
	ms9:  'Oct',
	ms10: 'Nov',
	ms11: 'Dic',

	d0: 'Domingo',
	d1: 'Lunes',
	d2: 'Martes',
	d3: 'Miércoles',
	d4: 'Jueves',
	d5: 'Viernes',
	d6: 'Sábado',

	easter:       'Pascuas',
	easterMonday: 'Lunes de Pascuas',

	first_day: 2,

	holidays: {
		'01-01': "Año Nuevo",
		'05-02': "Día de la Constitución",
		'21-03': "Natalicio de Benito Juárez",
		'01-05': "Día del Trabajo",
		'16-09': "Día de la Independencia",
		'20-11': "Día de la Revolución",
		'01-12': "Transmisión del Poder Ejecutivo Federal",
		'25-12': "Navidad"
	}
};

window.calendar_languages['fi-FI'] = {
    error_noview: 'Kalenteri: {0} näkymää ei löytynyt',
    error_dateformat: 'Kalenteri: väärä päivämääräformaatti {0}. Oikea formaatti on "yyyy-mm-dd"',
    error_loadurl: 'Kalenteri: Tapahtuman osoitetta ei ole asetettu',
    error_where: 'Kalenteri: Väärä navigointisuunta {0}. Suunta voi olla vain "seuraava" tai "edellinen" or "tänään"',
    error_timedevide: 'Kalenteri: Aikajaon tulee olla alle 60 ja kokonaisluku, kuten 10, 15, 30',

    no_events_in_day: 'Ei tapahtumia.',

    title_year: '{0}',
    title_month: '{0} {1}',
    title_week: 'viikko {0}/{1}',
    title_day: '{0} {1} {2}, {3}',

    week:        'Viikko',
    all_day:     'Koko päivä',
    time:        'Aika',
    events:      'Tapahtumat',
    before_time: 'Loppu ennen aikajanaa',
    after_time:  'Alkaa aikajanan jälkeen',

    m0: 'Tammikuu',
    m1: 'Helmikuu',
    m2: 'Maaliskuu',
    m3: 'Huhtikuu',
    m4: 'Toukokuu',
    m5: 'Kesäkuu',
    m6: 'Heinäkuu',
    m7: 'Elokuu',
    m8: 'Syyskuu',
    m9: 'Lokakuu',
    m10: 'Marraskuu',
    m11: 'Joulukuu',

    ms0: 'Tammi',
    ms1: 'Helmi',
    ms2: 'Maalis',
    ms3: 'Huhti',
    ms4: 'Touko',
    ms5: 'Kesä',
    ms6: 'Heinä',
    ms7: 'Elo',
    ms8: 'Syys',
    ms9: 'Loka',
    ms10: 'Marras',
    ms11: 'Joulu',

    d0: 'Sunnuntai',
    d1: 'Maanantai',
    d2: 'Tiistai',
    d3: 'Keskiviikko',
    d4: 'Torstai',
    d5: 'Perjantai',
    d6: 'Lauantai',

    first_day: 1,
    week_numbers_iso_8601: true,

 holidays: {
      // January 1, 6
      '01-01': "Uudenvuodenpäivä",
      '06-01': "Loppiainen",
      'easter-2': "Pitkäperjantai",
      'easter': "Pääsiäispäivä",
      'easter+1': "2. pääsiäispäivä",
      'easter+39': "Helatorstai",
      'easter+49': "Helluntaipäivä",
      '01-05': "Vappu",
      '06-12': "Itsenäisyyspäivä",
      '24-12': "Jouluaatto",
      '25-12': "Joulupäivä",
      '26-12': "Tapaninpäivä"
    }
};

window.calendar_languages['fr-FR'] = {
	error_noview:     'Calendrier: Vue {0} introuvable',
	error_dateformat: 'Calendrier: Format de date incorrect {0}. Formats acceptés : "now" ou "yyyy-mm-dd"',
	error_loadurl:    'Calendrier: L\'adresse de chargement des évènements n\'est pas définie',
	error_where:      'Calendrier: Mauvaise commande de navigation {0}. Commandes acceptées : "suivant", "précédent" or "aujourd\'hui"',
	error_timedevide: 'Calendrier: La valeur des espaces-temps doit diviser 60 avec une valeur exacte. Par exemple 10, 15, 30',

	title_year:  'Année {0}',
	title_month: '{0} {1}',
	title_week:  'Semaine {0}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Semaine {0}',
	all_day:     'Toute la journée',
	time:        'Heure',
	events:      'Evènements',
	before_time: 'Se terminant avant le début de plage horaire',
	after_time:  'Se terminant après la fin de la plage horaire',

	m0:  'Janvier',
	m1:  'Février',
	m2:  'Mars',
	m3:  'Avril',
	m4:  'Mai',
	m5:  'Juin',
	m6:  'Juillet',
	m7:  'Août',
	m8:  'Septembre',
	m9:  'Octobre',
	m10: 'Novembre',
	m11: 'Décembre',

	ms0:  'Jan',
	ms1:  'Fév',
	ms2:  'Mar',
	ms3:  'Avr',
	ms4:  'Mai',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aoû',
	ms8:  'Sep',
	ms9:  'Oct',
	ms10: 'Nov',
	ms11: 'Déc',

	d0: 'Dimanche',
	d1: 'Lundi',
	d2: 'Mardi',
	d3: 'Mercredi',
	d4: 'Jeudi',
	d5: 'Vendredi',
	d6: 'Samedi',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     "Premier de l'an",
		'easter':    "Pâques",
		'easter+1':  "Lundi de Pâques",
		'01-05':     "Fête du Travail",
		'08-05':     "Fête de la Victoire 1945",
		'easter+39': "Ascension",
		'easter+49': "Pentecôte",
		'easter+50': "Lundi de Pentecôte",
		'14-07':     "Fête Nationale",
		'15-08':     "Assomption",
		'01-11':     "Toussaint",
		'11-11':     "Armistice 1918",
		'25-12':     "Noël"
	}
};

window.calendar_languages['hr-HR'] = {
        error_noview:     'Kalendar: Prikaz {0} nije pronađen.',
        error_dateformat: 'Kalendar: Neispravan format datuma {0}. Unesite "now" ili "yyyy-mm-dd"',
        error_loadurl:    'Kalendar: Poveznica događaja nije postavljena.',
        error_where:      'Kalendar: Pogrešan smjer navigacije {0}. Moguće je birati "sljedeće", "prethodno" ili "danas"',
        error_timedevide: 'Kalendar: Rezultat dijeljenja vremena ne smije sadržavati decimalna mjesta. Djelitelj može biti, primjerice, 10, 15, 30.',

        no_events_in_day: 'Nema događanja za današnji dan.',

        title_year:  'Godina {0}.',
        title_month: 'Mjesec {0} {1}. godine',
        title_week:  '{0}. tjedan {1}. godine',
        title_day:   '{0}, {1}. {2} {3}.',

        week:        '{0}. tjedan',
        all_day:     'Cijeli dan',
        time:        'Vrijeme',
        events:      'Događaji i zbivanja',
        before_time: 'Nema završetka',
        after_time:  'Nema početka',

        m0:  'Siječanj',
        m1:  'Veljača',
        m2:  'Ožujak',
        m3:  'Travanj',
        m4:  'Svibanj',
        m5:  'Lipanj',
        m6:  'Srpanj',
        m7:  'Kolovoz',
        m8:  'Rujan',
        m9:  'Listopad',
        m10: 'Studeni',
        m11: 'Prosinac',

        ms0:  'Siječanj',
        ms1:  'Veljača',
        ms2:  'Ožujak',
        ms3:  'Travanj',
        ms4:  'Svibanj',
        ms5:  'Lipanj',
        ms6:  'Srpanj',
        ms7:  'Kolovoz',
        ms8:  'Rujan',
        ms9:  'Listopad',
        ms10: 'Studeni',
        ms11: 'Prosinac',

        d0: 'Nedjelja',
        d1: 'Ponedjeljak',
        d2: 'Utorak',
        d3: 'Srijeda',
        d4: 'Četvrtak',
        d5: 'Petak',
        d6: 'Subota',

        first_day: 1,
        week_numbers_iso_8601: true
};

window.calendar_languages['hu-HU'] = {
	error_noview: 'Naptár: {0} nézet nem található',
	error_dateformat: 'Naptár: Hibás dátum formátum {0}.  "now" vagy "éééé-hh-nn" lehet',
	error_loadurl: 'Naptár: Esemény URL nincs beállítva',
	error_where: 'Naptár: Rossz navigálási irány {0}. Csak "next", "prev" vagy "today" lehet',
	error_timedevide: 'Naptár: Az idő elválasztó 60 maradék nélküli osztója kell legyen. Például: 10, 15, 30',
	no_events_in_day: 'Nincs esemény.',

	title_year: '{0}',
	title_month: '{1} {0}' ,
	title_week: '{1} {0}. hét',
	title_day: '{3}. {2} {1}., {0}',

	week:'{0}. hét',
	all_day:     'Egész napos',
	time:        'Idő',
	events:      'Események',
	before_time: 'Az idővonal előtt végződik',
	after_time:  'Az idővonal után kezdődik',

	m0: 'Január',
	m1: 'Február',
	m2: 'Március',
	m3: 'Április',
	m4: 'Május',
	m5: 'Június',
	m6: 'Július',
	m7: 'Augusztus',
	m8: 'Szeptember',
	m9: 'Október',
	m10: 'November',
	m11: 'December',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Már',
	ms3: 'Ápr',
	ms4: 'Máj',
	ms5: 'Jún',
	ms6: 'Júl',
	ms7: 'Aug',
	ms8: 'Szep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Vasárnap',
	d1: 'Hétfő',
	d2: 'Kedd',
	d3: 'Szerda',
	d4: 'Csütörtök',
	d5: 'Péntek',
	d6: 'Szombat',

	first_day: 1,
	week_numbers_iso_8601: true,
    holidays: {
		'01-01':     'Újév',
		'easter+1':  'Húsvéthétfő',
		'01-05':     'Május elseje',
		'15-13':     '1848–49-es forradalom és szabadságharc',
		'easter+49': 'Pünkösdvasárnap',
		'easter+50': 'Pünkösdhétfő',
		'08-20':     'Államalapítás ünnepe',
		'10-23':     '1956-os forradalom és szabadságharc',
		'25-12':     'Karácsony',
		'26-12':     'Karácsony',
	}

};

window.calendar_languages['id-ID'] = {
	error_noview: 'Kalender: Tampilan {0} tidak ditemukan',
	error_dateformat: 'Kalender: Format tanggal salah {0}. Seharusnya "now" atau "yyyy-mm-dd"',
	error_loadurl: 'Kalender: URL dari jadwal belum di tentukan',
	error_where: 'Kalender: Arah navigasi salah {0}. Hanya boleh "next" atau "prev" atau "today"',
	error_timedevide: 'Kalender: Parameter perpecahan waktu harus dibagi 60 tanpa desimal. Seperti 10, 15, 30',

	no_events_in_day: 'Tidak ada Jadwal di hari ini.',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'minggu {0} dari {1}',
	title_day: '{0}, {1} {2} {3}',

	week:'Minggu {0}',
	all_day:     'Semua hari',
	time:        'Jam',
	events:      'Jadwal',
	before_time: 'Berakhir sebelum waktu',
	after_time:  'Dimulai setelah waktu',

	m0: 'Januari',
	m1: 'Februari',
	m2: 'Maret',
	m3: 'April',
	m4: 'Mei',
	m5: 'Juni',
	m6: 'Juli',
	m7: 'Agustus',
	m8: 'September',
	m9: 'Oktober',
	m10: 'November',
	m11: 'Desember',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mar',
	ms3: 'Apr',
	ms4: 'Mei',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Ags',
	ms8: 'Sep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Des',

	d0: 'Minggu',
	d1: 'Senin',
	d2: 'Selasa',
	d3: 'Rabu',
	d4: 'Kamis',
	d5: 'Jumat',
	d6: 'Sabtu',

	first_day: 1,
	week_numbers_iso_8601: true,
	holidays: {
		/* for 2015 */
		'03-01-2015':     	'Maulid Nabi Muhammad SAW',
		'19-01-2015':     	'Tahun Baru Imlek 2566 Kongzili',
		'21-03-2015':     	'Hari Raya Nyepi Tahun Baru Saka 1937',
		'16-05-2015':     	'Isra Mikraj Nabi Muhammad SAW',
		'02-06-2015':     	'Hari Raya Waisak 2559',
		'17-07-2015':     	'Hari Raya Idul Fitri 1436 Hijriah',
		'18-07-2015':     	'Hari Raya Idul Fitri 1436 Hijriah',
		'24-09-2015':     	'Hari Raya Idul Adha 1436 Hijriah',
		'14-10-2015':     	'Tahun Baru Islam 1437 Hijriah',

		'01-01':     				'Tahun Baru',
		'01-05':     				'Hari Buruh Internasional',
		'17-08':     				'Hari Kemerdekaan RI (Independence Day)',
		'25-12':     				'Hari Raya Natal',

		'easter-2': 				'Jumat Agung',
		'easter': 					'Paskah',
		'easter+39': 				'Kenaikan Yesus Kristus',
		
		/* for 2016 */
		'08-02-2016':				'Tahun Baru Imlek 2567',
		'09-03-2016':				'Hari Raya Nyepi Tahun Baru Saka 1938',
		'06-05-2016':				'Isra Mikraj Nabi Muhammad SAW 1437 Hijriah',
		'22-05-2016':				'Hari Raya Waisak 2560',
		'06-07-2016':				'Hari Raya Idul Fitri 1437 Hijriah',
		'07-07-2016':				'Hari Raya Idul Fitri 1437 Hijriah',
		'12-09-2016':				'Hari Raya Idul Adha 1437 Hijriah',
		'02-10-2016':				'Tahun Baru Islam 1438 Hijriah',
		'12-12-2016':				'Maulid Nabi Muhammad SAW'
		
	}
};

window.calendar_languages['it-IT'] = {
	error_noview:     'Calendario: vista {0} non trovata',
	error_dateformat: 'Calendario: formato data {0} non valido. Dovrebbe essere "now" o "yyyy-mm-dd"',
	error_loadurl:    'Calendario: URL di caricamento degli eventi non impostato',
	error_where:      'Calendario: direzione di spostamento {0} non valida. I valori validi sono "next" o "prev" o "today"',
	error_timedevide: 'Calendario: Il divisore del tempo deve poter dividere 60 in un numero intero. Per esempio 10, 15, 30',

	no_events_in_day: 'Nessun evento in questo giorno.',

	title_year:  'Anno {0}',
	title_month: '{0} {1}',
	title_week:  'Settimana {0} del {1}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Settimana {0}',
	all_day:     'Tutto il giorno',
	time:        'Ora',
	events:      'Eventi',
	before_time: 'Evento antecedente',
	after_time:  'Evento che prosegue',

	m0:  'Gennaio',
	m1:  'Febbraio',
	m2:  'Marzo',
	m3:  'Aprile',
	m4:  'Maggio',
	m5:  'Giugno',
	m6:  'Luglio',
	m7:  'Agosto',
	m8:  'Settembre',
	m9:  'Ottobre',
	m10: 'Novembre',
	m11: 'Dicembre',

	ms0:  'Gen',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Apr',
	ms4:  'Mag',
	ms5:  'Giu',
	ms6:  'Lug',
	ms7:  'Ago',
	ms8:  'Set',
	ms9:  'Ott',
	ms10: 'Nov',
	ms11: 'Dic',

	d0: 'Domenica',
	d1: 'Lunedì',
	d2: 'Martedì',
	d3: 'Mercoledì',
	d4: 'Giovedì',
	d5: 'Venerdì',
	d6: 'Sabato',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':    'Capodanno',
		'06-01':    'Epifania',
		'easter':   'Pasqua',
		'easter+1': 'Lunedì dell’Angelo',
		'25-04':    'Festa della Liberazione',
		'01-05':    'Festa del Lavoro',
		'02-06':    'Festa della Repubblica',
		'15-08':    'Ferragosto',
		'01-11':    'Ognissanti',
		'08-12':    'Immacolata Concezione',
		'25-12':    'Natale',
		'26-12':    'Santo Stefano'
	}
};

window.calendar_languages['ja-JP'] = {
	error_noview: 'カレンダーのビューが見つかりません： {0}',
	error_dateformat: '日付のフォーマットが間違っています：{0}。"now" か "yyyy-mm-dd" で指定して下さい。',
	error_loadurl: 'カレンダーのイベントURLがセットされていません。',
	error_where: 'カレンダーのナビゲーションが間違っています：{0}。"next" か "prev" か "today" でセットして下さい。',
	error_timedevide: 'カレンダーの時間分割パラメーターは、10, 15, 30等の60を小数なしで割り切れる整数を指定して下さい。',

	no_events_in_day: 'イベントはありません。',

	title_year: '{0}年',
	title_month: '{1}年{0}',
	title_week: '{1}年{0}週目',
	title_day: '{3}年{2}{1}日({0})',

	week:        '{0}週目',
	all_day:     '終日',
	time:        '時間',
	events:      'イベント',
	before_time: 'タイムラインの前に終了',
	after_time:  'タイムラインの後に開始',

	m0: '1月',
	m1: '2月',
	m2: '3月',
	m3: '4月',
	m4: '5月',
	m5: '6月',
	m6: '7月',
	m7: '8月',
	m8: '9月',
	m9: '10月',
	m10: '11月',
	m11: '12月',

	ms0: '1月',
	ms1: '2月',
	ms2: '3月',
	ms3: '4月',
	ms4: '5月',
	ms5: '6月',
	ms6: '7月',
	ms7: '8月',
	ms8: '9月',
	ms9: '10月',
	ms10: '11月',
	ms11: '12月',

	d0: '日',
	d1: '月',
	d2: '火',
	d3: '水',
	d4: '木',
	d5: '金',
	d6: '土',
	first_day: 2,
	holidays: {
	}
};

window.calendar_languages['ko-KR'] = {
	error_noview: '캘린더: {0} 볼 수 없습니다',
	error_dateformat: '캘린더: 잘못된 날짜 형식 {0}. "now" 또는 "yyyy-mm-dd" 형식이어야 합니다',
	error_loadurl: '캘린더: 이벤트 URL이 설정되지 않았습니다',
	error_where: '캘린더: 잘못된 탐색 방향 {0}. 오직 "next" 또는 "prev" 또는 "today"만 가능합니다',
	error_timedevide: '캘린더: 시간 분할 매개변수는 소수 없이 60을 분할합니다. 10, 15, 30과 같이 합니다',

	no_events_in_day: '이 날에 이벤트가 없습니다.',

	title_year: '{0}년',
	title_month: '{1}년 {0}',
	title_week: '{1}년 {0}째주',
	title_day: '{3}년 {2} {1}일 {0}',

	week:'주',
	all_day:     '하루종일',
	time:        '시간',
	events:      '이벤트',
	before_time: '타임라인 전에 끝남',
	after_time:  '타임라인 전에 시작함',

    m0: '1월',
	m1: '2월',
	m2: '3월',
	m3: '4월',
	m4: '5월',
	m5: '6월',
	m6: '7월',
	m7: '8월',
	m8: '9월',
	m9: '10월',
	m10: '11월',
	m11: '12월',

	ms0: '1월',
	ms1: '2월',
	ms2: '3월',
	ms3: '4월',
	ms4: '5월',
	ms5: '6월',
	ms6: '7월',
	ms7: '8월',
	ms8: '9월',
	ms9: '10월',
	ms10: '11월',
	ms11: '12월',

	d0: '일요일',
	d1: '월요일',
	d2: '화요일',
	d3: '수요일',
	d4: '목요일',
	d5: '금요일',
	d6: '토요일',

	first_day: 2,

	holidays: {
	 	'01-01': '신정',
	 	'01-03': '삼일절',
	 	'05-05': '어린이날',
	 	'06-06': '현충일',
	 	'15-08': '광복절',
	 	'03-10': '개천절',
	 	'25-12': '크리스마스'
	 }
};

window.calendar_languages['ms-MY'] = {
	error_noview: 'Kalendar: Paparan {0} tidak wujud',
	error_dateformat: 'Kalendar: Format waktu salah {0}. Seharusnya "now" atau "yyyy-mm-dd"',
	error_loadurl: 'Kalendar: alamat URL tidak wujud',
	error_where: 'Kalendar: Arahan navigasi salah {0}. hanya arahan "next" atau "prev" ataupun "today" sahaja',
	error_timedevide: 'Kalendar: Parameter masa perlu dibahagikan dengan nilai 60 tanpa nilai desimal. Seperti nilai 10, 15, 30',

	no_events_in_day: 'Tiada acara untuk hari ini',

	title_year: '{0}',

	title_month: '{0} {1}',

	title_week: 'minggu {0} daripada {1}',

	title_day: '{0} {1} {2}, {3}',

	week:'Minggu {0}',
	all_day:     'Sepanjang hari',
	time:        'Waktu',
	events:      'Acara',
	before_time: 'Nerakhir sebelum waktu',
	after_time:  'Bermula selepas waktu',

	m0: 'Januari',
	m1: 'Februari',
	m2: 'Mac',
	m3: 'April',
	m4: 'Mei',
	m5: 'Jun',
	m6: 'Julai',
	m7: 'Ogos',
	m8: 'September',
	m9: 'Oktober',
	m10: 'November',
	m11: 'Disember',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mac',
	ms3: 'Apr',
	ms4: 'Mei',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Ogs',
	ms8: 'Sep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Dis',

	d0: 'Ahad',
	d1: 'Isnin',
	d2: 'Selasa',
	d3: 'Rabu',
	d4: 'Khamis',
	d5: 'Jumaat',
	d6: 'Sabatu',

	first_day: 1,
	week_numbers_iso_8601: true,
 
	holidays: {
		'18-07-2015':     	'Hari Raya Aidil Fitri 1436 Hijriah',

		'01-01':     				'Sambutan Tahun Baru',
		'01-05':     				'Hari Pekerja',
		'31-08':     				'Hari Kemerdekaan Malaysia (Independence Day)',
	}
};

window.calendar_languages['nl-NL'] = {
	error_noview:     'Kalender: View {0} niet gevonden',
	error_dateformat: 'Kalender: Verkeerde datum formaat {0}. Dit formaat moet "now" zijn of "yyyy-mm-dd"',
	error_loadurl:    'Kalender: Agenda laad URL is niet gezet (loadUrl)',
	error_where:      'Kalender: Verkeerde navigatie richting {0}. Kan alleen "next", "prev" of "today" zijn',
	error_timedevide: 'Kalender: De tijd split parameter moet 60 kunnen verdelen naar een geheel getal (zonder decimalen). Bijvoorbeeld 10, 15, 30',

	no_events_in_day: 'Geen evenementen gevonden op deze dag.',

	title_year:  '{0}',
	title_month: '{0} {1}',
	title_week:  'week {0} van {1}',
	title_day:   '{0} {1} {2}, {3}',

	week:        'Week {0}',
	all_day:     'De hele dag door',
	time:        'Tijd',
	events:      'Agenda-item',
	before_time: 'Eindigd voor tijdlijn',
	after_time:  'Start na tijdlijn',

	m0:  'Januari',
	m1:  'Februari',
	m2:  'Maart',
	m3:  'April',
	m4:  'Mei',
	m5:  'Juni',
	m6:  'Juli',
	m7:  'Augustus',
	m8:  'September',
	m9:  'Oktober',
	m10: 'November',
	m11: 'December',

	ms0:  'Jan',
	ms1:  'Feb',
	ms2:  'Mrt',
	ms3:  'Apr',
	ms4:  'Mei',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aug',
	ms8:  'Sep',
	ms9:  'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Zondag',
	d1: 'Maandag',
	d2: 'Dinsdag',
	d3: 'Woensdag',
	d4: 'Donderdag',
	d5: 'Vrijdag',
	d6: 'Zaterdag',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     'Nieuwjaarsdag',
		'06-01':     'Drie koningen',
		'easter-2':  'Goede vrijdag',
		'easter':    '1e paasdag',
		'easter+1':  '2e paasdag',
		'26-04':     'Koningsdag',
		'05-05':     'Bevrijdingsdag',
		'easter+39': 'Hemelvaartsdag',
		'easter+49': '1e pinksterdag',
		'easter+50': '2e pinksterdag',
		'25-12':     '1e kerstdag',
		'26-12':     '2e kerstdag'
	}
};

window.calendar_languages['no-NO'] = {
	error_noview:     'Kalender: {0} ble ikke funnet',
	error_dateformat: 'Kalender: Feil datoformat {0}. Må være "now" eller "åååå-mm-dd"',
	error_loadurl:    'Kalender: urlen for events er ikke satt',
	error_where:      'Kalender: Feil navigeringsrettning {0}. Kan kun være "next", "prev" eller "today"',
	error_timedevide: 'Kalender: parameter for tidsavgrensning må dele 60 med et heltall. Til eksempel 10, 15, 30',

	title_year:  'År {0}',
	title_month: '{0} år {1}',
	title_week:  '{0} uke år {1}',
	title_day:   '{0} {1} {2} år {3}',

	week:        'Uke {0}',
	all_day:     'Hele dagen',
	time:        'Tid',
	events:      'Event',
	before_time: 'Avsluttes før tidslinjen',
	after_time:  'Starter etter tidslinjen',

	m0:  'Januar',
	m1:  'Februar',
	m2:  'Mars',
	m3:  'April',
	m4:  'Mai',
	m5:  'Juni',
	m6:  'Juli',
	m7:  'August',
	m8:  'September',
	m9:  'Oktober',
	m10: 'November',
	m11: 'December',

	ms0:  'Jan',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Apr',
	ms4:  'Mai',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aug',
	ms8:  'Sep',
	ms9:  'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Søndag',
	d1: 'Mandag',
	d2: 'Tirsdag',
	d3: 'Onsdag',
	d4: 'Torsdag',
	d5: 'Fredag',
	d6: 'Lørdag',

	easter:       'Påske',
	easterMonday: 'Første påskedag',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
	}
};

window.calendar_languages['pl-PL'] = {
	error_noview:     'Kalendarz: Widok {0} nie znaleziony',
	error_dateformat: 'Kalendarz: Zły format daty {0}. Powinna być w formacie "now" lub "yyyy-mm-dd"',
	error_loadurl:    'Kalendarz: Adres URL do ładowania wydarzeń nie ustawiony',
	error_where:      'Kalendarz: Zły kierunek nawigacji {0}. Może być tylko "następny" or "poprzedni" or "dzisiaj"',
	error_timedevide: 'Kalendarz: parametr do separatora czasu należy podzielić 60 przez liczbę całkowitą. Na przykład 10, 15, 30',

	title_year:  'Rok {0}',
	title_month: '{0} rok {1}',
	title_week:  '{0} tydzień roku {1}',
	title_day:   '{0} {1} {2} rok {3}',

	week:        'Tydzień {0}',
	all_day:     'Cały dzień',
	time:        'Czas',
	events:      'Rozwój',
	before_time: 'Czasu, zanim taśma koniec',
	after_time:  'Kończy się po taśmie tymczasowej',

	m0:  'Styczeń',
	m1:  'Luty',
	m2:  'Marzec',
	m3:  'Kwiecień',
	m4:  'Maj',
	m5:  'Czerwiec',
	m6:  'Lipiec',
	m7:  'Sierpień',
	m8:  'Wrzesień',
	m9:  'Październik',
	m10: 'Listopad',
	m11: 'Grudzień',

	ms0:  'Sty',
	ms1:  'Lut',
	ms2:  'Mar',
	ms3:  'Kwi',
	ms4:  'Maj',
	ms5:  'Cze',
	ms6:  'Lip',
	ms7:  'Sie',
	ms8:  'Wrz',
	ms9:  'Paź',
	ms10: 'Lis',
	ms11: 'Gru',

	d0: 'Niedziela',
	d1: 'Poniedziałek',
	d2: 'Wtorek',
	d3: 'Środa',
	d4: 'Czwartek',
	d5: 'Piątek',
	d6: 'Sobota',

	easter:       'Wielkanoc',
	easterMonday: 'Poniedziałek wielkanocny',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     "Nowy Rok",
		'06-01':     "Trzech Króli",
		'easter':    "Niedziela Wielkanocna",
		'easter+1':  "Poniedziałek Wielkanocny",
		'01-05':     "Święto Pracy",
		'03-05':     "Święto Konstytucji Trzeciego Maja",
		'easter+49': "Zielone Świątki",
		'easter+60': "Boże Ciało",
		'15-08':     "Wniebowzięcie Najświętszej Maryi Panny",
		'01-11':     "Wszystkich Świętych",
		'11-11':     "Dzień Niepodległości",
		'25-12':     "Pierwszy dzień Bożego Narodzenia",
		'26-12':     "Drugi dzień Bożego Narodzenia"
	}
};

window.calendar_languages['pt-BR'] = {
	error_noview:     'Calendar: View {0} not found',
	error_dateformat: 'Calendar: Formato de data inválido {0}. Deve ser "now" ou "yyyy-mm-dd"',
	error_loadurl:    'Calendar: URL de carregamento de eventos não está atribuida',
	error_where:      'Calendar: Direção de navegação errada {0}. Só pode ser "next", "prev" ou "today"',
	error_timedevide: 'Calendário: parâmetro para o separador de hora deve dividir 60 por um número inteiro. Por exemplo, 10, 15, 30',

	title_year:  '{0}',
	title_month: '{0} de {1}',
	title_week:  '{1} - Semana {0}',
	title_day:   '{0}, {1} de {2} de {3}',

	week:        'Week {0}',
	all_day:     'Durante todo o dia',
	time:        'Tempo',
	events:      'Desenvolvimentos',
	before_time: 'Tempo antes da fita final',
	after_time:  'End depois de uma fita temporária',

	m0:  'Janeiro',
	m1:  'Fevereiro',
	m2:  'Março',
	m3:  'Abril',
	m4:  'Maio',
	m5:  'Junho',
	m6:  'Julho',
	m7:  'Agosto',
	m8:  'Setembro',
	m9:  'Outubro',
	m10: 'Novembro',
	m11: 'Dezembro',

	ms0:  'Jan',
	ms1:  'Fev',
	ms2:  'Mar',
	ms3:  'Abr',
	ms4:  'Mai',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Ago',
	ms8:  'Set',
	ms9:  'Out',
	ms10: 'Nov',
	ms11: 'Dez',

	d0: 'Domingo',
	d1: 'Segunda',
	d2: 'Terça',
	d3: 'Quarta',
	d4: 'Quinta',
	d5: 'Sexta',
	d6: 'Sábado',

	easter:       'Easter',
	easterMonday: 'Easter Monday',

	first_day: 2,

	holidays: {
		'01-01': "Ano Novo",
		'21-04': "Dia de Tiradentes",
		'01-05': "Dia do Trabalhador",
		'07-09': "Dia da Independência",
		'12-10': "Nossa Senhora Aparecida",
		'02-11': "Dia de Finados",
		'15-11': "Proclamação da República",
		'25-12': "Natal"
	}
};

window.calendar_languages['ro-RO'] = {
	error_noview: 		'Calendar: View-ul {0} nu a fost găsit',
	error_dateformat: 	'Calendar: Format dată greșit {0}. Ar trebui să fie "now" sau "yyyy-mm-dd"',
	error_loadurl: 		'Calendar: URL eveniment nu este setat',
	error_where: 		'Calendar: Direcție de navigare greșită {0}. Nu poate fi decât "next" sau "prev" sau "today"',
	error_timedevide: 	'Calendar: Parametru pentru divizat timpul ar trebui să împartă la 60 fără zecimale. Ceva asemănător cu 10, 15, 30',

	no_events_in_day: 'Nici un eveniment în această zi.',

	title_year: 	'{0}',
	title_month: 	'{0} {1}',
	title_week: 	'luna {0} din {1}',
	title_day: 		'{0} {1} {2}, {3}',

	week:			'Luna {0}',
	all_day:     	'Toată ziua',
	time:        	'Ora',
	events:      	'Evenimente',
	before_time: 	'Se încheie înainte de cronologie',
	after_time:  	'Începe după cronologie',

	m0: 	'Ianuarie',
	m1: 	'Februarie',
	m2: 	'Martie',
	m3: 	'Aprilie',
	m4: 	'Mai',
	m5: 	'Iunie',
	m6: 	'Iulie',
	m7: 	'August',
	m8: 	'Septembrie',
	m9: 	'Octobrie',
	m10: 	'Noiembrie',
	m11: 	'Decembrie',

	ms0: 	'Ian',
	ms1: 	'Feb',
	ms2: 	'Mar',
	ms3: 	'Apr',
	ms4: 	'Mai',
	ms5: 	'Iun',
	ms6: 	'Iul',
	ms7: 	'Aug',
	ms8: 	'Sep',
	ms9: 	'Oct',
	ms10: 	'Nov',
	ms11: 	'Dec',

	d0: 'Duminică',
	d1: 'Luni',
	d2: 'Marți',
	d3: 'Miercuri',
	d4: 'Joi',
	d5: 'Vineri',
	d6: 'Sâmbătă',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     "Anul Nou",
		'01-01':     "A DOUA ZI DE ANUL NOU",
		'06-01':     "Botezul Domnului – Boboteaza",
		'07-01':     "Soborul Sfântului Prooroc Ioan Botezătorul şi Înaintemergătorul Domnului",
		'24-01':     "Ziua UNIRII PRINCIPATELOR ROMÂNE",
		'02-02':     "Întâmpinarea Domnului",
		'08-03':     "Ziua Internaţională a Femeii",
		'09-03':     "Sfiinţii 40 de Mucenici",
		'25-03':     "Buna-Vestire",
		'04-04':     "Floriile",
		'18-04':     "Vinerea Mare",
		'easter':    "Paști",
		'easter+1':  "A doua zi de Paşti",
		'easter+2':  "A treia zi de Paşti",
		'01-05':  	 "Ziua internaţională a muncii",
		'24-05':  	 "Naşterea Sfântului Ioan Botezătorul",
		'15-08':  	 "Adormirea Maicii Domnului",
		'29-08':  	 "Tăierea Capului Sfântului Ioan Botezătorul",
		'08-09':  	 "Naşterea Maicii Domnului",
		'14-10':  	 "Sfânta Cuvioasă Parascheva",
		'26-10':  	 "Sfântul Mare Mucenic Dimitrie, Izvorâtorul de Mir",
		'27-10':  	 "Cuviosul Dimitrie cel Nou din Basarabi",
		'08-11':  	 "Soborul Sfinţilor Arhangheli Mihail şi Gavriil",
		'01-12':  	 "Ziua Naţională a României",
		'25-12':  	 "Naşterea Domnului Nostru Iisus Hristos – Crăciunul",
		'26-12':  	 "A doua zi de Crăciun; Soborul Maicii",
		'27-12':  	 "Sfântul Întâiul Mucenic şi Arhidiacon Ştefan",
	}
};

window.calendar_languages['ru-RU'] = {
	error_noview:     'Календарь: Шаблон вида {0} не найден.',
	error_dateformat: 'Календарь: неверный формат даты {0}. Должно быть или "now" или "yyyy-mm-dd"',
	error_loadurl:    'Календарь: не назначен URL для загрузки событий.',
	error_where:      'Календарь: неправильная навигация {0}. Можно только "next", "prev" или "today"',
	error_timedevide: 'Календарь: Параметер разделитель времени должен делить 60 на целое число. Например 10, 15, 30',

	title_year:  '{0}',
	title_month: '{0} {1}',
	title_week:  '{0} неделя года {1}',
	title_day:   '{0}, {1} {2} {3}',

	week:        'Неделя {0}',
	all_day:     'Весь день',
	time:        'Время',
	events:      'События',
	before_time: 'Заканчиваются перед временной лентой',
	after_time:  'Заканчиваются после временной ленты',

	m0:  'Январь',
	m1:  'Февраль',
	m2:  'Март',
	m3:  'Апрель',
	m4:  'Май',
	m5:  'Июнь',
	m6:  'Июль',
	m7:  'Август',
	m8:  'Сентябрь',
	m9:  'Октябрь',
	m10: 'Ноябрь',
	m11: 'Декабрь',

	ms0:  'Янв',
	ms1:  'Фев',
	ms2:  'Мар',
	ms3:  'Апр',
	ms4:  'Май',
	ms5:  'Июн',
	ms6:  'Июл',
	ms7:  'Авг',
	ms8:  'Сен',
	ms9:  'Окт',
	ms10: 'Ноя',
	ms11: 'Дек',

	d0: 'Воскресенье',
	d1: 'Понедельник',
	d2: 'Вторник',
	d3: 'Среда',
	d4: 'Четверг',
	d5: 'Пятница',
	d6: 'Суббота',

	easter:       'Пасха',
	easterMonday: 'Пасхальный понедельник',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':       'Новый год',
		'02-01>06-01': 'Новогодние каникулы',
		'07-01':       'Рождество Христово',
		'08-01':       'Новогодние каникулы',
		'23-02':       'День защитника Отечества',
		'08-03':       'Международный женский день',
		'01-05':       'Праздник Весны и Труда',
		'09-05':       'День Победы',
		'12-06':       'День России',
		'04-11':       'День народного единства'
	}
};

window.calendar_languages['sk-SR'] = {
	error_noview: 'Calendar: View {0} not found',
	error_dateformat: 'Calendar: Wrong date format {0}. Should be either "now" or "yyyy-mm-dd"',
	error_loadurl: 'Calendar: Event URL is not set',
	error_where: 'Calendar: Wrong navigation direction {0}. Can be only "next" or "prev" or "today"',
	error_timedevide: 'Calendar: Time split parameter should divide 60 without decimals. Something like 10, 15, 30',

	no_events_in_day: 'Dnes žiadne udalosti.',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'týždeň {0} of {1}',
	title_day: '{0} {1} {2}, {3}',

	week:'Týždeň {0}',
	all_day:     'Celý deň',
	time:        'Čas',
	events:      'Udalosti',
	before_time: 'Pred rozvrhom',
	after_time:  'Po rozvrhu',

	m0: 'Január',
	m1: 'Február',
	m2: 'Marec',
	m3: 'Apríl',
	m4: 'Máj',
	m5: 'Jún',
	m6: 'Júl',
	m7: 'August',
	m8: 'September',
	m9: 'Október',
	m10: 'November',
	m11: 'December',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mar',
	ms3: 'Apr',
	ms4: 'Maj',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Aug',
	ms8: 'Sep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Nedeľa',
	d1: 'Pondelok',
	d2: 'Utorok',
	d3: 'Streda',
	d4: 'Štvrtok',
	d5: 'Piatok',
	d6: 'Sobota',

	first_day: 1,
	week_numbers_iso_8601: true,
	holidays: {
	}
};

window.calendar_languages['sl-SL'] = {
	error_noview: 'Koledar: Ne najdem pogleda {0}',
	error_dateformat: 'Koledar: Napačna oblika datuma {0}. Mora biti bodisi "now" ali "yyyy-mm-dd"',
	error_loadurl: 'Koledar: URL dogodek ni nastavljen',
	error_where: 'Koledar: Napačna smer navigacije {0}. Lahko je le "next", "prev" ali "today"',
	error_timedevide: 'Koledar: Time split parameter should divide 60 without decimals. Something like 10, 15, 30',

	no_events_in_day: 'V tem dnevu ni dogodkov.',

	
	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'teden {0} v letu {1}',
	title_day: '{0} {1} {2}, {3}',

	week:'Teden {0}',
	all_day:     'Cel dan',
	time:        'Čas',
	events:      'Dogodki',
	before_time: 'Ends before timeline',
	after_time:  'Starts after timeline',

	m0: 'Januar',
	m1: 'Februar',
	m2: 'Marec',
	m3: 'April',
	m4: 'Maj',
	m5: 'Junij',
	m6: 'Julij',
	m7: 'Avgust',
	m8: 'September',
	m9: 'Oktober',
	m10: 'November',
	m11: 'December',

	ms0: 'Jan',
	ms1: 'Feb',
	ms2: 'Mar',
	ms3: 'Apr',
	ms4: 'Maj',
	ms5: 'Jun',
	ms6: 'Jul',
	ms7: 'Avg',
	ms8: 'Sep',
	ms9: 'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Nedelja',
	d1: 'Ponedeljek',
	d2: 'Torek',
	d3: 'Sreda',
	d4: 'Četrtek',
	d5: 'Petek',
	d6: 'Sobota',

	first_day: 1,
	week_numbers_iso_8601: true,
	holidays: {
	}
};

window.calendar_languages['sv-SE'] = {
	error_noview:     'Kalender: Vy {0} ej funnen',
	error_dateformat: 'Kalender: Felaktigt datumformat {0}. Skall vara antingen "now" eller "yyyy-mm-dd"',
	error_loadurl:    'Kalender: Laddnings-URL för händelser är ej satt',
	error_where:      'Kalender: Felaktig navigeringsriktning {0}. Kan endast vara "next", "prev" eller "today"',
	error_timedevide: 'Kalender: Parameter till tidsavgränsare måste dela 60 med ett heltal. Till exempel 10, 15, 30',

	title_year:  '{0}',
	title_month: '{0} {1}',
	title_week:  'Vecka {0} {1}',
	title_day:   '{0} {1} {2} {3}',

	week:        'Vecka {0}',
	all_day:     'Hela dagen',
	time:        'Tid',
	events:      'Händelser',
	before_time: 'Slutar före tidsperiod',
	after_time:  'Börjar efter tidsperiod',

	m0:  'Januari',
	m1:  'Februari',
	m2:  'Mars',
	m3:  'April',
	m4:  'Maj',
	m5:  'Juni',
	m6:  'Juli',
	m7:  'Augusti',
	m8:  'September',
	m9:  'Oktober',
	m10: 'November',
	m11: 'December',

	ms0:  'Jan',
	ms1:  'Feb',
	ms2:  'Mar',
	ms3:  'Apr',
	ms4:  'Maj',
	ms5:  'Jun',
	ms6:  'Jul',
	ms7:  'Aug',
	ms8:  'Sep',
	ms9:  'Okt',
	ms10: 'Nov',
	ms11: 'Dec',

	d0: 'Söndag',
	d1: 'Måndag',
	d2: 'Tisdag',
	d3: 'Onsdag',
	d4: 'Torsdag',
	d5: 'Fredag',
	d6: 'Lördag',

	easter:       'Påsk',
	easterMonday: 'Måndagen efter påsk',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01':     "Nyårsdagen",
		'06-01':     "Trettondedag jul",
		'easter-2':  "Långfredagen",
		'easter':    "Påskdagen",
		'easter+1':  "Annandag påsk",
		'01-05':     "Första maj",
		'easter+39': "Kristi himmelsfärdsdag",
		'easter+49': "Pingstdagen",
		'06-06':     "Sveriges nationaldag",
		'25-12':     "Juldagen",
		'26-12':     "Annandag jul"
	}
};

window.calendar_languages['th-TH'] = {
	error_noview: 'ปฏิทิน: ไม่พบ View {0}',
	error_dateformat: 'ปฏิทิน: รูปแบบวันที่ไม่ถูกต้อง {0}. ควรจะเป็นค่า "now" หรือ "yyyy-mm-dd"',
	error_loadurl: 'ปฏิทิน: URL ของเหตุการณ์ไม่ได้ตั้งค่าไว้',
	error_where: 'ปฏิทิน: เกิดข้อผิดพลาด {0}. สามารถเป็นได้แค่ค่า "ถัดไป" หรือ "ก่อนหน้า" หรือ "วันนี้" เท่านั้น',
	error_timedevide: 'ปฏิทิน:  Time split parameter ควรนำไปหาร 60 ลงตัวเท่านั้น. อย่างเช่น 10, 15, 30',

	no_events_in_day: 'วันนี้ไม่มีเหตุการณ์ใดๆ',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: 'สัปดาห์ที่ {0} ของปี {1}',
	title_day: '{0} {1} {2}, {3}',

	week:'สัปดาห์ที่ {0}',
	all_day:     'ทุกวัน',
	time:        'เวลา',
	events:      'เหตุการณ์',
	before_time: 'เริ่มก่อน Timeline',
	after_time:  'เริ่มหลัง Timeline',

	m0: 'มกราคม',
	m1: 'กุมภาพันธ์',
	m2: 'มีนาคม',
	m3: 'เมษายน',
	m4: 'พฤษภาคม',
	m5: 'มิถุนายน',
	m6: 'กรกฎาคม',
	m7: 'สิงหาคม',
	m8: 'กันยายน',
	m9: 'ตุลาคม',
	m10: 'พฤศจิกายน',
	m11: 'ธันวาคม',

	ms0: 'ม.ค.',
	ms1: 'ก.พ.',
	ms2: 'มี.ค.',
	ms3: 'เม.ย.',
	ms4: 'พ.ค.',
	ms5: 'มิ.ย.',
	ms6: 'ก.ค.',
	ms7: 'ส.ค.',
	ms8: 'ก.ย.',
	ms9: 'ต.ค.',
	ms10: 'พ.ย.',
	ms11: 'ธ.ค.',

	d0: 'อาทิตย์',
	d1: 'จันทร์',
	d2: 'อังคาร',
	d3: 'พุธ',
	d4: 'พฤหัสบดี',
	d5: 'ศุกร์',
	d6: 'เสาร์',

	first_day: 1,
	week_numbers_iso_8601: true,
	holidays: {
	}
};

window.calendar_languages['tr-TR'] = {
	error_noview: 'Takvim: Görünüm {0} bulunamadı',
	error_dateformat: 'Takvim: Yanlış tarih formatı {0}. Şunlardan biri olmalı "now" veya "yyyy-mm-dd"',
	error_loadurl: 'Takvim: Etkinlik bağlantısı belirtilmemiş',
	error_where: 'Takvim: Yanlış gezinme yönü {0}. Sadece bunlardan biri olabilir "next" veya "prev" veya "today"',
	error_timedevide: 'Takvim: Zaman bölme parametresi 60\'ı kalansız bölmelidir. 10, 15, 30 gibi',

	no_events_in_day: 'Bugün etkinlik yok',

	title_year: '{0}',
	title_month: '{0} {1}',
	title_week: '{1} {0}. Hafta',
	title_day: '{0} {1} {2}, {3}',

	week:        '{0}. Hafta',
	all_day:     'Tüm gün',
	time:        'Zaman',
	events:      'Etkinlikler',
	before_time: 'Zamanından önce biter',
	after_time:  'Zamanından sonra başlar',

	m0: 'Ocak',
	m1: 'Şubat',
	m2: 'Mart',
	m3: 'Nisan',
	m4: 'Mayıs',
	m5: 'Haziran',
	m6: 'Temmuz',
	m7: 'Ağustos',
	m8: 'Eylül',
	m9: 'Ekim',
	m10: 'Kasım',
	m11: 'Aralık',

	ms0: 'Oca',
	ms1: 'Şub',
	ms2: 'Mar',
	ms3: 'Nis',
	ms4: 'May',
	ms5: 'Haz',
	ms6: 'Tem',
	ms7: 'Ağu',
	ms8: 'Eyl',
	ms9: 'Eki',
	ms10: 'Kas',
	ms11: 'Ara',

	d0: 'Pazar',
	d1: 'Pazartesi',
	d2: 'Salı',
	d3: 'Çarşamba',
	d4: 'Perşembe',
	d5: 'Cuma',
	d6: 'Cumartesi',

	first_day: 1,
	week_numbers_iso_8601: true,

	holidays: {
		'01-01' : 'Yılbaşı',
		'23-04' : 'Ulusal Egemenlik ve Çocuk Bayramı',
		'01-05' : 'İşçi Bayramı',
		'19-05' : 'Atatürk\'ü Anma, Gençlik ve Spor Bayramı',
		'30-08' : 'Zafer Bayramı',
		'29-10' : 'Cumhuriyet Bayramı'
	}
};

window.calendar_languages['zh-CN'] = {
	error_noview:     'Calendar: 没有发现视图 {0} ',
	error_dateformat: 'Calendar: 日期格式不正确： {0}. 应当为 "now" 或者 "yyyy-mm-dd"',
	error_loadurl:    'Calendar: 没有设置事件的 URL',
	error_where:      'Calendar: 导航指示错误 {0}. 只能是 "next" 或 "prev" 或 "today"',
	error_timedevide: 'Calendar: 时间分隔参数只能是被60整除的整数. 例如 10、15、30',

	no_events_in_day: '今天没有事件。',

	title_year:       '{0}',
	title_month:      '{1} 年 {0}',
	title_week:       '{1} 年 第 {0} 周 ',
	title_day:        '{3} 年 {2} {1} 日， {0} ',

	week:        '第{0}周',
	all_day:     '全天',
	time:        '时间',
	events:      '事件',
	before_time: '结束早于时间轴',
	after_time:  '开始晚于时间轴',

	m0:  '1 月',
	m1:  '2 月',
	m2:  '3 月',
	m3:  '4 月',
	m4:  '5 月',
	m5:  '6 月',
	m6:  '7 月',
	m7:  '8 月',
	m8:  '9 月',
	m9:  '10 月',
	m10: '11 月',
	m11: '12 月',

	ms0:  '1 月',
	ms1:  '2 月',
	ms2:  '3 月',
	ms3:  '4 月',
	ms4:  '5 月',
	ms5:  '6 月',
	ms6:  '7 月',
	ms7:  '8 月',
	ms8:  '9 月',
	ms9:  '10 月',
	ms10: '11 月',
	ms11: '12 月',

	d0:        '周日',
	d1:        '周一',
	d2:        '周二',
	d3:        '周三',
	d4:        '周四',
	d5:        '周五',
	d6:        '周六',

	first_day: 2,

	holidays:  {
		'01-01': '元旦',
		'08-03': '妇女节',
		'01-05': '国际劳动节',
		'04-05': '青年节',
		'01-06': '儿童节',
		'01-10': '国庆节'
	}
};

window.calendar_languages['zh-TW'] = {
	error_noview:     'Calendar: 找不到圖片 {0} ',
	error_dateformat: 'Calendar: 日期格式錯誤： {0}. 應該以「now」表示，或「yyyy-mm-dd」',
	error_loadurl:    'Calendar: 事件網址尚未設定',
	error_where:      'Calendar: 錯誤的瀏覽方向 {0}。瀏覽方向只能是「下一個」或「上一個」或「今天」',
	error_timedevide: 'Calendar: 時間分割的參數單位應該在 60 以內且無小數。例如說 10, 15, 30',

	no_events_in_day: '今天沒有事件。',

	title_year:       '{0}',
	title_month:      '{1} 年 {0}',
	title_week:       '{1} 年 第 {0} 周 ',
	title_day:        '{3} 年 {2} {1} 日， {0} ',

	week:        '第{0}周',
	all_day:     '整天',
	time:        '時間',
	events:      '事件',
	before_time: '時間軸結束前',
	after_time:  '時間軸結束後',

	m0:  '1 月',
	m1:  '2 月',
	m2:  '3 月',
	m3:  '4 月',
	m4:  '5 月',
	m5:  '6 月',
	m6:  '7 月',
	m7:  '8 月',
	m8:  '9 月',
	m9:  '10 月',
	m10: '11 月',
	m11: '12 月',

	ms0:  '1 月',
	ms1:  '2 月',
	ms2:  '3 月',
	ms3:  '4 月',
	ms4:  '5 月',
	ms5:  '6 月',
	ms6:  '7 月',
	ms7:  '8 月',
	ms8:  '9 月',
	ms9:  '10 月',
	ms10: '11 月',
	ms11: '12 月',

	d0:        '周日',
	d1:        '周一',
	d2:        '周二',
	d3:        '周三',
	d4:        '周四',
	d5:        '周五',
	d6:        '周六',

	first_day: 2,

	holidays:  {
		'01-01': '元旦',
        '10-10': '國慶日',
	}
};