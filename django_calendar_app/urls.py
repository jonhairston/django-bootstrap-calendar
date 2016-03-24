from django.conf.urls import patterns, url
from .views import CalendarView, CalendarJsonListView

# from django.contrib.auth.decorators import login_required


urlpatterns = patterns('',
    url(r'^json/', CalendarJsonListView.as_view(), name='calendar_json'),
    url( r'^$', CalendarView.as_view(), name='calendar'),
)