from django.conf.urls import include, url, patterns
from . import views

urlpatterns = patterns('',
	url(r'^about', views.about, name='about'),
	url(r'^new/', views.new_room, name='new_room'),
	url(r'^(?P<label>[\w-]{,50})/$', views.chat_room, name='chat_room'),

	)
