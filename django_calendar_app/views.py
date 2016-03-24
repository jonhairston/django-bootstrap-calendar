from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from .models import CalendarEvent
from .serializers import event_serializer
from .utils import timestamp_to_datetime
import datetime
from django.conf import settings




class CalendarJsonListView(ListView):

    template_name = 'calendar.html'
    def get_queryset(self):
        queryset = CalendarEvent.objects.all()
        from_date = self.request.GET.get('from', False)
        to_date = self.request.GET.get('to', False)

        if from_date and to_date:
            queryset = queryset.filter(
                start__range=(
                    timestamp_to_datetime(from_date) + datetime.timedelta(-30),
                    timestamp_to_datetime(to_date)
                    )
            )
        elif from_date:
            queryset = queryset.filter(
                start__gte=timestamp_to_datetime(from_date)
            )
        elif to_date:
            queryset = queryset.filter(
                end__lte=timestamp_to_datetime(to_date)
            )
        print event_serializer(queryset) 
        return event_serializer(queryset)


class CalendarView(TemplateView):

    template_name = 'calendar_base.html'
