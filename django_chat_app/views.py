from django.shortcuts import render, redirect


# Create your views here.=

import random, string, haikunator
from django.db import transaction
from .models import Room

def about(request):
	return render(request, 'chat/about.html')

def new_room(request):
	"""
	Randomaly create a new romm, and redirect to it.

	"""

	new_room = None
	while not new_room:
		with transaction.atomic():
			label = haikunator.haikunate()
			if Room.objects.filter(label=label).exists():
				continue
			new_room = Room.objects.create(label=label)
	return redirect(chat_room, label=label)

def chat_room(request, label):
	"""
	Room view - show the room, with latest messages.

	The template for the view has the WebSocket business to send and stream 
	messages, so see the template for where the majic happens.
	"""

	# If the room with teh given label doesn't exist, automatically create it
	# upon first visit (a la etherpad).
	room, created =Room.objects.get_or_create(label=label)

	# We want to show the last 50 messages, ordered mos-recent-last
	messages = reversed(room.messages.order_by('-timestamp')[:50])

	return render(request, 'chat/room.html', {
		'room': room,
		'messages': messages
	})
