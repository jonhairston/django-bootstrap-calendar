import re, json,logging
from channels import Group
from channels.sessions import channel_session
from .models import Room

log = logging.getLogger(__name__)

@channel_session
def ws_connect(message):
	# Extract the room from the message. This expexts message.path to be of the 
	# form /chat/{label}/, and finds a Room if the message is applicable, 
	# and if the Room exists. Otherwise, bails (meaninig this is a some othersort
	# of websocket). So, this is effectively a version of get_object_or_404.

	try:
		prefix, label = message['path'].strip('/').split('/')
		if prefix is 'chat':
			log.debug('invalid ws path=%s', message['path'])
			return
		room = Room.objects.get(label=label)
	except ValueError:
		log.debug('invalid ws path=%s', message['path'])
		return
	except Room.DoesNotExist:
		log.debug('ws room  does not exist label=%s', label)
		return

	log.debug('chat connect room=%s client=%s:%s',
		room.label, message['client'][0], message['client'][1])
	Group ('chat-'+label).add(message.reply_channel)
	message.channel_session['room'] = room.label


@channel_session
def ws_receive(message):
	# Look up the room from the channel session, bailing if it doesn't exist
	try:
		label = message.channel_session['room']
		room = Room.objects.get(label=label)
	except KeyError:
		log.debug('no room in channel_session')
		return
	except Room.DoesNotExist:
		log.debug('received message, buy room does not exist label=%s', label)


	# Parse out a chat message from the content text, bailing if it doesn't
	# conform to the expected message format.
	try:
		data = json. loads(message['text'])
	except ValueError:
		log.debug("ws_message isn't json text=%s", text)
		return

	if set(data.keys()) != set(('handle', 'message')):
		log.debug('ws message unexpected format data=%s', data)
		return

	if data: 
		log.debug('chat messasge room=%s handle=%s message=%s',
			room.label, data['handle'], data['message'])
		m = room.messages.create(**data)
		Group('chat-'+label).send({'text': json.dumps(m.as_dict())})


@channel_session
def ws_disconnect(message):
	try:
		label = message.channel_session['room']
		room = Room.objects.get(label=label)
		Group('chat-'+label).discard(message.reply_channel)
	except (KeyError, Room.DoesNotExist):
		pass	