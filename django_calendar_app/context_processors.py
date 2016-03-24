from django.conf import settings 

def template_url(request):
	# return our template url 
	return {
		'calendar_template_url': settings.TEMPLATE_DIRECTORY_LIST[0]
	}